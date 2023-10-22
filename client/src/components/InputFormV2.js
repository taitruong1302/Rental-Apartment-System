import React from 'react'

const InputFormV2 = ({ label, unit }) => {
    return (
        <div>
            <label htmlFor='title'>{label}</label>
            <div className='flex items-center'>
                <input type="text" id='title' className={`${unit ? 'rounded-tl-md rounded-bl-md' : 'rounded-md'}  border outline-none border-gray-300 p-2 flex-auto`} />
                {unit && <span className='p-2 border flex-none w-16 flex items-center justify-center bg-gray-200 rounded-tr-md rounded-br-md'>{unit}</span>}
            </div>
        </div>
    )
}

export default InputFormV2