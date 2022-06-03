import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { contextCreated } from './../../App';
function Leteast(props) {
    const data = useContext(contextCreated).slice(props.startId, props.endId)
    // console.log(data)
    return (<div className='lateast-container'>
        {
            data.map((n) => {
                return (
                    <Link to={`article/${n.id}`} className='linkTemplate' key={n.id}> <div className="col " >
                        <div className="card shadow-sm  ">
                            <h3>{n.title}</h3>

                            <div className="card-body">
                                <p className="card-text">
                                    {n.description.slice(0,300)}
                                </p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <h6>
                                            {
                                                n.info
                                            }
                                        </h6>
                                    </div>
                                    <small className="text-muted">{n.date}</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Link>
                )
            })
        }
    </div>);
}

export default Leteast;