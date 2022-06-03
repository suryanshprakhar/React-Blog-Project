import React,{useContext} from 'react'
import { contextCreated } from '../../App'
import { Link } from 'react-router-dom'
import "./style.css"
import SideArticle from './SideArtical'
export default function HeadlineArtical() {
    const data = useContext(contextCreated)
    return (
        <>
        <div className='slider'>
        <div className="containerHeading">
          {data
            .filter((item) => item.id === 26)
            .map((item) => {
              return (
                <div className="mainArticle1" key={Math.random()}>
                  <Link to={`/article/${item.id}`} className="link">
                    <img src={item.src} alt={item.alt} />
                    {console.log(item.src)}
                  </Link>
                  <div className="mainArticle1Text">
                    <Link to={`/article/${item.id}`} className="link">
                      <h2 className="mainArticle1Heading">{item.title}</h2>
                    </Link>
                    <small>{item.info}</small>
                  </div>
                </div>
              )
            })}
          <SideArticle />
          </div>
        </div>

        </>
      )
}
