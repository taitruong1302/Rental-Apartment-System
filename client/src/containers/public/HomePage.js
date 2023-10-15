import React, { useEffect } from 'react'
import { List, Pagination } from './index'
import { Location, ItemSideBar, RelatedPost } from '../../components'
import { useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux/'
import * as actions from '../../store/actions'


const HomePage = () => {
    let [searchParams, setSearchParams] = useSearchParams();
    const { categories, prices, acreage } = useSelector(state => state.app)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(actions.getPrices())
        dispatch(actions.getAcreage())
    }, [searchParams])

    return (
        <div className='w-full flex flex-col gap-3'>
            <Location />
            <div className='w-full flex gap-4'>
                <div className='w-[70%]'>
                    <List />
                    <Pagination page={searchParams.get('page')} />
                </div>
                <div className='w-[30%] flex flex-col gap-4 justify-start items-center'>
                    <ItemSideBar content={categories} title={'List Rental Apartmenrt'} />
                    <ItemSideBar isDouble={true} type='priceCode' content={prices} title={'View by Price'} />
                    <ItemSideBar isDouble={true} type='acreageCode' content={acreage} title={'View by Acreage'} />
                    <RelatedPost />
                </div>
            </div>
        </div>
    )
}

export default HomePage