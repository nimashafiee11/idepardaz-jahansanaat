'use client'
import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";

import '../../css/page4.css';


function page() {
    
    const handleWhatsApp = ()=>{
       window.open("https://wa.me/+989199314911")
    }
    const hanldeInsta = ()=>{
          window.open("http://instagram.com/_u/jahan._sanaat/")
    }
    const handleTell = ()=>{
        window.open("https://t.me/+989199314911")
    }
    const handleRubika =()=>{
          window.open('https://rubika.ir/Sk15105')
    }
    const handlePhone = ()=>{
         window.open('tel:+989199314911')
    }
    const handleEmail =()=>{
      window.open('mailto:shafieenima0@gmail.com')
    }
      
  return (
    <React.Fragment>
      <Header />
      <br />
      <br />
      <div className=" mt-14 font-serif  shadow-md rounded-ee-2xl rounded-es-2xl shadow-blue-400  " id="text">
        <h2>راه های ارتباطی با ما : </h2>
        <p>مشما مشتریان عزیز میتوانید از طریق راه های ارباطی درج شده در زیر با ما در ارتباط باشید . کافیست برای انتخابی هر پیامرسان روی آیکن آن کلیک کنید تا مستقیم وارد صفحه مورد نظر شوید</p>
      </div>
      <div className="" id="contacting"  >
        <div className="card" onClick={handleWhatsApp} >
          <svg
            className="w-[48px] h-[48px] text-gray-800 dark:text-black"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z"
              clip-rule="evenodd"
            />
            <path
              fill="currentColor"
              d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"
            />
          </svg>
          whatsApp
        </div>
        <div className="card" onClick={hanldeInsta} >
          <svg
            className="w-[48px] h-[48px] text-gray-800 dark:text-black"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
              clip-rule="evenodd"
            />
          </svg>
          instagram
        </div>
        <div className="card" onClick={handlePhone} >
          <svg
            className="w-[48px] h-[48px] text-gray-800 dark:text-black"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z" />
          </svg>
          phoneNumber
        </div>
        <div className="card" onClick={handleEmail} >
          <svg
            className="w-[48px] h-[48px] text-gray-800 dark:text-black"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.8"
              d="M4 13h3.439a.991.991 0 0 1 .908.6 3.978 3.978 0 0 0 7.306 0 .99.99 0 0 1 .908-.6H20M4 13v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-6M4 13l2-9h12l2 9"
            />
          </svg>
          Email
        </div>
        <div className="card" onClick={handleRubika} >
          <svg
            className="w-[48px] h-[48px] text-gray-800 dark:text-black"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fill-rule="evenodd"
              d="M9.166 19.986A.915.915 0 0 1 9 20H5a1 1 0 1 1 0-2h4c.057 0 .112.005.166.014a3.001 3.001 0 0 1 5.668 0A.915.915 0 0 1 15 18h4a1 1 0 1 1 0 2h-4c-.056 0-.112-.005-.166-.014a3.001 3.001 0 0 1-5.668 0ZM11 19a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
              clip-rule="evenodd"
            />
            <path d="M11.5 2.131a1 1 0 0 1 1 0l4.601 2.657c-.06.018-.12.044-.179.075L12.08 7.475 6.946 4.76 11.5 2.131ZM5.967 6.505v5.21a1 1 0 0 0 .5.866l4.57 2.638V9.186l-5.07-2.681Zm7.07 8.671 4.496-2.595a1 1 0 0 0 .5-.866v-5.2a1 1 0 0 1-.161.108l-4.835 2.608v5.945Z" />
          </svg>
          Rubika
        </div>
        <div className="card" onClick={handleTell} >
          <svg
            className="w-[48px] h-[48px] text-gray-800 dark:text-black"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fill-rule="evenodd"
              d="M12 2a1 1 0 0 1 .932.638l7 18a1 1 0 0 1-1.326 1.281L13 19.517V13a1 1 0 1 0-2 0v6.517l-5.606 2.402a1 1 0 0 1-1.326-1.281l7-18A1 1 0 0 1 12 2Z"
              clip-rule="evenodd"
            />
          </svg>
          Telegram
        </div>
      </div>
      <br/>
      <hr className="shadow-md shadow-sky-300 border-y-blue-600  w-2/5  " id="hr" />
      <br />
      <hr className="shadow-md shadow-sky-300 border-y-blue-500 w-3/5 " id="hr"/>
      <br />
      <hr  className="shadow-md shadow-sky-300 border-y-blue-400  w-4/5  "id="hr"/>
      <br />
      <hr  className="shadow-md shadow-sky-300 border-y-blue-300  w-full " id="hr"/>
      <br />
   
      
      <div className=" pt-8  flex justify-around items-center  " id="locating"  >
        <form className="flex flex-col border border-blue-200 h-fit p-11  w-fit   bg-blue-500 rounded-2xl text-end font-sans   " action='post' >
            <p className="pb-4   text-center font-bold  shadow-lg rounded-xl  " >سوال ها و نظر هایتان را برای ماارسال کنید</p>
            <label className="pe-2 py-1 " > نام  </label>
            <input type="text" className="border border-blue-300 rounded shadow-md w-72  "  />
            <label className="pe-2 py-1 " > نام خانوادگی </label>
            <input type="text" className="border border-blue-300 rounded shadow-md w-72 " />
            <label className="pe-2 py-1 " >شماره تماس</label>
            <input type="number" placeholder="" className="border border-blue-300 rounded shadow-md w-72 " />
            <label className="pe-2 py-1 " >پیغام مورد نظر</label>
           <textarea  className="border border-blue-300 rounded shadow-md w-72" />
            <br/>
            <button className="bg-sky-400 w-3/5  rounded-md  " >ارسال پیام</button>
        </form>
      <iframe className="rounded-lg"  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3236.8735168020244!2d51.379748500000005!3d35.7784832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e07b7e7434721%3A0xb38b23106afb2170!2z2KzZh9in2YbZvtin2LHYsw!5e0!3m2!1sen!2s!4v1739342273737!5m2!1sen!2s" width="600" height="450"   loading="lazy" ></iframe>
      </div>
      <br />
      <br />
      <div className="flex items-center flex-row-reverse font-sans font-semibold  shadow-lg shadow-blue-700 pe-3  " id="address" >
      <svg className="w-[48px] h-[48px] text-gray-800 dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z" clip-rule="evenodd"/>
</svg>
آدرس ما : تهران - سعادت آباد - بلوار علامه  شمالی - خیابان  20 ام غربی  - پلاک 6 - خانه جهان پارس - شرکت ایده پرداز جهان صنعت

      </div>
      <Footer />
    </React.Fragment>
  );
}

export default page;
