import React from 'react'

interface Props{
    title?: string;
    onClick?: () => void;
    leftIcon?: string;
    rightIcon?: string;
    type?: 'button' | 'submit' | 'reset' | undefined;
}

const Button = ({title ,onClick, leftIcon, rightIcon, type}:Props) => {
  return (
    <button className={`button gap-8 ${leftIcon ? 'flex-center-row ': 'flex-center-row-reverse'}`} onClick={onClick} type={type}> <img src={leftIcon ? leftIcon : rightIcon} alt="" /> {title}</button>
  )
}

export default Button