import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import { contextCreated } from '../../App'

export default function Templete() {
  const data = useContext(contextCreated)
  let leatestData = []
  for(let i=0; i<3;i++){
    leatestData.push(data[i])
  }
  const articalInfo = (info,index)=>{
    let arr = info.split('/')
    return (arr[index])
  }
  return( 
  <div>
    <h2 className='leatest-heading'>The Leatest</h2>
  <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 tempContainer'>
 {leatestData.map((n)=>{
        return (<Link to={`article/${n.id}` } className='linkTemplate' key={n.id}> <div className="col">
        <div className="card shadow-sm threeTemplate">
          <img
            className="bd-placeholder-img card-img-top"
            width="100%"
            height={225}
            aria-label="Placeholder: Thumbnail"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
            src={n.src}
          />
            <h3>{n.title}</h3>
        
          <div className="card-body">
            <p className="card-text">
              {
                `${n.description.slice(0,150)}....`
              }
            </p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <h6>
                  {
                    articalInfo(n.info,0)
                  }
                </h6>
              </div>
              <small className="text-muted">{articalInfo(n.info, 1)}</small>
            </div>
          </div>
        </div>
      </div>
      </Link>)
  })}
  </div>
  </div>
  )  
  
}
