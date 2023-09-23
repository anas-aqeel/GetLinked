import React from 'react'

const Button = (props: any) => {
  return (
    <button
      className={`py-4 ${
        props.isSmall ? 'px-[42px]' : 'px-[52px]'
      }  rounded-[4px] ${
        props.fullWidth ? 'w-full' : ''
      } text-white text-lg bg-gradient-to-r from-[#903AFF] via-[#D434FE] to-[#FE34B9]`}
      {...props}
    >
      {props.children}
    </button>
  )
}

export default Button
