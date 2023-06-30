import React from 'react'
import "./sideBar.css"
import { Link, Outlet } from 'react-router-dom'

function SideBar() {
  return (
    <div className='container-fluid'>
        <div className='row'>
        <div className='col-2 sidebar'>
        <ul type="none" style={{textAlign: "left"}}>
                 
                 <li className='h2'></li>
                 
                 <Link to={"/"}>
                 <li className='h4'>Product List</li>
                 </Link>  
                <Link to={"product-detail"}>
                <li className='h4'>Product Detail</li>
                </Link>
                
                    
                </ul>
</div>
<div className='col-9'>
 <div className='d-flex justify-content-center py-2'>
    <div className='header'> 

    </div>
   
 </div>
 <div className='d-flex justify-content-center py-2'>
 <Outlet/>
 </div>
 
</div>
        </div>
        
    </div>
  )
}

export default SideBar