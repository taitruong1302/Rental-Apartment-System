import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import { NavBar, Search } from './index'
import { Footer, Contact } from '../../components'

const Home = () => {
    return (
        <div className='w-full flex flex-col gap-4 items-center h-full border'>
            <Header />
            <NavBar />
            <Search />
            <div className='w-4/5 lg:w-3/5 flex flex-col items-start justify-start mt-3'>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Home