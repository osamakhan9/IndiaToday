import React from 'react'
import { Link } from 'react-router-dom'


import  './Navbar.css'
function Navbar() {
  
  return (
    <div className='container'>
      <div className='navbar'>
        <div className='nav'>
        <Link path='/'>IndiaToday</Link>
        <Link path='#'>Malayalam</Link>
        <Link path='#'>Business Today</Link>
        <Link path='#'>DailyO</Link>
        <Link path='#'>Aaj Tak</Link>
        <Link path='#'>Lallantop</Link>
        <Link path='#'>Bangla</Link>
        <Link path='#'>GNTTV</Link>
        <Link path='#'>IChowk</Link>
        <Link path='#'>Reader's Digest</Link>
        </div>
        </div>  
         <div className='nav_nav'> 
            <Link path='/'><h1>NEWS</h1></Link> 
            <Link></Link>
            <Link><img src="https://akm-img-a-in.tosshub.com/sites/all/themes/itg/logo.png?v=1.52" alt="" /></Link>
            <Link path='#'><h1>APP</h1></Link>
            <Link path='#'><h1>Magazine</h1></Link>
        </div>
        <div className='nav1'>
          <div>
           <Link path='/'>HOME</Link>
         
             <Link>INDIA</Link>
             <Link>WORLD</Link>
             <Link>BUSINESS</Link>
             <Link>TECH</Link>
             <Link>MOVIES</Link>
             <Link>SPORTS</Link>
             <Link>SCIENCE</Link>
             <Link>BEST UNIVERSITIES</Link>
           </div>
        </div>
  
    </div>
  )
}

export default Navbar