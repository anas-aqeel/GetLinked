'use client'
import React, { useRef, useState } from 'react'
import Button from './Button'
import Image from 'next/image'
import registerEmoji from '../../public/assets/images/register-emoji.svg'
import Checkbox from './Checkbox'
import Dropdown from './Dropdown'

const RegisterationForm = ({ setOpenModal }: any) => {
  let formRef = useRef<any>(null)
  let [error, setError] = useState('')

  let handleSumbit = async () => {
    const form = formRef.current

    const formData = {
      email: form.elements.email.value,
      phone_number: form.elements.phone_number.value,
      team_name: form.elements.team_name.value,
      group_size: form.elements.group_size.value,
      project_topic: form.elements.project_topic.value,
      category: form.elements.category.value,
      privacy_policy_accepted: form.elements.privacy_policy_accepted.checked,
    }
    let response = await fetch('/api/hackathon/registeration', {
      method: 'POST',
      body: JSON.stringify(formData),
    })
    let responseData = await response.json()
    let data = JSON.parse(responseData)

    if (data['error']) {
      setError(data['error'])
    } else {
      setError('')
      setOpenModal(true)
    }
  }
  return (
    <div className="md:bg-white md:bg-opacity-[0.03] rounded-xl md:py-16 md:px-20">
      <div className="text-white mt-12 text-sm md:text-base flex items-baseline space-x-3">
        <p>Be part of this movement! </p> <Image placeholder="blur"  src={registerEmoji} alt="" />
      </div>
      <div className="mt-5 text-2xl text-white">CREATE YOUR ACCOUNT</div>
      <form action="" ref={formRef} className="mt-8 flex flex-col gap-6">
        <div className="flex md:flex-row flex-col space-y-5  md:space-y-0 md:space-x-8 ">
          <div className="w-full md:w-1/2 flex flex-col gap-y-3">
            <h3 className="text-white">Team's Name</h3>
            <div className="border-white border rounded text-lg py-3 px-5">
              <input
                name="team_name"
                placeholder="Enter the name of your group"
                className="bg-transparent text-sm w-full border-none outline-none text-white"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-y-3">
            <h3 className="text-white">Phone</h3>
            <div className="border-white border rounded text-lg py-3 px-5">
              <input
                name="phone_number"
                placeholder="Enter your phone number"
                className="bg-transparent text-sm w-full border-none outline-none text-white"
              />
            </div>
          </div>
        </div>
        <div className="flex md:flex-row flex-col space-y-5  md:space-y-0 md:space-x-8 ">
          <div className="w-full md:w-1/2 flex flex-col gap-y-3">
            <h3 className="text-white">Email</h3>
            <div className="border-white border rounded text-lg py-3 px-5">
              <input
                name="email"
                placeholder="Enter your email address"
                className="bg-transparent text-sm w-full border-none outline-none text-white"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-y-3">
            <h3 className="text-white">Project Topic</h3>
            <div className="border-white border rounded text-lg py-3 px-5">
              <input
                name="project_topic"
                placeholder="What is your group project topic"
                className="bg-transparent text-sm w-full border-none outline-none text-white"
              />
            </div>
          </div>
        </div>
        <div className="flex space-x-8 ">
          <div className="w-[60%] md:w-1/2 flex flex-col gap-y-3">
            <h3 className="text-white">Category</h3>

            <Dropdown
              value={''}
              name={'category'}
              onChange={() => {}}
              options={['Software/Development', 'Blog', 'Startup', 'Other']}
            />
          </div>
          <div className="w-[40%] md:w-1/2 flex flex-col gap-y-3">
            <h3 className="text-white">Group Size</h3>
            <Dropdown
              value={''}
              name={'group_size'}
              onChange={() => {}}
              options={['100+', '50-100', '10-50', '2-10']}
            />
          </div>
        </div>
        <div className="text-[#FF26B9] text-sm italic">{error}</div>
        <div className="flex items-center text-white text-sm space-x-3">
          <Checkbox />
          <p className="">
            I agreed with the event terms and conditions and privacy policy
          </p>
        </div>
        <Button
          type="button"
          fullWidth
          onClick={() => {
            handleSumbit()
          }}
        >
          Register Now
        </Button>
      </form>
    </div>
  )
}

export default RegisterationForm
