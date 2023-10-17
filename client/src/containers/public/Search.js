import React, { useState } from 'react'
import { SearchItem, SearchModal } from '../../components'
import { BsChevronRight } from 'react-icons/bs'
import { HiOutlineLocationMarker, HiOutlineBackspace } from 'react-icons/hi'
import { FaMoneyBill } from 'react-icons/fa'
import { RiCrop2Line, RiSearchLine } from 'react-icons/ri'
import { BiBuildingHouse } from 'react-icons/bi'
import { UseSelector, useSelector } from 'react-redux'

const Search = () => {
    const [isShowModal, setIsShowModal] = useState(false)
    const { areas, prices, acreage, categories } = useSelector(state => state.app)
    const [content, setContent] = useState([])
    const [name, setName] = useState('')

    const handleShowModal = (content, name) => {
        setContent(content)
        setName(name)
        setIsShowModal(true)
    }
    return (
        <>
            <div className='w-3/5 p-[10px] my-3 bg-[#febb02] rounded-lg flex-col lg:flex-row flex items-center justify-around gap-2'>
                <span onClick={() => handleShowModal(categories, 'category')} className='cursor-pointer flex-1'>
                    <SearchItem firstIcon={<BiBuildingHouse />} lastIcon={<HiOutlineBackspace />} fontWeight text={'Bedsit'} />
                </span>
                <span onClick={() => handleShowModal(areas, 'area')} className='cursor-pointer flex-1'>
                    <SearchItem firstIcon={<HiOutlineLocationMarker />} lastIcon={<BsChevronRight color='rgb(156, 163, 175)' />} text={'All Areas'} />
                </span>
                <span onClick={() => handleShowModal(prices, 'price')} className='cursor-pointer flex-1'>
                    <SearchItem firstIcon={<FaMoneyBill />} lastIcon={<BsChevronRight color='rgb(156, 163, 175)' />} text={'Price'} />
                </span>
                <span onClick={() => handleShowModal(acreage, 'acreage')} className='cursor-pointer flex-1'>
                    <SearchItem firstIcon={<RiCrop2Line />} lastIcon={<BsChevronRight color='rgb(156, 163, 175)' />} text={'Acreage Range'} />
                </span>
                <button type='button' className='outline-none py-2 px-4 w-full bg-secondary1 text-sm text-[13.3px] flex flex-1 items-center justify-center gap-2 text-white font-medium'>
                    <RiSearchLine />
                    Search
                </button>
            </div>
            {isShowModal && <SearchModal content={content} name={name} setIsShowModal={setIsShowModal} />}

        </>

    )
}

export default Search