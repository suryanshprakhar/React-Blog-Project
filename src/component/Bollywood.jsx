import React from 'react'
import MainTemplate from './MainTemplete'
import TopPost from './TopPost';

export default function Bollywood() {
  return (
    <div className='bollwood-Cont'>
      <div>
      <MainTemplate startId='6' endId='10' loadMore='1'/>
      </div>
      <div>
      <TopPost />
      </div>
    </div>
  )
}
