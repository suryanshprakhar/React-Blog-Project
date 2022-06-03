import React from 'react'
import MainTemplate from './MainTemplete'
import TopPost from './TopPost';

export default function Hollywood() {
  return (
    <div>
      <div className='bollwood-Cont'>
      <div>
      <MainTemplate startId='16' endId='20' loadMore='1'/>
      </div>
      <div>
      <TopPost />
      </div>
    </div>
    </div>
  )
}
