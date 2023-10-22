import React from 'react'
import { AddressForm, DetailForm } from '../../components'
import { FiCamera } from 'react-icons/fi'

const CreatePost = () => {
    return (
        <div className='px-6'>
            <h1 className='text-3xl font-medium py-4 border-b border-gray-200'>New Post</h1>
            <div className='flex gap-4'>
                <div className='py-4 flex flex-col gap-8 flex-auto'>
                    <AddressForm />
                    <DetailForm />
                    <div className='w-full'>
                        <h2 className='font-semibold text-xl py-4'>Images</h2>
                        <div className='w-full'>
                            <label className='w-full border-2 h-[200px] my-4 border-dashed rounded-md flex items-center justify-center border-gray-400' htmlFor='file'>
                                <FiCamera size={50}/>Add image
                            </label>
                            <input hidden type="file" id='file' />
                        </div>
                    </div>
                </div>
                <div className='w-[30%] flex-none'>
                    map
                </div>
            </div>
        </div>
    )
}

export default CreatePost