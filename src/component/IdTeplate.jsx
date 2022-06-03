import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import MainTemplete from './MainTemplete';
import { contextCreated } from '../App';
import TopPost from './TopPost';


export default function NewEle() {
  let data = useContext(contextCreated)
  const params = useParams();
  const { id } = params;
  data = data.filter((ele) => ele.id == id)
  // console.log(data)
  return (
    <>
      <div className='IDmain-container'>
        <div className='IDleft-part'>
          <div>
            <div className='ID-clap'><img src={require('./assest/clap.png')} />{`  ${data[0].clap}k`}</div>

            <div><img src={require('./assest/share.png')} />Share this article</div>
          </div>
        </div>
        <div className='IDright-part'>
          <h2>{data[0].details}</h2>
          <div>
            <span className='IDtopBar'>
              <img src={require('./assest/auther.png')} alt="hjdhxsf" className='IDtopBar-img' />

              <h5>{data[0].author}</h5>
              <br />
              {`${data[0].date}  |  ${data[0].readTime}`}
            </span>
          </div>
          <div><img className='IDmain-img' src={data[0].src} alt={data[0].alt} /></div>
          <p>
            {data[0].description}
          </p>
          <div>
            <span className='IDtag'>{data[0].tags}</span>
            <div>
              <br /><br />
              <span className='ID-container-Clap'><img src={require("./assest/clap.png")} alt="clap" />{data[0].clap}</span>
              <br /><br />
            </div>
            <div className='IDtopBar'>
              <span><img src={require('./assest/auther.png')} alt="img" className='IDtopBar-img' /></span>
              <span>Written By {`-`}
                <h5>{data[0].author}</h5></span>
              <br />
              <span>{`${data[0].date}  |  ${data[0].readTime}`}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
