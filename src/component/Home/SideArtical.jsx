import React, { createContext, useContext } from "react"
import { Link } from "react-router-dom"
import { contextCreated } from "../../App"

const SideArticle = () => {
  const dataContext = useContext(contextCreated)

  return (
    <React.Fragment>
      <div className="side-Container">

     
      {dataContext
        .filter((item) => item.id >= 27 && item.id <= 28)
        .map((item) => {
          return (
            <div
              className="mainArticle2"
              key={Math.floor(Math.random() * 1000)}
            >
              <Link to={`/article/${item.id}`} className="link">
                <img src={item.src} alt={item.alt} />
              </Link>
              <div className="mainArticle2Text">
                <Link to={`/article/${item.id}`} className="link">
                  <h2 className="mainArticle2Heading">{item.title}</h2>
                </Link>
                <small>{item.info}</small>
              </div>
            </div>
          )
        })}
         </div>
    </React.Fragment>
  )
}

export default SideArticle