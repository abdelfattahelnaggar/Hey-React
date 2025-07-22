import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

export default function Layout() {
  return (
    <>
     <div className="d-flex justify-content-between flex-column min-vh-100">
      <Navbar />
      <main className='mt-5'>
        <Outlet />
      </main>
      <Footer />
    </div>
    </>
  )
}
