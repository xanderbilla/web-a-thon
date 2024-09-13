import React from 'react'
import { TabsDemo } from './components/TabsDemo'

type Props = {}

export default function page({}: Props) {
  return (
    <div className='w-full h-full flex items-center justify-center'>
      <TabsDemo />
    </div>
  )
}