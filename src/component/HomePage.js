import React from 'react'
import { useContext } from 'react'
import { contextCreated } from "../App"
import AdHome from './Home/AdHome'
import HeadlineArtical from './Home/HeadlineArtical'
import MainTemplete from './MainTemplete'
import './Home/style.css'
import TopPost from './TopPost'
import { Link } from 'react-router-dom'
import Leteast from './Home/Lateast'
import Templete from './Home/Templete'



export default function HomePage() {

  const dataProvided = useContext(contextCreated)
  let tempId = Math.floor(Math.random() * (25 - 1 + 1) + 1)
  const data = dataProvided.filter((item) => item.id === tempId)

  // console.log(data)
  return (
    <div>
      <HeadlineArtical />
      <Templete />

      <div>
        <h2 className='article-heading'>The Article</h2>
        <div className='mainTemp'>
          <MainTemplete startId="5" endId="9" loadMore='1' />
          <div className='aaa'>
            <AdHome />
            <TopPost classname='topPostHome' />
          </div>
        </div>
      </div>
      <div>
      {
        data.map((item) => {
          return (
            <div className="oneHome" key={Math.random()}>
              <Link to={`/article/${item.id}`} className="linkTemplate">
                <img src={item.src} alt={item.alt} />
              </Link>
              <div className="mainArticle1Text">
                <Link to={`/article/${item.id}`} className="linkTemplate">
                  <h2 className="oneHome-Heading">{item.title}</h2>
                </Link>
                <small>{item.info}</small>
              </div>
            </div>
          )
        })
      }
      <Leteast startId='6' endId='9' />
      </div>
    </div>
  )
}
