import React from 'react'
import { Button, Item } from '../../components'

const List = () => {
    return (
        <div className='w-full p-2 bg-white shadow-md rounded-md'>
            <div className='flex items-center justify-between'>
                <h4 className='text-xl font-semibold'>List Posts</h4>
                <span>Updated at:</span>
            </div>
            <div className='flex items-center gap-2 my-2'>
                <span>Sort:</span>
                <Button bgColor={'bg-gray-200'} text={'Default'} />
                <Button bgColor={'bg-gray-200'} text={'Newest'} />
            </div>
            <div className='items'>
                <Item />
            </div>
        </div>
    )
}

export default List