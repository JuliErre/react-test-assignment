import React from 'react'
import LoginForm from '../components/login/LoginForm'
import {  User } from '../types/types';

interface Props {
  onUser: (user: User | null) => void;
  user: User | null;
}

const LoginScreen = ({ onUser,user }: Props) => {

  return (
    <>
      <div className="container flex-center gap-32 padding-login">
        <div className='flex-center gap-4'>
        <h5 className='title'>Welcome, Stranger!</h5>
        <p className='description'>Please log in to this form if you wish to pass the exam</p>
        </div>
        <LoginForm onUser={onUser} user={user} />
      </div>
    </>
  )
}

export default LoginScreen