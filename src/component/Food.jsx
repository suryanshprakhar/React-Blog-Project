import React from 'react'
import MainTemplate from './MainTemplete'
import TopPost from './TopPost';
export default function Food() {
  return (
    <div>
      <div className='bollwood-Cont'>
      <div>
      <MainTemplate startId='31' endId='36' loadMore='1'/>
      </div>
      <div>
      <TopPost />
      </div>
    </div>
    </div>
  )
}
