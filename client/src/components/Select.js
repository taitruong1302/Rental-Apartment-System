import React from 'react'

const Select = ({ label, options, value, setValue, type, reset }) => {
    return (
        <div className='flex flex-col gap-2 flex-1'>
            <label className='font-medium' htmlFor='select-address'>{label}</label>
            <select
                value={reset ? '' : value}
                id='select-address'
                className='outline-none border border-gray-300 px-1 w-full rounded-md'
                onChange={(e) => setValue(e.target.value)}
            >
                <option value="">{`--Select ${label}--`}</option>
                {options?.map(item => {
                    return (
                        <option
                            value={type === 'province' ? item?.province_id : type === 'district' ? item?.district_id : item?.code}
                            key={type === 'province' ? item?.province_id : type === 'district' ? item?.district_id : item?.code}
                        >
                            {type === 'province' ? item?.province_name : type === 'district' ? item?.district_name : item?.value}
                        </option>
                    )
                })}
            </select>

        </div>
    )
}

export default Select