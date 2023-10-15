import React from 'react'
import { SmallItem } from './index'

const RelatedPost = () => {
    return (
        <div className='w-full bg-white rounded-md p-4'>
            <h3 className='font-semibold text-lg mb-4'>New Posts</h3>
            <div className='flex flex-col w-full gap-2'>
                <SmallItem />
            </div>
        </div>
    )
}

export default RelatedPost