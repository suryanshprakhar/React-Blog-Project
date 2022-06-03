import React,{useState} from 'react'
import { Link } from 'react-router-dom'
export default function NavBar() {
  let [state , setState] = useState(false)
  const show =()=>{
    setState(!state)
  }
  return (
    <div>
      <div className='title-container'>
      <h1><span className='navHeading'>The</span>Siren</h1>
      <div>
          <span onClick={show} className='hamp'><hr className='hrHam'/> <hr className='hrHam'/> <hr className='hrHam'/></span>
        </div>
      </div>
      <nav>
        <div className='nav-container'>
        
          <ul className={state?'nav-ul mobile-showHide':'nav-ul'}>
             <li className="nav-List">
                <Link className='navLink' to="/">Home</Link>
              </li>
              <li className="nav-List">
                <Link className='navLink' to="/bollywood">Bollywood</Link>
              </li>
              <li className="nav-List">
                <Link className='navLink' to="/technology">Technology</Link>
              </li>
              <li className="nav-List">
                <Link className='navLink' to="/hollywood">Hollywood</Link>
              </li>
              <li className="nav-List">
                <Link className='navLink' to="/fitness">Fitness</Link>
              </li>
              <li className="nav-List">
                <Link className='navLink' to="/food">Food</Link>
              </li>
          </ul>
        </div>
        
      </nav>














      {/* <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-List">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-List">
                <Link className="nav-link" to="/bollywood">Bollywood</Link>
              </li>
              <li className="nav-List">
                <Link className="nav-link" to="/technology">Technology</Link>
              </li>
              <li className="nav-List">
                <Link className="nav-link" to="/hollywood">Hollywood</Link>
              </li>
              <li className="nav-List">
                <Link className="nav-link" to="/fitness">Fitness</Link>
              </li>
              <li className="nav-List">
                <Link className="nav-link" to="/food">Food</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
    </div>)
}
