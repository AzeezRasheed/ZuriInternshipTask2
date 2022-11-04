import React from 'react'
import "../index.css";
import Slack from "../assets/slack.png";
import SocialIcon from "../assets/Social icon.png";
import ZuriInternship from "../assets/Zuri.Internship_Logo.png";
import Ingressive from "../assets/I4G.png";


function Home() {
  return (
    <div>
           <div className="flex flex-col mt-20 items-center h-auto justify-center mb-16">
            <img
              id="profile__img"
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLg7YYue_VyRsQLCwmguYP8nSLBwe24G8WgqJr8i_YxHwyHXbn9wqkZXAwdAvSGF9kVMk&usqp=CAU'
              alt=""
              className="rounded-full h-24 w-24 mb-5 "
            />
            <h2 className=" font-bold text-[24px]">Abdulazeez Abdulrasheed</h2>
          </div>

          <div className="flex flex-col items-center justify-center gap-6 mb-10">
            <a
              href="https://twitter.com/AzeezRa91509499"
              id="twitter"
              className=" bg-gray-200 w-[343px] md:w-[750px]  lg:w-[1152px]  py-[24px] px-[32px]
          "
            >
              <p className="text-center text-[18px]">Twitter Link</p>
            </a>

            <a
              href="https://training.zuri.team/"
              id="btn__zuri"
              className=" bg-gray-200 w-[343px] md:w-[750px]   lg:w-[1152px]  py-[24px] px-[32px]
          "
            >
              <p className="text-center text-[18px]">Zuri Team</p>
            </a>

            <a
              href="https://books.zuri.team/"
              id="books"
              className=" bg-gray-200 w-[343px] md:w-[750px]   lg:w-[1152px]  py-[24px] px-[32px]
          "
            >
              <p className="text-center text-[18px]">Zuri Books</p>
            </a>

            <a
              href="https://books.zuri.team/"
              id="book__python"
              className=" bg-gray-200 w-[343px] md:w-[750px]   lg:w-[1152px]  py-[24px] px-[32px]
          "
            >
              <p className="text-center text-[18px]">Python Books</p>
            </a>

            <a
              href="https://background.zuri.team/"
              id="pitch"
              className=" bg-gray-200 w-[343px] md:w-[750px]   lg:w-[1152px]  py-[24px] px-[32px]
          "
            >
              <p className="text-center text-[18px]">Background Checks For Coders</p>
            </a>

            <a
              href="https://books.zuri.team/design-rules"
              id="book__design"
              className=" bg-gray-200 w-[343px] md:w-[750px]   lg:w-[1152px]  py-[24px] px-[32px]
          "
            >
              <p className="text-center text-[18px]">Design Books</p>
            </a>


            <a
              href="/contact"
              id="contact"
              className=" bg-gray-200 w-[343px] md:w-[750px]   lg:w-[1152px]  py-[24px] px-[32px]
          "
            >
              <p className="text-center text-[18px]">Contact Me</p>
            </a>
          </div>



          <div className="flex items-center justify-center gap-5 mb-12">
            <img
              id="profile__img"
              src={Slack}
              alt=""
              className="h-[24px] w-[24px]"
            />
             <img
              id="profile__img"
              src={SocialIcon}
              alt=""
              className="h-[24px] w-[24px]"
            />
            </div>

            <footer className="m-auto  lg:py-[48px] lg:px-16  md:py-[48px] md:px-16   items-center  h-[196px] gap-[64px]">
        <div className="  max-w-[1440px] flex flex-col items-start px-[16px]  h-[132px] py-[32px]  lg:flex-row lg:justify-between lg:items-center md:flex-row md:justify-between md:items-center   gap-5  border-t-[1px] border-t-solid border-t-[#EAECF0]">
          <img id="profile__img" src={ZuriInternship} alt="" className="w-[185.03px]" />

          <h2 className="text-[14px] leading-[20px] font-normal text-[#667085] font-sans">
            HNG Internship 9 Frontend Task
          </h2>

          <img
            id="profile__img"
            src={Ingressive}
            alt=""
            className="w-[132.13px]"
          />
        </div>
      </footer>

            
    </div>
  )
}

export default Home