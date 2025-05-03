/* eslint-disable @next/next/no-img-element */
import React from "react";
import "../../css/page1.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
// import Image from "next/image";
// import pic1 from "../../images/headerbody.jpg";
// import pic2 from "../../images/main1.jpeg";
// import pic3 from "../../../public/home-first.jpg";
function page() {
  return (
    <React.Fragment>
      <Header />
      <div className="shadow-lg pt-14 shadow-blue-600 " id="headerbody" >
        {/* <Image src={pic1} alt="" className="img  blur-sm brightness-50 " /> */}
        <img src="images/headerbody.jpg" alt="headerbody-photo" className="img  blur-sm brightness-50 " />
        <div className="text">
          {" "}
          شرکت ایده پرداز جهان صنعت <br />
          <p className="text-base">
            ما اینجا هستیم تا برای شما بهترین دستگاه ها را با بهترین شرایط فراهم
            کنیم !!!{" "}
          </p>
          <button className="animate-bounce font-thin shadow-lg mt-3  shadow-cyan-700 rounded-xl " ><a className="text-lg px-2 " href="/CallUs">با ما در تماس باشید</a></button>
        </div>
      </div>

      <div className="flex  pt-32 flex-col gap-32 font-sans    " id="container">
        <div className=" flex justify-between items-center p-5 font-sans  " id="section1">
          <div className="text-end font-sans  w-3/6 text-md ps-10   " id="text1">
            <h2 className="font-extrabold font-sans text-2xl border-t-2 border-blue-700  border-dotted rounded-2xl border-b-2 p-4  pb-5 text-center "  id="h2-s2" >خدمات ما</h2>

            <div className="flex flex-col gap-4 " >

            <p className="pt-2">
              برای خرید  دستگاهای بستنی ساز قیفی، بارسفت کن، پاستوریزاتور، اجینگ، تاپینگ، یخچال ایستاده، شوکیک، تجهیز کافی شاپ و تجهیزات برودتی و حرارتی و سیستم چیلر و هواساز
 موارد دیگر به صورت نقد واقساط که در
              ادامه سایت ذکر شده میتوانید با ما هم به صورت حضوری و هم به صورت
              تلفنی و یا پیام رسان های مختلف  درارتباط باشید
            </p>
           <div className="flex justify-center gap-3  " >
           <button  id="btn1" className="bg-blue-700 p-2 rounded text-white" ><a href="/CallUs">تماس با ما</a></button>
           <button id="btn2" className="bg-blue-700 p-2 rounded text-white" ><a href="/Products">فروشگاه</a></button>
           </div>
            </div>
          </div>
          <br />
          <br />
          {/* <Image
            src={pic3}
            alt="pic 2"
            width={500}
            className=" rounded-2xl  h-96 overflow-hidden bg-cover    shadow-xl  shadow-blue-800 "
          /> */}
          <img src="images/home-first.jpg" alt="" 
          id="img-1-2"
           className=" rounded-2xl h-80 overflow-hidden bg-cover   shadow-xl  shadow-blue-800 "
          />
        </div>
        <div
          className="flex p-8 justify-between items-center pb-8 "
          id="section2"
        >
          {/* <Image
            src={pic2}
            alt="pic 3"
            width={500}
            className=" rounded-2xl   shadow-xl  shadow-blue-800 "
          /> */}
          <img src="images/main1.jpeg" alt="" 
          id="img-1-2"
            className=" rounded-2xl   shadow-xl  shadow-blue-800" />
          <br />
          <br />
          <div className="text-end font-sans w-3/6 text-lg pr-14" id="text2">
            <h2 className="font-extrabold border-t-2 border-blue-700  border-dotted rounded-2xl border-b-2 p-4 pb-5 text-center text-2xl  font-sans " id="h2-s2" > کمی درباره ما</h2>
            <p className="pt-2" id="" >
           بیش از 20  سال سابقه کاری در فروش دستگاه های بستنی ساز و نصب و راه اندازی  دستگاه بستنی ساز و تجهیز کافی شاپ و دیزاین کافی شاپ و فروش سردخانه ها و سیستم های تهویه مطبوع و تجهیزات نفت و گاز و نصب و راه اندازی سردخانه و سیستم های تهویه
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default page;
