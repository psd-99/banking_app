"use client";


import React from 'react'
import CountUp from 'react-countup'

export const AnimatedCounter = ({amount} :{amount: number}) => {
  return (
    <div>
        <CountUp 
            duration={2.75}
            decimal='.'
            decimals={2}
            prefix='$'
            end={amount} />
    </div>
  )
}
