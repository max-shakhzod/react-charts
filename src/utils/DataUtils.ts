import { ChartData } from '../types' // Import the ChartData type

export const getMean = (values: number[]): number => {
  const sum = values.reduce((sum, val) => sum + val, 0)
  return sum / values.length
}

export const getStdDev = (values: number[], mean: number): number => {
  const sumSquaredDiffs = values.reduce(
    (sum, val) => sum + Math.pow(val - mean, 2),
    0
  )
  return Math.sqrt(sumSquaredDiffs / values.length)
}

// Update the type of rawData to ChartData[] instead of any[]
export const calculateZScores = (rawData: ChartData[], mean: number, stdDev: number): ChartData[] => {
  return rawData.map((d) => ({
    ...d,
    pvZ: d.pv !== null ? (d.pv - mean) / stdDev : undefined,
  }))
}

// Update the type of dataWithZ to ChartData[] instead of any[]
export const splitDataByZScore = (dataWithZ: ChartData[]): { normalData: ChartData[], outlierData: ChartData[] } => {
  const normalData = dataWithZ.map((d) =>
    d.pvZ !== undefined && Math.abs(d.pvZ) <= 1
      ? d
      : { ...d, pv: null }
  )
  const outlierData = dataWithZ.map((d) =>
    d.pvZ !== undefined && Math.abs(d.pvZ) > 1
      ? d
      : { ...d, pv: null }
  )
  return { normalData, outlierData }
}
