import { ChartAreaLinear } from '@v1/ui/ChartAreaLinear'
import React from 'react'

function AreaChart() {
  return (
    <div className='flex flex-col md:flex-row gap-2 mt-6'>
     <ChartAreaLinear/>
     <ChartAreaLinear/>
     <ChartAreaLinear/>
    </div>
  )
}

export default AreaChart