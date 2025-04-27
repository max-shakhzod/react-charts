// Chart.tsx
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from 'recharts'
  import { useMemo, FC } from 'react'
  import { ChartData } from '../types'
  import { NormalDot, OutlierDot } from './CustomDots'
  import { getMean, getStdDev, calculateZScores, splitDataByZScore } from '../utils/DataUtils'
  
  const Chart: FC<{ rawData: ChartData[] }> = ({ rawData }) => {
    // ✅ Calculate mean, std dev and z-scores
    const pvValues = rawData.map((d) => d.pv as number)
    const mean = useMemo(() => getMean(pvValues), [pvValues])
    const stdDev = useMemo(() => getStdDev(pvValues, mean), [pvValues, mean])
  
    const dataWithZ = useMemo(() => calculateZScores(rawData, mean, stdDev), [rawData, mean, stdDev])
    const { normalData, outlierData } = useMemo(() => splitDataByZScore(dataWithZ), [dataWithZ])
  
    return (
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={dataWithZ} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
  
          <Line
            type="monotone"
            data={normalData}
            dataKey="pv"
            stroke="#8884d8"
            dot={<NormalDot />}
            name="PV (Normal)"
          />
          <Line
            type="monotone"
            data={outlierData}
            dataKey="pv"
            stroke="red"
            dot={<OutlierDot />}
            name="PV (Outlier)"
          />
        </LineChart>
      </ResponsiveContainer>
    )
  }
  
  export default Chart
  