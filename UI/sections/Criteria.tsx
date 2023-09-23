import Image from 'next/image'
import React from 'react'
import criteriaImg from '../../public/assets/images/criteria.svg'
import Button from '../components/Button'
const Criteria = () => {
  return (
    <div className="pt-5 md:pt-[92px] pb-14 md:pb-[171px] bg-[#140D27] border-y border-white border-opacity-[0.18]">
      <div className="max-w-[1382px] mx-auto grid md:grid-cols-2 gap-x-[53px] place-items-center px-8 md:px-5">
        <Image src={criteriaImg} alt="" className="w-full h-auto" />
        <div className="max-w-[564px]">
          <div className="font-clash md:text-left text-center text-xl md:text-3xl font-bold text-white">
            <h1 className="">Judging Criteria</h1>
            <h1 className="text-[#D434FE]">Key attributes</h1>
          </div>
          <div className="mt-4 max-w-[535px] flex flex-col w-full gap-y-6 md:text-left text-center">
            <p className="text-white text-sm leading-[27.5px]">
              <span className="text-[#FF26B9] font-bold text-lg">
                Innovation and Creativity:{" "}
              </span>
              Our tech hackathon is a melting pot of visionaries, and its
              Evaluate the uniqueness and creativity of the solution. Consider
              whether it addresses a real-world problem in a novel way or
              introduces innovative features.
            </p>
            <p className="text-white text-sm leading-[27.5px]">
              <span className="text-[#FF26B9] font-bold text-lg">
                Functionality:{" "}
              </span>
              Assess how well the solution works. Does it perform its intended
              functions effectively and without major issues? Judges would
              consider the completeness and robustness of the solution.
            </p>
            <p className="text-white text-sm leading-[27.5px]">
              <span className="text-[#FF26B9] font-bold text-lg">
                Impact and Relevance:{" "}
              </span>
              Determine the potential impact of the solution in the real world.
              Does it address a significant problem, and is it relevant to the
              target audience? Judges would assess the potential social,
              economic, or environmental benefits.
            </p>
            <p className="text-white text-sm leading-[27.5px]">
              <span className="text-[#FF26B9] font-bold text-lg">
                Technical Complexity:{" "}
              </span>
              Evaluate the technical sophistication of the solution. Judges
              would consider the complexity of the code, the use of advanced
              technologies or algorithms, and the scalability of the solution.
            </p>
            <p className="text-white text-sm leading-[27.5px]">
              <span className="text-[#FF26B9] font-bold text-lg">
                Adherence to Hackathon Rules:{" "}
              </span>
              Judges will Ensure that the team adhered to the rules and
              guidelines of the hackathon, including deadlines, use of specific
              technologies or APIs, and any other competition-specific
              requirements.
            </p>
          </div>
          <div className='mt-[55px] flex w-full justify-center md:justify-start'>
            <Button isSmall={true}>
              Read More
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Criteria
