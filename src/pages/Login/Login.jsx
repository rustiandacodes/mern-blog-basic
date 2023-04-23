import React from 'react'
import './login.scss'
import { loginBg } from '../../assets'
import Input from '../../components/atoms/input/Input'
import Button from '../../components/atoms/button/Button'
import Gap from '../../components/atoms/gap/Gap'

const login = () => {
  return (
    <div className="main-page">
      <div className="left">
        <img src={loginBg} className="bg-image" alt="loginBg" />
      </div>
      <div className="right">
        <p className="title">Login</p>

        <Input label={'Email'} placholder={'Email'} type="email" />
        <Gap height={10} />
        <Input label={'Password'} placholder={'Password'} type="password" />
        <Gap height={20} />
        <Button title={'login'} />
      </div>
    </div>
  )
}

export default login
