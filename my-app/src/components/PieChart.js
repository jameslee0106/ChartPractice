import React from 'react'
import { Pie } from "react-chartjs-2"
import { Chart as chartjs } from 'chart.js/auto'

export const PieChart = ({chartData}) => {
  return (
    <Pie data = {chartData} />
  )
}
