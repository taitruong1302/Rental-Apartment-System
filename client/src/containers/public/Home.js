import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import { NavBar, Search } from './index'
import { Footer } from '../../components'
import { useSelector } from 'react-redux/'

const Home = () => {
    const { isLoggedIn } = useSelector(state => state.auth)

    return (
        <div className='w-full min-h-screen flex flex-col gap-4 items-center h-full border'>
            <Header />
            <NavBar />
            {isLoggedIn && <Search />}
            <div className='w-4/5 lg:w-3/5 flex flex-col gap-2 items-start justify-start mt-3'>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Home