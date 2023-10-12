import React, { useEffect } from 'react'
import { Button, Item } from '../../components'
import { getPosts } from '../../store/actions/postAction'
import { useDispatch, useSelector } from 'react-redux'

const List = () => {
    const dispatch = useDispatch()
    const { posts } = useSelector(state => state.post)
    useEffect(() => {
        dispatch(getPosts())
    }, [])
    return (
        <div className='w-full p-2 bg-white shadow-md rounded-md px-6'>
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
                {posts.length > 0 && posts.map(item => {
                    return (
                        <Item
                            key={item?.id}
                            address={item?.address}
                            attribute={item?.attribute}
                            description={JSON.parse(item?.description)}
                            images={JSON.parse(item?.images?.image)}
                            star={+item?.star}
                            title={item?.title}
                            user={item?.user}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default List