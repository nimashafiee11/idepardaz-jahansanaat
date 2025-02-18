import React from "react";
import "../../css/page1.css";
import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import pic1 from "../../images/home.jpg";
import pic2 from '../../images/importer-coffee-shop-equipment.jpg'
function page() {
  return (
    <React.Fragment>
      <Header/>
       <div className="" id="headerbody"  >
        <Image src={pic1} alt=""  className="img  blur-sm brightness-50 "/>
        <div className="text"> شرکت ایده برداز جهان صنعت ( شعبه تهران )<br/>
        <p className="text-base"  >ما  اینجا هستیم تا برای شما بهترین دستگاه ها را با بهترین شرایط فراهم کنیم     !!!  </p></div>
       </div>


        <div className="flex  pt-32 flex-col gap-32   " id="container"  >

           <div className=" flex justify-between items-center p-5 " id="section1" >
            <div className="text-end font-serif text-lg ps-10  " id="text1" >
            <h2 className="font-extrabold pb-5 text-center " >چرا ما ؟</h2>
                <p>شما میتوانید با شرکت ایده برداز جهان صنعت بهترین تجهیزات کافه را برای خود فراهم کنید <br/> ما با اماده سازی و فراهم کردن بهترین دستگاه ها برای شما هم به صورت اقساط<br/> و هم به صورت نقدی اماده هستیم و شما میتواندی برای خرید دستگاه با ما در ارتباط باشید</p>
            </div>
            <Image src={pic2} alt="pic 2" width={500} className="border rounded-2xl  pr-20  shadow-lg  shadow-black "  />
           </div>
           <div className="flex p-5 justify-between items-center pb-8 " id="section2"  >
           <Image src={pic2} alt="pic 3" width={500} className="border rounded-2xl  pr-20  shadow-lg  shadow-black "  />
           <div className="text-end font-serif text-lg pr-10" id="text2"  >
           <h2 className="font-extrabold pb-5 text-center "  >چرا ما ؟</h2>
           <p>شما میتوانید با شرکت ایده برداز جهان صنعت بهترین تجهیزات کافه را برای خود فراهم کنید <br/> ما با اماده سازی و فراهم کردن بهترین دستگاه ها برای شما هم به صورت اقساط<br/> و هم به صورت نقدی اماده هستیم و شما میتواندی برای خرید دستگاه با ما در ارتباط باشید</p>
           </div>
          </div>
       </div>
       <Footer/>

       </React.Fragment>
  );
}

export default page;
