import React, { memo, useState } from 'react'
import { GrStar } from 'react-icons/gr'
import { RiHeartFill, RiHeartLine } from 'react-icons/ri'
import photo from '../assets/photo_2023-10-07_21-14-04.jpg'
const Item = () => {
    const [isHoverHeart, setIsHoverHeart] = useState(false)
    return (
        <div className='w-full flex border-t border-orange-600 p-4'>
            <div className='w-2/5 flex flex-wrap gap-[2px] items-center relative'>
                <img src={photo} alt="" className='w-[47%] h-[47%] object-cover' />
                <img src={photo} alt="" className='w-[47%] h-[47%] object-cover' />
                <img src={photo} alt="" className='w-[47%] h-[47%] object-cover' />
                <img src={photo} alt="" className='w-[47%] h-[47%] object-cover' />

                <span className='bg-gray-700 text-white px-2 rounded-md absolute left-1 bottom-2'>4 ảnh</span>
                <span
                    className='text-white absolute right-5 bottom-1'
                    onMouseOver={() => setIsHoverHeart(true)}
                    onMouseOut={() => setIsHoverHeart(false)}
                >
                    {isHoverHeart ? <RiHeartFill size={26} color='red' /> : <RiHeartLine size={26} />}

                </span>
            </div>
            <div className='w-3/5'>
                <div className='flex justify-content gap-4'>
                    <div className=''>
                        <span className='flex py-[2px]'>
                            <GrStar className='star-item' color='yellow' size={18} />
                            <GrStar className='star-item' color='yellow' size={18} />
                            <GrStar className='star-item' color='yellow' size={18} />
                            <GrStar className='star-item' color='yellow' size={18} />
                            <GrStar className='star-item' color='yellow' size={18} />

                        </span>
                    </div>
                </div>
                <div className='my-2 flex items-center justify-between'>
                    <span className='font-bold text-green-600'>
                        3.7tr
                    </span>
                    <span>28m</span>
                    <span>D7</span>
                </div>
                <p className='text-gray-600'>Content</p>
                <div className='flex items-center my-3 justify-between'>
                    <div className='flex items-center '>
                        <img src="" alt="avatar" className='w-[30px] h[30px] object-cover rounded-full' />
                        <p>Name</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <button type='button' className='bg-blue-700 text-white p-1 rounded-md'>
                            Gọi 123123123
                        </button>
                        <button type='button' className='text-blue-700 px-1 rounded-md border border-blue-700'>
                            Nhắn Zalo
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(Item)