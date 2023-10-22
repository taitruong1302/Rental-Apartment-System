import React, { useEffect, useState } from 'react'
import { Select, InputReadOnly } from '../components'
import { apiGetProvinces, apiGetDistrict } from '../services'

const AddressForm = () => {
    const [provinces, setProvinces] = useState([])
    const [province, setProvince] = useState()
    const [districts, setDistricts] = useState([])
    const [district, setDistrict] = useState()
    const [reset, setReset] = useState(false)

    useEffect(() => {
        const fetchProvinces = async () => {
            const response = await apiGetProvinces()
            if (response.status === 200) {
                setProvinces(response?.data?.results)
            }
        }
        fetchProvinces()
    }, [])
    console.log(districts);
    useEffect(() => {
        setDistrict(null)
        const fetchDistrict = async () => {
            const response = await apiGetDistrict(province)
            if (response.status === 200) {
                setDistricts(response.data?.results)
            }
        }
        province && fetchDistrict(province)
        !province ? setReset(true) : setReset(false)
        !province && setDistricts([])
    }, [province])
    return (
        <div>
            <h2 className='font-semibold text-xl py-4'>Address</h2>
            <div className='flex flex-col gap-4'>
                <div className='flex items-center gap-4'>
                    <Select type='province' value={province} setValue={setProvince} label='City' options={provinces} />
                    <Select reset={reset} type='district' value={district} setValue={setDistrict} label='District' options={districts} />
                </div>
                <InputReadOnly label={'Address'} value={`${district ? `${districts?.find(item => item.district_id === district)?.district_name},` : ''} ${province ? provinces?.find(item => item.province_id === province)?.province_name : ''} `} />
            </div>
        </div>
    )
}

export default AddressForm