import React from 'react'
import { Outlet } from 'react-router-dom'
import SiteNav from '../Components/SiteNav'

const PermissionRequired = () => {
  return (
    <>
    <SiteNav></SiteNav>
    
    <Outlet></Outlet>
    
    
    </>
  )
}

export default PermissionRequired