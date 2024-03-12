import React, { useState } from 'react'
import { InputReadOnly, InputFormV2, Button } from '../../components'
import avatar from "../../assets/avatar.png"
import { useSelector } from 'react-redux'
import { apiUploadImages, apiUpdateUserInfor } from '../../services'

const EditAccount = () => {
    const { currentUser } = useSelector(state => state.user)
    const [payload, setPayload] = useState({
        name: currentUser?.name || '',
        avatar: currentUser?.avatar || '',
        fbUrl: currentUser?.fbUrl || '',
        zalo: currentUser?.zalo || ''
    })

    const handleUploadFile = async (e) => {
        const image = e.target.files[0]
        const formData = new FormData()
        formData.append('file', image)
        formData.append('upload_preset', process.env.REACT_APP_UPLOAD_ASSET_NAME)
        const response = await apiUploadImages(formData)
        if (response.status === 200) {
            setPayload(prev => ({
                ...prev,
                avatar: response.data.secure_url
            }))
        }
    }

    const handleSubmit = async () => {
        const response = await apiUpdateUserInfor(payload)
    }

    return (
        <div className='flex flex-col items-center'>
            <h1 className='text-3xl w-full text-start font-medium py-4 border-b border-gray-200'>Edit Profile</h1>
            <div className='w-3/5 py-6 flex flex-col gap-4'>
                <InputReadOnly value={currentUser?.id?.match(/\d/g).join('') || ''} label={"Id"} />
                <InputReadOnly value={currentUser?.phone} label={"Phone Number"} />
                <InputFormV2 name={"name"} setValue={setPayload} value={payload.name} label={"Full name"} />
                <InputFormV2 name={"zalo"} setValue={setPayload} value={payload.zalo} label={"Zalo"} />
                <InputFormV2 name={"fbUrl"} setValue={setPayload} value={payload.fbUrl} label={"Facebook"} />
                <div className='flex '>
                    <label htmlFor='password' className='w-48 flex-none'>Password</label>
                    <small className='flex-auto text-blue-500 cursor-pointer'>Change password</small>
                </div>
                <div className='flex mb-6'>
                    <label htmlFor='avatar' className='w-48 flex-none'>Avatar</label>
                    <div>
                        <img src={payload.avatar || avatar} alt="avatar" className='w-28 h-28 rounded-full object-cover' />
                        <input onChange={handleUploadFile} type="file" className='appearance-none my-4' id='avatar' />
                    </div>
                </div>
                <Button onClick={handleSubmit} text={"Update Profile"} bgColor={"bg-blue-500"} textColor={"text-white"} />
            </div>
        </div>
    )
}

export default EditAccount