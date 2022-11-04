import React from "react";
import emailjs from "emailjs-com";
import { useRef } from "react";
import { useState } from "react";
import Zuri from "../assets/Zuri.Internship_Logo.png";
import Ingressive from "../assets/I4G.png";
import toast, { Toaster } from "react-hot-toast";
function Contact() {
  const form = useRef();
  const [check, setCheck] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    toast.success('Successfully sent!')
    emailjs
      .sendForm(
        "service_v4nzsou",
        "template_b12qxem",
        form.current,
        "ZnNXP6T6IbRh0cxb8"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <div id="contact">
      
      <header className=" py-[64px] px-0 gap-[48px] h-[884px] bg-white lg:pt-[64px] lg:pr-0 lg:pl-0 lg:pb-[96px] lg:gap-[64px] lg:justify-center items-center md:pt-[64px] md:pr-0 md:pl-0 md:pb-[96px] md:gap-[64px] md:justify-center md:items-center flex flex-col  ">
        <div className="flex flex-row  lg:h-[800px] lg:py-0 lg:px-[32px] lg:justify-center md:h-[800px] md:py-0 md:px-[32px] md:justify-center">
          <div className="flex flex-col items-start p-0 gap-[48px] lg:w-[720px] lg:h-[616px] md:w-[720px] md:h-[616px] ">
            <div className="flex flex-col w-[375px] h-[116px] px-[16px] items-start py-0 gap-[32px] lg:gap-[20px]  lg:px-[16px] lg:w-[720px] lg:h-[94px] md:gap-[20px]  md:px-[16px] md:w-[720px] md:h-[94px] ">
              <h1 className="capitalize text-[36px] font-semibold leading-[30px] text-[#101828] font-sans text-left ">
                Contact me
              </h1>
              <p className="lg:text-[20px] text-[18px] font-normal font-sans leading-[30px] text-[#475467] h-[18px]">
                Hi there, contact me to ask me about anything you have in mind.
              </p>
            </div>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col items-start p-0 px-[16px] gap-[48px] w-[375px] h-[592px] lg:gap-[20px] lg:h-[94px] md:gap-[20px] md:h-[94px] "
            >
              <div className="flex flex-col items-start p-0 gap-[32px] w-[343px] h-[592px] lg:w-[720px] lg:h-[394px] lg:gap-[48px] md:w-[720px] md:h-[394px] md:gap-[48px] ">
                <div className="flex flex-col items-start p-0 gap-[24px] lg:w-[720px] lg:h-[70px] lg:flex-row md:flex-row md:w-[720px] md:h-[70px]">
                  <div className="flex flex-col items-start p-0 gap-[6px] w-[348px] h-[70px]">
                    <label
                      htmlFor="firstName"
                      className="capitalize text-[#344054] leading-[20px] font-medium text-[14px] font-sans"
                    >
                      first name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      placeholder="Enter your first name"
                      className="flex flex-row w-[343px] h-[44px]  py-[10px] px-[14px] lg:gap-[8px] lg:items-center lg:w-[348px] md:gap-[8px] md:items-center md:w-[348px] bg-white border border-solid border-[#D0D5DD] shadow rounded-lg"
                    />
                  </div>

                  <div className="flex flex-col items-start p-0 gap-[6px] lg:w-[348px] lg:h-[70px]  md:w-[348px] md:h-[70px]">
                    <label
                      htmlFor="lastName"
                      className="capitalize text-[#344054] leading-[20px] font-medium text-[14px] font-sans"
                    >
                      last name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      placeholder="Enter your last name"
                      className="flex flex-row items-center w-[343px] h-[44px] py-[10px] px-[14px] lg:gap-[8px] lg:w-[348px] lg:h-[44px] md:gap-[8px] md:w-[348px] md:h-[44px] bg-white border border-solid border-[#D0D5DD] shadow rounded-lg"
                    />
                  </div>
                </div>

                <div className="flex flex-col items-start p-0 gap-[6px] lg:w-[720px] lg:h-[70px]  md:w-[720px] md:h-[70px]">
                  <label
                    htmlFor="email"
                    className="lg:w-[36px] lg:h-[20px] font-sans font-medium text-[14px] leading-[20px] text-[#344054] capitalize"
                  >
                    email
                  </label>
                  <input
                    type="text"
                    placeholder="yourname@email.com"
                    required
                    name="email"
                    className="flex flex-row items-center w-[343px] h-[44px] py-[10px] px-[14px] lg:gap-[8px] lg:w-[720px] lg:h-[44px]  md:gap-[8px] md:w-[720px] md:h-[44px] bg-white border border-solid border-[#D0D5DD] shadow rounded-lg"
                  />
                </div>

                <div className="flex flex-col w-[343px] h-[158px] p-0 gap-[6px] lg:w-[720px] lg:h-[158px]  md:w-[720px] md:h-[158px]">
                  <label
                    htmlFor="message"
                    className="font-sans font-medium text-[14px] leading-[20px] lg:w-[36px] lg:h-[20px] md:w-[36px] md:h-[20px] text-[#344054] capitalize"
                  >
                    message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    required
                    className="w-[343px] h-[132px] lg:py-[12px] lg:px-[14px] gap-[8px] lg:w-[720px] lg:h-[132px]  md:py-[12px] md:px-[14px] md:w-[720px] md:h-[132px] bg-white  border-solid border-[#D0D5DD] shadow rounded-lg"
                  ></textarea>
                </div>

                <div className="flex flex-row items-start w-[343px] h-[48px] p-0 gap-[12px] lg:w-[720px] lg:h-[24px] md:w-[720px] md:h-[24px]">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value={check}
                    onClick={() => {
                      setCheck(!check), console.log(check);
                    }}
                    class=" text-blue-600 bg-gray-100 pt-[2px] w-[20px] h-[22px] border-gray-300 dark:border-gray-600 rounded-lg"
                  />
                  <h2 className="flex flex-col p-0 lg:gap-[2px] lg:w-[688px] lg:h-[24px] md:gap-[2px] md:w-[688px] md:h-[24px] text-[16px] leading-[24px] font-normal text-[#475467] font-sans ">
                    You agree to providing your data to Abdulrasheed who may
                    contact you.
                  </h2>
                </div>

                <button
                  disabled={check === false}
                  className=" disabled:opacity-25 flex flex-row justify-center items-center h-[48px] py-[12px] w-[343px]  px-[20px] gap-[8px] lg:w-[720px] md:w-[720px] bg-[#1570EF] border border-solid border-[#1570EF] rounded-lg capitalize"
                >
                  send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </header>
 <footer className="m-auto  lg:py-[48px] lg:px-16  md:py-[48px] md:px-16   items-center  h-[196px] gap-[64px]">
        <div className="  max-w-[1440px] flex flex-col items-start px-[16px]  h-[132px] py-[32px]  lg:flex-row lg:justify-between lg:items-center md:flex-row md:justify-between md:items-center   gap-5  border-t-[1px] border-t-solid border-t-[#EAECF0]">
          <img id="profile__img" src={Zuri} alt="" className="w-[185.03px]" />

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


  );
}

export default Contact;


      {/* <footer className="flex flex-col  gap-[64px] w-[375px] h-[196px]  lg:h-[160px] lg:py-[48px] items-center lg:px-0 lg:justify-between lg:flex-row  ">
        <div className="flex flex-col items-start w-[375px] h-[132px] py-0 px-[16px] lg:px-[32px] lg:gap-[32px] lg:h-[64px] lg:justify-between lg:flex-row lg:w-[1280px] ">
                    <div className="flex flex-col items-start pt-[32px] pr-0 pl-0 pb-0 gap-[16px] w-[343px] h-[132px] lg:pt-[32px]  lg:w-[1216px] lg:flex-row lg:justify-center border-t-[1px] border-t-solid border-t-[#EAECF0] ">
                    <img src={Zuri} alt="" />
                    <h2 className="text-[14px] leading-[20px] font-normal text-[#667085] font-sans">HNG Internship 9 Frontend Task</h2>
                    <img src={Logo2} alt="" />
                    </div>
        </div>
      </footer> */}
     
 