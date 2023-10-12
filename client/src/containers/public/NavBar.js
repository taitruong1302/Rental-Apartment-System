import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { apiGetCategories } from '../../services/categoryService'
import { formatLink } from '../../utils/common/formatLink'

const NavBar = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const fetchCategory = async () => {
            const response = await apiGetCategories()
            if (response?.data.err === 0) {
                setCategories(response.data.response)
            }
        }
        fetchCategory()
    }, [])



    return (
        <div className='bg-secondary1 text-white flex justify-center items-center h-[40px]'>
            <div className='w-3/5 flex h-full items-center text-sm font-medium'>
                <NavLink to={'/'} className={
                    ({ isActive }) => isActive ? 'hover:bg-secondary2 py-2 px-4 flex items-center bg-secondary2' : 'hover:bg-secondary2 flex items-center py-2 px-4'}>
                    Home
                </NavLink>
                {categories?.length > 0 && categories.map((item) => {
                    return (
                        <div key={item.code} className='h-full flex justify-center items-center'>
                            <NavLink to={`${formatLink(item.value)}`} className={
                                ({ isActive }) => isActive ? 'hover:bg-secondary2 py-2 px-4 flex items-center bg-secondary2' : 'hover:bg-secondary2 flex items-center py-2 px-4'}>
                                {item.value}
                            </NavLink>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default NavBar