import React, { useEffect } from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import { NavBar, Search } from './index'
import { Footer } from '../../components'
import * as actions from '../../store/actions'
import { useDispatch } from 'react-redux/'

const Home = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(actions.getPrices())
        dispatch(actions.getAcreage())
        dispatch(actions.getAreas())
    }, [])
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