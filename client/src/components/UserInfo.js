import React from 'react'
import { UseSelector, useSelector } from 'react-redux'
import avatar from '../assets/avatar.png'

const UserInfo = () => {
    const { currentUser } = useSelector(state => state.user)

    return (
        <div className='flex items-center'>
            <img src={currentUser?.avatar || avatar} alt="avatar" className='w-10 h-10 object-cover rounded-full gap-2 shadow-md' />
            <div>
                <span>Welcome <span className='font-semibold'>{currentUser?.name}</span></span>
            </div>
        </div>
    )
}

export default UserInfo