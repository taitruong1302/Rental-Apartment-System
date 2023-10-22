import React from 'react'
import { Select, InputReadOnly, InputFormV2 } from './'
import { useSelector } from 'react-redux'


const targets = [
    { code: 'male', value: 'male' },
    { code: 'female', value: 'female' }
]

const DetailForm = () => {
    const { categories } = useSelector(state => state.app)
    const { currentUser } = useSelector(state => state.user)
    return (
        <div>
            <h2 className='font-semibold text-xl py-4'>Details</h2>
            <div className='w-full flex flex-col gap-4'>
                <div className='w-1/2'>
                    <Select label="Type of post" options={categories} />
                </div>
                <InputFormV2 label={'Subject'} />
                <div className='flex flex-col gap-2'>
                    <label htmlFor='description'>Description</label>
                    <textarea id='description' cols={30} rows={10} className='w-full rounded-md border outline-none border-gray-300 p-2' />
                </div>
                <div className='w-1/2 '>
                    <InputReadOnly label={'Contact Information'} value={currentUser?.name} />
                    <InputReadOnly label={'Phone Number'} value={currentUser?.phone} />
                    <InputFormV2 label='Price' unit={'VND'} />
                    <InputFormV2 label='Acreage' unit={'m2'} />
                    <Select options={targets} label={"For"} />
                </div>

            </div>
        </div>
    )
}

export default DetailForm