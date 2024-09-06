import React from 'react';
import { Outlet } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation'

function HomePage() {
  return (
    <>
      <MainNavigation />
      <Outlet />
    </>
  )
}

export default HomePage
