/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "../../css/page1.css";
import "../../css/page3.css";
function page() {
  return (
    <React.Fragment>
      <Header />
      <br />
      <div className=" mt-4 bg-blue-200  shadow-xl flex justify-center items-center  shadow-blue-400  rounded-ee-xl rounded-lg rounded-es-xl text-xl font-serif "  >
        <h2 className="p-4 font-sans" ><a href="/">خانه</a> {"<"}  خدمات ما</h2>
      </div>
      <div className="text-center p-3 shadow-md rounded-ee-xl rounded-es-xl shadow-blue-400  " >
          <h3 className="font-semibold p-4  text-xl   " >سوابق کاری</h3>
          <p className="font-sans " >بیست سال سابقه کاری در فروش دستگاه های بستنی ساز و نصب و راه اندازی دستگاه بستنی ساز<br /> و تجهیز کافی شاپ و دیزاین کافی شاپ  فروش سردخانه ها و سیستم های تهویه مطبوع و تجهیزات نفت <br />و گاز و نصب و راه اندازی سردخانه و سیستم های تهویه</p>
      </div>
      <div className="card-container font-sans  ">
        <div className="card  ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="MediumBlue"
            className="bi bi-1-square"
            viewBox="0 0 16 16"
          >
            <path d="M9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383z" />
            <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
          </svg>
          <h2 className="font-semibold text-xl  " >فروش دستگاه های بستنی ساز</h2>
          <p className="text-slate-700 py-2 " >ما به نایندگی از کارخانه ها و برند های معتبر بازار برای شما بهترین دستگاه های بستنی ساز را با بهترین قیمت ها فراهم میکنیم</p>
          <br />
          <a  href="/Products"  className="bg-blue-200  p-2 rounded-md">مشاهده لیست محصوالات</a>
        </div>
        <div className="card">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="MediumBlue"
            className="bi bi-2-square"
            viewBox="0 0 16 16"
          >
            <path d="M6.646 6.24v.07H5.375v-.064c0-1.213.879-2.402 2.637-2.402 1.582 0 2.613.949 2.613 2.215 0 1.002-.6 1.667-1.287 2.43l-.096.107-1.974 2.22v.077h3.498V12H5.422v-.832l2.97-3.293c.434-.475.903-1.008.903-1.705 0-.744-.557-1.236-1.313-1.236-.843 0-1.336.615-1.336 1.306" />
            <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
          </svg>
          <h2 className="font-semibold text-xl " >فروش تجهیزات کافه</h2>
          <p className="text-slate-700 py-2"   >همچنین شما میتوانید تمامی تجهیزات کافه و رستوران های خود را به ما بسپارید و دستگاه های مورد نیاز خود را از ما خریداری نمایید</p>
          <br />
          <a href="/Products" className="bg-blue-200  p-2 rounded-md">مشاهده لیست محصوالات</a>
        </div>
        <div className="card">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="MediumBlue"
            className="bi bi-3-square"
            viewBox="0 0 16 16"
          >
            <path d="M7.918 8.414h-.879V7.342h.838c.78 0 1.348-.522 1.342-1.237 0-.709-.563-1.195-1.348-1.195-.79 0-1.312.498-1.348 1.055H5.275c.036-1.137.95-2.115 2.625-2.121 1.594-.012 2.608.885 2.637 2.062.023 1.137-.885 1.776-1.482 1.875v.07c.703.07 1.71.64 1.734 1.917.024 1.459-1.277 2.396-2.93 2.396-1.705 0-2.707-.967-2.754-2.144H6.33c.059.597.68 1.06 1.541 1.066.973.006 1.6-.563 1.588-1.354-.006-.779-.621-1.318-1.541-1.318" />
            <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
          </svg>
          <h2 className="font-semibold text-xl " >فروش نقد / شرایطی</h2>
          <p className="text-slate-700 py-2 "  >یکی از نکات مثبت  در خرید از شرکت ایده پرداز جهان صنعت این میباشد که شما میتوانید دستگاه ها را هم به صورت نقدی و هم به صورت اقساط در چک های بلند مدت خریداری نمایید </p>
          <br />
          <a href="/Products" className="bg-blue-200  p-2 rounded-md">مشاهده لیست محصوالات</a>
        </div>
        <div className="card">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="MediumBlue"
            className="bi bi-4-square "
            viewBox="0 0 16 16"
          >
            <path d="M7.519 5.057q.33-.527.657-1.055h1.933v5.332h1.008v1.107H10.11V12H8.85v-1.559H4.978V9.322c.77-1.427 1.656-2.847 2.542-4.265ZM6.225 9.281v.053H8.85V5.063h-.065c-.867 1.33-1.787 2.806-2.56 4.218" />
            <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
          </svg>
          <h2 className="font-semibold text-xl  " >تضمین  کیفیت کالا</h2>
          <p className="text-slate-700 py-2 " >دستگاه هابه دلیل اینکه مستقیم از کارخانه برای شما ارسال میشوند ، پلم و آکبند بوده و تمامی دستگاه ها دارای گارانتی و خدمات میباشند</p>
          <br />
          <a href="/Products" className="bg-blue-200  p-2 rounded-md">مشاهده لیست محصوالات</a>
        </div>
        <div className="card">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="MediumBlue"
            className="bi bi-5-square"
            viewBox="0 0 16 16"
          >
            <path d="M7.994 12.158c-1.57 0-2.654-.902-2.719-2.115h1.237c.14.72.832 1.031 1.529 1.031.791 0 1.57-.597 1.57-1.681 0-.967-.732-1.57-1.582-1.57-.767 0-1.242.45-1.435.808H5.445L5.791 4h4.705v1.103H6.875l-.193 2.343h.064c.17-.258.715-.68 1.611-.68 1.383 0 2.561.944 2.561 2.585 0 1.687-1.184 2.806-2.924 2.806Z" />
            <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
          </svg>
          <h2 className="font-semibold text-xl " >خرید به صورت حضوری و آنلاین </h2>
          <p className="text-slate-700 py-2 "  >مشتریان میتوانند هم به صورت حضوری و هم به صورت انلاین ثبت سفارش کنند ، پیشنهاد داده میشود برای دوستانی که در شهر های نزدیک و حومه تهران ساکن هستند به صورت حضوری برای خرید دستگاه ها تشریف بیارند</p>
          <br />
          <a href="/Products" className="bg-blue-200  p-2 rounded-md">مشاهده لیست محصوالات</a>
        </div>
        <div className="card">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="MediumBlue"
            className="bi bi-6-square"
            viewBox="0 0 16 16"
          >
            <path d="M8.21 3.855c1.612 0 2.515.99 2.573 1.899H9.494c-.1-.358-.51-.815-1.312-.815-1.078 0-1.817 1.09-1.805 3.036h.082c.229-.545.855-1.155 1.98-1.155 1.254 0 2.508.88 2.508 2.555 0 1.77-1.218 2.783-2.847 2.783-.932 0-1.84-.328-2.409-1.254-.369-.603-.597-1.459-.597-2.642 0-3.012 1.248-4.407 3.117-4.407Zm-.099 4.008c-.92 0-1.564.65-1.564 1.576 0 1.032.703 1.635 1.558 1.635.868 0 1.553-.533 1.553-1.629 0-1.06-.744-1.582-1.547-1.582" />
            <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
          </svg>
          <h2 className="font-semibold text-xl " >ارسال به سراسر کشور</h2>
          <p className="text-slate-700 py-2 " >مشتریانی که ثبت سفارش را انجام داده و فاکتور را دریافت کردنند ، پس از دریافت فاکتور برای دریافت دستگاه میتوانند به صورت حضوری دستگاه را تحویل بگیرند و یا میتوانند  توسط بار بری محموله خود را دریافت کنند</p>
          <br />
          <a href="/Products" className="bg-blue-200  p-2 rounded-md">مشاهده لیست محصوالات</a>
        </div>
        <div className="card">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="MediumBlue" 
            className="bi bi-7-square"
            viewBox="0 0 16 16"
          >
            <path d="M5.37 5.11V4.001h5.308V5.15L7.42 12H6.025l3.317-6.82v-.07H5.369Z" />
            <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
          </svg>
          <h2 className="font-semibold text-xl " >نصب دستگاه ها </h2>
          <p className="text-slate-700 py-2 "  >شما پس از خرید دستگاه میتوانید مراحل نصب و سرهم سازی دستگاه ها و اموزش نحوه استفاده از دستگاه ها را به ما بسپارید </p>
          <br />
          <a href="/Products" className="bg-blue-200  p-2 rounded-md">مشاهده لیست محصوالات</a>
        </div>
        <div className="card">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="	MediumBlue"
            className="bi bi-8-square"
            viewBox="0 0 16 16"
          >
            <path d="M10.97 9.803c0 1.394-1.218 2.355-2.988 2.355-1.763 0-2.953-.955-2.953-2.344 0-1.271.95-1.851 1.647-2.003v-.065c-.621-.193-1.33-.738-1.33-1.781 0-1.225 1.09-2.121 2.66-2.121s2.654.896 2.654 2.12c0 1.061-.738 1.595-1.336 1.782v.065c.703.152 1.647.744 1.647 1.992Zm-4.347-3.71c0 .739.586 1.255 1.383 1.255s1.377-.516 1.377-1.254c0-.733-.58-1.23-1.377-1.23s-1.383.497-1.383 1.23Zm-.281 3.645c0 .838.72 1.412 1.664 1.412.943 0 1.658-.574 1.658-1.412 0-.843-.715-1.424-1.658-1.424-.944 0-1.664.58-1.664 1.424" />
            <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
          </svg>
          <h2 className="font-semibold text-xl " >خدمتات پس از فروش</h2>
          <p className="text-slate-700 py-2 "  >اگر دستگاهی به مشکل خورد و یا قطعه ای از آن شکست و یا گم شد میتوانید آن قطعه را به صورت جداگانه با قیمت لیست کارخانه از ما خریداری نمایید</p>
          <br />
          <a href="/Products" className="bg-blue-200  p-2 rounded-md" >مشاهده لیست محصوالات</a>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default page;
