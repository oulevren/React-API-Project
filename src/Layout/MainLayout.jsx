import React from 'react'
import SiteNav from '../Components/SiteNav'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <>
    <SiteNav></SiteNav>
    <Outlet></Outlet>
    
    </>
  )
}

export default MainLayout