// CustomDots.tsx
import { FC } from 'react'
import { DotProps } from 'recharts'
import { ChartData } from '../types'

export const NormalDot: FC<DotProps> = (props) => {
  const { cx, cy, payload } = props as DotProps & { payload: ChartData }
  if (payload.pv === null) return null
  return <circle cx={cx} cy={cy} r={4} stroke="#8884d8" fill="#8884d8" />
}

export const OutlierDot: FC<DotProps> = (props) => {
  const { cx, cy, payload } = props as DotProps & { payload: ChartData }
  if (payload.pv === null) return null
  return <circle cx={cx} cy={cy} r={4} stroke="red" fill="red" />
}
