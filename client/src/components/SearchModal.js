import React from 'react'
import { GrPrevious } from 'react-icons/gr'

const SearchModal = ({ setIsShowModal, content, name }) => {
    return (
        <div onClick={(e) => { setIsShowModal(false) }}
            className='fixed top-0 left-0 right-0 bottom-0 z-20 bg-overlay-30 flex justify-center items-center'
        >
            <div onClick={(e) => {
                e.stopPropagation()
                setIsShowModal(true)
            }}
                className='w-1/3 bg-white rounded-md'
            >
                <div className='h-[45px] px-4 flex items-center border-b border-gray-200'>
                    <div className='hover:text-red-600 cursor-pointer' onClick={(e) => {
                        e.stopPropagation()
                        setIsShowModal(false)
                    }}>
                        <GrPrevious size={20} />
                    </div>
                </div>
                <div className='p-4 flex flex-col'>{content?.map(item => {
                    return (
                        <span className='py-2 flex gap-2 items-center border-b border-gray-200'>
                            <input type="radio" name={name} id={item.code} value={item.code} />
                            <label htmlFor={item.code}>{item.value}</label>
                        </span>
                    )
                })}</div>
            </div>
        </div>
    )
}

export default SearchModal