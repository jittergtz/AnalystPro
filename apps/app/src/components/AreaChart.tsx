import { ChartBarInteractive } from '@v1/ui/BarChart'
import { ChartAreaLinear } from '@v1/ui/ChartAreaLinear'
import { ChartTooltipIndicatorLine } from '@v1/ui/LineChart'
import { ChartPieLabel } from '@v1/ui/PieChart'
import { ChartRadarDots } from '@v1/ui/RadarChart'


import React from 'react'
import ResultText from './Research/result-text'

function AreaChart() {
  return (
    <main className='flex flex-col gap-3'>
    <div className='flex flex-col md:flex-row gap-2 mt-6'>
     <ChartAreaLinear/>
     <ChartAreaLinear/>
     <ChartAreaLinear/>

    
    </div>
    <ChartBarInteractive/>
  

  <div className='flex justify-between gap-2'>
    <ChartPieLabel/>

    <ChartRadarDots/>
   
   <ChartTooltipIndicatorLine/>
    </div>

    <ResultText/>
    </main>
  )
}

export default AreaChart