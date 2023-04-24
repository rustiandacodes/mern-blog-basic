import React from 'react'
import './register.scss'
import { registerBg } from '../../assets'
import Input from '../../components/atoms/input/Input'
import Button from '../../components/atoms/button/Button'
import Gap from '../../components/atoms/gap/Gap'
import Link from '../../components/atoms/link/Link'

const Register = () => {
  return (
    <div className="main-page">
      <div className="left">
        <img src={registerBg} className="bg-image" alt="registerBg" />
      </div>
      <div className="right">
        <p className="title">Register</p>
        <Input label={'Full Name'} placholder={'Full Name'} />
        <Gap height={10} />
        <Input label={'Email'} placholder={'Email'} type="email" />
        <Gap height={10} />
        <Input label={'Password'} placholder={'Password'} type="password" />
        <Gap height={20} />
        <Button title={'register'} />
        <Gap height={60} />
        <Link content={'Do you have an account? Login'} />
      </div>
    </div>
  )
}

export default Register
