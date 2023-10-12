import React, { memo } from 'react'

const LocationBtn = ({ name, image }) => {
    return (
        <div className='shadow-md rounded-bl-md rounded-br-md text-blue-600 hover:text-orange-600 cursor-pointer'>
            <img src={image} alt={name} className='w-full h-[110px] object-cover rounded-tl-md rounded-tr-md' />
            <div className='font-medium p-2 text-center'>{name}</div>
        </div>
    )
}

export default memo(LocationBtn)