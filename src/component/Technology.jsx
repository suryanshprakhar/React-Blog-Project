import React from 'react'
import MainTemplate from './MainTemplete'
import TopPost from './TopPost';
export default function Technology() {
  return (
    <div>
      <div className='bollwood-Cont'>
      <div>
      <MainTemplate startId='11' endId='15' loadMore='1'/>
      </div>
      <div>
      <TopPost />
      </div>
    </div>
    </div>
  )
}
