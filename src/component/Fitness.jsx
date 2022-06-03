import React from 'react'
import MainTemplate from './MainTemplete'
import TopPost from './TopPost';
export default function Fitness() {
  return (
    <div>
      <div className='bollwood-Cont'>
      <div>
      <MainTemplate startId='21' endId='25' loadMore='1'/>
      </div>
      <div>
      <TopPost />
      </div>
    </div>
    </div>
  )
}
