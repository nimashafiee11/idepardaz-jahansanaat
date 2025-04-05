const products = [
  // { 
  //    id: 1,
  //    name: "بستنی ساز نیک",
  //    price: "",
  //    description: "دستگاه های بستنی ساز برند نیک نام هم تک فاز و هم سه فاز نو و دست دوم موجود میباشد ",
  //    image : '/nik.jpg' , 
  //    images : 'nikee.jpeg'
  // },
  {   
    id: 23,
    name: "بستنی ساز حلیلیت",
    price: "" ,
    description: "دستگاه های بستنی ساز برند حلیلیت هم تک فاز و هم سه فاز نو و دست دوم موجود میباشد ",
    image : '/halilit10.jpg' , 
    images : 'halilitee.jpeg' 
  },
  {   
    id: 24,
    name: "بستنی ساز حلیلیت",
    price: "" ,
    description: "دستگاه های بستنی ساز برند حلیلیت هم تک فاز و هم سه فاز نو و دست دوم موجود میباشد ",
    image : '/halilit-ellisse.jpg' , 
    images : 'halilitee.jpeg' 
  },
  {
    id : 1 , 
    name : 'پاستوریزاتور / اجینگ'  , 
    price : '' , 
    description : 'پاستوریزاتور برند شرکت نیک  (نیک نام)  استرلیزه  کردن شیر ،  سرد کردن ، گرم کردن و نگهداری شیر' ,
    image : '/pastorizator10.jpeg' , 
    images : '/barseftkonee.jpeg'
  },
  {
    id : 18 ,
    name : 'بارسفت کن درب استیل' , 
    price : '' , 
    description : 'بار سفت کن برند شرکت نیک (نیک نام)' , 
    image : '/barseftkonnik.jpeg' , 
    images : '/barseftkonee.jpeg'
  } ,
  {
    id : 19,
    name : 'بار سفت کن درب عایق دار ' , 
    price : '' , 
    description : 'بار سفت کن  برند شرکت نیک (نیک نام)' , 
    image : '/barseftkonnik2.jpeg' , 
    images : '/barseftkonee.jpeg'
  },
  // { 
    
  //    id: 22,
  //    name: "بستنی ساز حلیلیت",
  //    price: "" ,
  //    description: "دستگاه های بستنی ساز برند هلیلیت هم تک فاز و هم سه فاز نو و دست دوم موجود میباشد ",
  //    image : '/halilit2.jpg' , 
  //    images : 'halilitee.jpeg' 
  //  },

  // { 
    
  //   id: 24,
  //   name: "بستنی ساز حلیلیت",
  //   price: "" ,
  //   description: "دستگاه های بستنی ساز برند هلیلیت هم تک فاز و هم سه فاز نو و دست دوم موجود میباشد ",
  //   image : '/halilit5.jpg' , 
  //   images : 'halilitee.jpeg' 
  // },
  // { 
    
  //   id: 25,
  //   name: "بستنی ساز حلیلیت",
  //   price: "" ,
  //   description: "دستگاه های بستنی ساز برند هلیلیت هم تک فاز و هم سه فاز نو و دست دوم موجود میباشد ",
  //   image : '/halilit.jpg' , 
  //   images : 'halilitee.jpeg' 
  // },
  {
    id: 4,
    name: "اسپرسو ساز",
    price: "",
    description: "انواع برند های مختلف دستگاه های اسپرسو ساز های صنعتی و نیمه صنعتی ",
    image : '/espersooo.png' ,
    images : '/royal.pdf'
   },
  {
    id: 5,
    name: "شربت سرد کن ",
    price: "",
    description: "شربت سرد کن ها از تک مخزن تا سه مخزن به صورت کامل موجود میباشد",
    image : '/sharbatsardkon2.jpg', 
    images : 'sharbatsardkonee.jpeg' 
   },
  {
    id: 6,
    name: "یخ در بهشت ",
    price: "",
    description: "دستگاه های یخ در بهشت از تک مخزن تا سه مخزن موجود میباشد",
    image : '/yakhdarbehesht2.jpg' , 
    images : 'sharbatsardkonee.jpeg'  
  },
  {
    id: 7,
    name: "بلندر(مخلوط کن)",
    price: "",
    description: "مخلوط کن های کاور دار و ساده موجود میباشد با سیستم های مکانیک و دیجیتال",
    image : '/belender.jpg' ,
    images : 'blenderee.jpeg' 
   },
  {
    id: 8,
    name: " تاپینگ بستنی",
    price: "تاپینگ های با ابعاد مختلف از 8 کاسه الی 24 کاسه موجود میباشد ",
    description: "",
    image : '/toping2.jpeg' ,
    images : 'tapingee.jpeg' 
   },
  {
   id : 9 , 
   name : "شوکیک",
   description: "  شوکیک در ابعاد های 75 و 90 و 120 موجود میباشد ",
   price: "",
   image:"/shokeyk2.jpg" ,
   images : ''
  },
  {
    id : 10  , 
   name : "یخچال ایستاده ",
   description: "یخچال های ایستاده با عرض های مختلف تک درب و دو درب  در رنگ های سفید و مشکی ",
   price: "",
   image:"/yakhchalistade.jpg" ,
   images : 'kinoee.jpeg'
  },
  {
    id : 11  , 
    name : "فریزر ایستاده ",
    description: "فریزر های ایستاده با عرض های مختلف تک درب و دو درب در رنگ های سفید و مشکی ",
    price: "",
    image:"/freezeristade.jpg",
    images : 'kinoee.jpeg'
  },
  {
    id :12, 
   name : "آب مربکبات گیر",
   description: "اب مرکبات گیری ( پرتغال و انار ) های دستی و برقی با برند های مختلف",
   price: "",
   image:"/morakabatgir2.jpg" ,
   images : 'sharbatsardkonee.jpeg' 
   
  },
  {
    id :13, 
    name : "یخساز",
    description: "یخساز ها با حجم های  28 ، 38 ، 46  و 90 کیلو گرمی در رنگ بندی های سفید و مشکی موجود میباشند",
    price: "",
    image:"/yakhsaz.jpg" ,
    images : 'kinoee.jpeg'
  },
  {
    id:14 ,
    name:"یخچال پرده هوا",
    description:"یخچال های پرده هوا با ابعاد ها و عرض های  مختلف برای شما مشتریان عزیز طراحی میگردد",
    price:"",
    image:"/pardehava4.jpg" ,
    images : 'kinoee.jpeg'
  } ,
  {
    id : 15 , 
    name : "بارسفت کن البرز" , 
    description : 'بارسفت کن های البرز تمامی مدل ها موجود میباشد ' , 
    price : '' , 
    image : '/barseftkonalbrz.jpeg' , 
    images : '/barseftknealbrzee.jpeg'
  } ,
  {
    id: 16,
    name: "  بار سفت کن البرز",
    price: "",
    description: "دستگاه های بار سفت کن تنوری و  درب عایق دار و استیل موجود میباشد",
     image : '/barseftkon3.jpg' , 
     images : '/barseftknealbrzee.jpeg'
  },
  {
    id: 20,
    name: " یخچال لبنیات",
    price: "",
    description: "یخچال لبنیات  در ابعاد های مختلف موجود میباشد",
     image : '/yakhchallabaniyat.jpeg' , 
     images : 'barseftkonee.jpeg'
  }
];
export default products;
