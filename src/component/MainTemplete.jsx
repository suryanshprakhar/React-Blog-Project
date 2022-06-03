import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { contextCreated } from './../App';
function MainTemplete(props) {
    const { startId, endId, loadMore } = props
    let data = useContext(contextCreated)
    let [start, setStart] = useState(parseInt(startId))
    let [end, setEnd] = useState(endId - loadMore)
    let [flag, setFlag] = useState(true)
    const load = () => {
        // start += parseInt(loadMore)
        end += parseInt(loadMore)
        setStart(start)
        setEnd(end)
        setFlag(false)
    }
    // let tempData = data.filter((ele)=>ele)
    // const {startId , endId} =props
    // let data = Data;
    data = data.filter((item) => item.id >= start)
    data = data.filter((item) => item.id <= end)
    console.log(data, start, end, loadMore)
    return (<div>

        <div className='MainTemplete-Container'>
            {data.map((n) => {

                return (
                    <Link to={`article/${n.id}`} className='linkTemplate MainTemlete-Link' key={n.id}>
                        <div className="col" >
                            <div className="card shadow-sm  MainTemlete">
                                <img
                                    className="bd-placeholder-img card-img-top MainTemleteImg"
                                    width="100%"
                                    height={225}
                                    role="img"
                                    aria-label="Placeholder: Thumbnail"
                                    preserveAspectRatio="xMidYMid slice"
                                    focusable="false"
                                    src={n.src}

                                />
                                <div className='MainTemlete-div'>
                                    <h3>{n.title}</h3>

                                    <div className="card-body">
                                        <p className="card-text">
                                            {
                                                `${n.description.slice(0, 150)}....`
                                            }
                                        </p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <h6>
                                                    {
                                                        // articalInfo(n.info, 0)
                                                    }
                                                </h6>
                                            </div>
                                            {/* <small className="text-muted">{articalInfo(n.info, 1)}</small> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                )
            })

            }
        </div>
        {
            flag ?
                <div className='load-more' onClick={load}>
                    <img src={require('./assest/arrow.png')} alt="err" />
                    <span>Load More</span>
                </div> 
            : null

    }
    </div>);
}

export default MainTemplete;