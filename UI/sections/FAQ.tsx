import Image from 'next/image'
import React from 'react'
import faqImg from '../../public/assets/images/FAQ.svg'

const Intro = () => {
  let faqs = [
    {
      question: 'Can I work on a project I started before the hackathon?',
      answer: 'lorem ipsum dolor sit amet dolor sit amet dolor sit amet',
    },
    {
      question: 'What happens if I need help during the hackathon?',
      answer: 'lorem ipsum dolor sit amet dolor sit amet dolor sit amet',
    },
    {
      question: 'What happens if I dont have an idea for a project?',
      answer: 'lorem ipsum dolor sit amet dolor sit amet dolor sit amet',
    },
    {
      question: 'Can I join a team or do I have to come with one?',
      answer: 'lorem ipsum dolor sit amet dolor sit amet dolor sit amet',
    },
    {
      question: 'What happens after the hackathon ends?',
      answer: 'lorem ipsum dolor sit amet dolor sit amet dolor sit amet',
    },
    {
      question: 'Can I work on a project I started before the hackathon?',
      answer: 'lorem ipsum dolor sit amet dolor sit amet dolor sit amet',
    },
  ]
  return (
    <div className="md:py-[62px] py-12 bg-[#140D27] border-y border-white border-opacity-[0.18]">
      <div className="max-w-[1213px] mx-auto flex flex-col md:flex-row  gap-x-12 gap-y-16 justify-between items-center px-10 md:px-5">
        <div className="w-full md:w-[45%]">
          <div className="font-clash md:text-left text-center text-xl md:text-3xl font-bold text-white">
            <h1 className="">Frequently Ask </h1>
            <h1 className="text-[#D434FE]">Question</h1>
          </div>
          <div className="mt-4 max-w-[500px] mx-auto">
            <p className="text-white mx-auto md:mx-0 text-center md:text-start text-sm leading-[27.5px] max-w-[339px]">
              We got answers to the questions that you might want to ask about
              <b> getlinked Hackathon 1.0</b>
            </p>
            <div className="mt-12 md:mt-[68px] flex flex-col gap-y-7">
              {faqs.map((item) => (
                <div className="flex gap-x-7 justify-between text-white pb-3 border-b border-[#D434FE]">
                  <p className="text-base">{item.question}</p>
                  <span
                    className="fill-[#D434FE] text-[#D434FE] font-unica text-5xl"
                    style={{ color: '#D434FE' }}
                  >
                    +
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Image src={faqImg} alt="" className="w-full md:w-[55%] h-auto" />
      </div>
    </div>
  )
}

export default Intro
