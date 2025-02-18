'use client'
import React from 'react'
import "../../css/page1.css";
import '../../css/page2.css'
import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import products from '@/components/pruductsList';
// import pic1 from "../../images/home.jpg";
// import pic2 from '../../images/importer-coffee-shop-equipment.jpg'
function page() {
  return ( 

      <React.Fragment>
        <Header/> 
        <div className='text-center font-bold py-6 shadow-md shadow-gray-300 ' >
          <h1  >ایده برداز جهان صنعت / فروشگاه </h1>
          <h2 className='' >لیست تمامی محصولات قرار گرفته در سایت  هر 24 سایت یکبار به روز رسانی میشوند </h2>
        </div>
        <div  className='card-container'>
         {products.map((product) => (
            <div key={product.id} className='p-3 rounded-md ' >
            <div className='card rounded-md  ' >
               <Image src={product.image} width={300} height={200 } alt='pic'  className=''  />
               <h2>{product.name}</h2>
               <p>{product.price}</p> 
               <button className='  btn  bg-green-400 p-1 px-4 rounded-md my-2
                border-y-red-900 ' >خرید</button>
            </div>
            </div>
         ))}
         </div>
         
        <Footer/>   
      </React.Fragment>
  )
}

export default page
 