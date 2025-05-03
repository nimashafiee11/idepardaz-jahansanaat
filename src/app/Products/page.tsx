'use client'
import React from 'react'
import "../../css/page1.css";
import '../../css/page2.css'
// import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import products from '@/components/pruductsList';
// import pic1 from "../../images/home.jpg";
// import pic2 from '../../images/importer-coffee-shop-equipment.jpg'
function page() {
  return ( 

      <React.Fragment>
        <Header/> 
        <br />
        <div className='text-center font-bold  font-sans  mt-20  py-6 shadow-md shadow-gray-300 ' >
          <h1  >ایده برداز جهان صنعت / فروشگاه </h1>
          <h2 className='text-center' >لیست تمامی محصولات قرار گرفته در سایت  هر 24 ساعت به روز رسانی میشوند </h2>
          <h3  >لیست محصولات  دستگاه های تجهیزات کافی شاپ و رستوران / تجهیزات سرمایشی و تهویه مطبوع صنعتی و تجاری</h3>
        </div>
        <div  className='card-container font-sans'>
         {products.map((product) => ( 
            <div key={product.id} className='p-3 rounded-md text-center   ' >
            <div className='card rounded-md text-center flex flex-col  justify-center' id='products-cards' >
                <div className=''  id='products-pic'  > 
                {/* <Image src={product.image} width={400} height={200} alt='pic'  className='bg-cover rounded-md      pt-1 pb-3 '  /> */}
                <img src={product.image} alt=""  className='bg-cover rounded-md pt-5 pb-3 '  />
                </div>
               <h1 className='font-bold text-xl ' >{product.name}</h1>
               <p id='uic' >{`${product.description}`}</p>
               <p>{product.price}</p> 
               <button className='  btn  bg-green-400 p-1 px-2 rounded-md my-2
                border-y-red-900 ' ><a target='_blank' href={product.images} >مشاهده لیست محصولات مربوط</a></button>
                <br />
            </div>
            </div>
         ))}
         </div>
         
        <Footer/>   
      </React.Fragment>
  )
}

export default page
 