"use client"
import React from 'react'

const Dropdown = ({ onChange, options, value,name }: any) => {
  return (
    <div className="relative w-full">
      <select name={name} onChange={onChange} value={value} className="py-4 px-5 text-white h-full w-full rounded border border-blue-gray-200  bg-transparent  font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-red-500 focus:border-2 focus:border-pink-500  focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50">
        {options.map((option: any) => (
          <option value={option}>{option}</option>
        ))}
      </select>
    </div>
  )
}

export default Dropdown
