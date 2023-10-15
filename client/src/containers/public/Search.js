import React from 'react'
import { SearchItem } from '../../components'
import { BsChevronRight } from 'react-icons/bs'
import { HiOutlineLocationMarker, HiOutlineBackspace } from 'react-icons/hi'
import { FaMoneyBill } from 'react-icons/fa'
import { RiCrop2Line, RiSearchLine } from 'react-icons/ri'
import { BiBuildingHouse } from 'react-icons/bi'

const Search = () => {
    return (
        <div className='w-3/5 p-[10px] my-3 bg-[#febb02] rounded-lg flex-col lg:flex-row flex items-center justify-around gap-2'>
            <SearchItem firstIcon={<BiBuildingHouse />} lastIcon={<HiOutlineBackspace />} fontWeight text={'Bedsit'} />
            <SearchItem firstIcon={<HiOutlineLocationMarker />} lastIcon={<BsChevronRight color='rgb(156, 163, 175)' />} text={'All Areas'} />
            <SearchItem firstIcon={<FaMoneyBill />} lastIcon={<BsChevronRight color='rgb(156, 163, 175)' />} text={'Price'} />
            <SearchItem firstIcon={<RiCrop2Line />} lastIcon={<BsChevronRight color='rgb(156, 163, 175)' />} text={'Area Range'} />
            <button type='button' className='outline-none py-2 px-4 w-full bg-secondary1 text-sm text-[13.3px] flex items-center justify-center gap-2 text-white font-medium'>
                <RiSearchLine />
                Search
            </button>
        </div>
    )
}

export default Search