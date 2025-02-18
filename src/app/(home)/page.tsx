import React from "react";
import "../../css/page1.css";
import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import pic1 from "../../images/home.jpg";
import pic2 from "../../images/importer-coffee-shop-equipment.jpg";
function page() {
  return (
    <React.Fragment>
      <Header />
      <div className="" id="headerbody" >
        <Image src={pic1} alt="" className="img  blur-sm brightness-50 " />
        <div className="text">
          {" "}
          شرکت ایده برداز جهان صنعت <br />
          <p className="text-base">
            ما اینجا هستیم تا برای شما بهترین دستگاه ها را با بهترین شرایط فراهم
            کنیم !!!{" "}
          </p>
        </div>
      </div>

      <div className="flex  pt-32 flex-col gap-32 font-sans    " id="container">
        <div className=" flex justify-between items-center p-5 font-sans  " id="section1">
          <div className="text-end font-sans  w-3/6 text-md ps-10   " id="text1">
            <h2 className="font-extrabold font-sans   pb-5 text-center ">خدمات ما</h2>

            <div className="flex flex-col gap-4 " >

            <p>
              برای خرید ماشینهای بستنی ساز و سردخانه های صنعتی و تجهیزات کافی
              شاپ با برند های متنوع از جمله تهویه مطبوع و چیلر و فن کویل و
              هواساز وتجهیزات نفت و گاز و موارد دیگر به صورت نقد واقساط که در
              ادامه سایت ذکر شده میتوانید با ما هم به صورت حضوری و هم به صورت
              تلفنی و یا پیام رسان های مختلف  درارتباط باشید
              
            </p>
           <div className="flex justify-center gap-3  " >
           <button  id="btn1" className="bg-blue-400 p-2 rounded text-white" >تماس با ما</button>
           <button id="btn2" className="bg-blue-400 p-2 rounded text-white" >فروشگاه</button>
           </div>
            </div>
          </div>
          <br />
          <br />
          <Image
            src={pic2}
            alt="pic 2"
            width={500}
            className="border rounded-2xl  pr-20  shadow-lg  shadow-black "
          />
        </div>
        <div
          className="flex p-8 justify-between items-center pb-8 "
          id="section2"
        >
          <Image
            src={pic2}
            alt="pic 3"
            width={500}
            className="border rounded-2xl  pr-20  shadow-lg  shadow-black "
          />
          <br />
          <br />
          <div className="text-end font-sans w-3/6 text-lg pr-14" id="text2">
            <h2 className="font-extrabold pb-5 text-center  font-sans "> کمی درباره ما</h2>
            <p>
            20 سال سابقه کاری در فروش دستگاه های بستنی ساز و نصب و راه اندازی  دستگاه بستنی ساز و تجهیز کافی شاپ و دیزاین کافی شاپ و فروش سردخانه ها و سیستم های تهویه مطبوع و تجهیزات نفت و گاز و نصب و راه اندازی سردخانه و سیستم های تهویه
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default page;
