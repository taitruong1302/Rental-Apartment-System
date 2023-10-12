import React, { memo } from 'react'

const Button = ({ text, textColor, bgColor, ButtonIcon, onClick, fullWidth }) => {
    return (
        <button
            type='button'
            className={`py-2 px-4 ${textColor} ${bgColor} ${fullWidth && 'w-full'} outline-none rounded-md hover:underline flex items-center justify-center`}
            onClick={onClick}
        >
            <span>{ButtonIcon && <ButtonIcon />}</span>
            <span>{text}</span>
        </button>
    )
}

export default memo(Button)