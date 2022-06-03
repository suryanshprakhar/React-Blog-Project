import React ,{useContext} from 'react';
import { Link } from 'react-router-dom';
import './TopPost.css'
import { contextCreated } from './../App';
function TopPost(props) {
    let className =''
        if(props){
            className = "TopPost-Container "+props.classname

        }else{
            className = "TopPost-Container"
        }
    
    const tag = 'Travel'
    let data = useContext(contextCreated)
    data = data.filter((item)=>item.tags==tag).slice(0,3)
    // console.log(data)
    return (<>
    
    <div className={className}>
        <h2>Top Post</h2>
    {data.map((n)=>{

     return (
        <Link to={`article/${n.id}`} className='linkTemplate'  key={n.id}>
            <div className="col " >
                <div className="card shadow-sm TopPost-SubContainer">
                    <img
                        className="bd-placeholder-img card-img-top "
                        width="100%"
                        height={225}
                        role="img"
                        aria-label="Placeholder: Thumbnail"
                        preserveAspectRatio="xMidYMid slice"
                        focusable="false"
                        src={n.src}

                    />
                    <div className='TopPost-Text'>
                        <h6>{n.title}</h6>

                        {/* <div className="card-body">
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
                            {/* </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </Link>
        )})
        
    }
    </div></>);
}

export default TopPost;