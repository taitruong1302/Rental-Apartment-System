import React, { useCallback } from 'react'
import logo from '../../assets/logo.png'
import { Button } from '../../components'
import { TiUserAddOutline } from 'react-icons/ti'
import { FiLogIn } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import { path } from '../../utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from "../../store/actions"

const Header = () => {
    const navigate = useNavigate()
    const { isLoggedIn } = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const goToLogin = useCallback((flag) => {
        navigate(path.LOGIN, { state: { isRegister: flag } })
    }, [])
    const goToHome = useCallback(() => {
        navigate(path.HOME)
    }, [])
    return (
        <div className='w-3/5'>
            <div className='w-full flex items-center justify-between'>
                <img src={logo} className='h-[70px] w-[240px] object-contain hover:cursor-pointer' alt='logo' onClick={goToHome} />
                <div className='flex items-center gap-1'>
                    {!isLoggedIn &&
                        <div className='flex items-center gap-1'>
                            <Button
                                text='Login'
                                textColor='text-white'
                                bgColor='bg-[#3961fb]'
                                ButtonIcon={FiLogIn}
                                onClick={() => goToLogin(false)}
                            />
                            <Button
                                text='Sign up'
                                textColor='text-white'
                                bgColor='bg-[#3961fb]'
                                ButtonIcon={TiUserAddOutline}
                                onClick={() => goToLogin(true)}
                            />
                        </div>
                    }
                    {isLoggedIn &&
                        <div className='flex items-center gap-1'>
                            <Button
                                text='Log out'
                                textColor='text-white'
                                bgColor='bg-[#3961fb]'
                                ButtonIcon={FiLogIn}
                                onClick={() => {
                                    dispatch(actions.logout())
                                    goToLogin(false)
                                }}
                            />
                        </div>
                    }
                    <Button
                        text='New Post'
                        textColor='text-white'
                        bgColor='bg-secondary2'
                    />
                </div>

            </div>
        </div>

    )
}

export default Header