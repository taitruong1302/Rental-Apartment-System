import React from 'react'
import List from './List'
import { Location } from '../../components'


const HomePage = () => {
    return (
        <div className='w-full flex flex-col gap-3'>
            <Location />
            <div className='w-full flex gap-4'>
                <div className='w-[70%]'>
                    <List />
                </div>
                <div className='w-[30%]'>
                    Side bar
                </div>
            </div>
        </div>
    )
}

export default HomePage