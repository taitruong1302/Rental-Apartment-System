import React from 'react'

const SmallItem = ({ title, price, image, createdAt }) => {
    return (
        <div className='w-full flex items-center gap-1 py-2 border-b border-gray-300'>
            <img src="" alt="logo" className='w-[65px] h-[65px] object-cover rounded-md' />
            <div className='w-full flex flex-col justify-between gap-2'>
                <h4 className='text-blue-600 text-[15px]'>{`${title?.slice(0, 45)}...`}</h4>
                <div className='flex items-center justify-between w-full'>
                    <span className='font-medium text-green-700'>{price}</span>
                    <span className='text-gray-300'>{createdAt}</span>
                </div>
            </div>
        </div>
    )
}

export default SmallItem