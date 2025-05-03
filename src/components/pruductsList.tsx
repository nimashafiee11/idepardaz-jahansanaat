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
    image : '/images/halilit10.jpg' , 
    images : '/images/halilitee.jpeg' 
  },
  {   
    id: 24,
    name: "بستنی ساز حلیلیت",
    price: "" ,
    description: "دستگاه های بستنی ساز برند حلیلیت هم تک فاز و هم سه فاز نو و دست دوم موجود میباشد ",
    image : '/images/halilit-ellisse.jpg' , 
    images : '/images/halilitee.jpeg' 
  },
  {
    id : 1 , 
    name : 'پاستوریزاتور / اجینگ'  , 
    price : '' , 
    description : 'پاستوریزاتور برند شرکت نیک  (نیک نام)  استرلیزه  کردن شیر ،  سرد کردن ، گرم کردن و نگهداری شیر' ,
    image : '/images/pastorizator10.jpeg' , 
    images : '/images/barseftkonee.jpeg'
  },
  {
    id : 18 ,
    name : 'بارسفت کن درب استیل' , 
    price : '' , 
    description : 'بار سفت کن برند شرکت نیک (نیک نام)' , 
    image : '/images/barseftkonnik.jpeg' , 
    images : '/images/barseftkonee.jpeg'
  } ,
  {
    id : 19,
    name : 'بار سفت کن درب عایق دار ' , 
    price : '' , 
    description : 'بار سفت کن  برند شرکت نیک (نیک نام)' , 
    image : '/images/barseftkonnik2.jpeg' , 
    images : '/images/barseftkonee.jpeg'
  },
  {
    id :32 ,
    name : 'کندانسورها' , 
    price : '' , 
    description : 'انواع کندانسور های پوسته/عمودی فریونی/افقی/vتایپ موجود میباشد' , 
    image : '/images/sard1.jpeg' , 
    images : ''
  },
  {
    id : 33,
    name : 'چیلرهای آب ' , 
    price : '' , 
    description : 'چیلرهای قدرتمند باکمپرسور های برند برای کاربردهای صنعتی و تجاری موجود میباشد' , 
    image : '/images/sard2.jpeg'  , 
    images : ''
  },
  {
    id : 34,
    name : 'فن کویل ها' , 
    price : '' , 
    description : '   فن کویل های زمینی/کانالی/سقفی/یک طرفه و چهار طرفه  با کمپرسور های مطرح موجود میباشد ' , 
    image : '/images/sard3.jpeg'  , 
    images : ''
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
    image : '/images/espersooo.png' ,
    images : '/images/royal.pdf'
   },
  {
    id: 5,
    name: "شربت سرد کن ",
    price: "",
    description: "شربت سرد کن ها از تک مخزن تا سه مخزن به صورت کامل موجود میباشد",
    image : '/images/sharbatsardkon2.jpg', 
    images : '/images/sharbatsardkonee.jpeg' 
   },
  {
    id: 6,
    name: "یخ در بهشت ",
    price: "",
    description: "دستگاه های یخ در بهشت از تک مخزن تا سه مخزن موجود میباشد",
    image : '/images/yakhdarbehesht2.jpg' , 
    images : '/images/sharbatsardkonee.jpeg'  
  },
  {
    id: 7,
    name: "بلندر(مخلوط کن)",
    price: "",
    description: "مخلوط کن های کاور دار و ساده موجود میباشد با سیستم های مکانیک و دیجیتال",
    image : '/images/belender.jpg' ,
    images : '/images/blenderee.jpeg' 
   },
  {
    id: 8,
    name: " تاپینگ بستنی",
    price: "تاپینگ های با ابعاد مختلف از 8 کاسه الی 24 کاسه موجود میباشد ",
    description: "",
    image : '/images/toping2.jpeg' ,
    images : '/images/tapingee.jpeg' 
   },
  {
   id : 9 , 
   name : "شوکیک",
   description: "  شوکیک در ابعاد های 75 و 90 و 120 موجود میباشد ",
   price: "",
   image:"/images/shokeyk2.jpg" ,
   images : ''
  },
  {
    id : 10  , 
   name : "یخچال ایستاده ",
   description: "یخچال های ایستاده با عرض های مختلف تک درب و دو درب  در رنگ های سفید و مشکی ",
   price: "",
   image:"/images/yakhchalistade.jpg" ,
   images : '/images/kinoee.jpeg'
  },
  {
    id : 11  , 
    name : "فریزر ایستاده ",
    description: "فریزر های ایستاده با عرض های مختلف تک درب و دو درب در رنگ های سفید و مشکی ",
    price: "",
    image:"/images/freezeristade.jpg",
    images : '/images/kinoee.jpeg'
  },
  {
    id :12, 
   name : "آب مربکبات گیر",
   description: "اب مرکبات گیری ( پرتغال و انار ) های دستی و برقی با برند های مختلف",
   price: "",
   image:"/images/morakabatgir2.jpg" ,
   images : '/images/sharbatsardkonee.jpeg' 
   
  },
  {
    id :13, 
    name : "یخساز",
    description: "یخساز ها با حجم های  28 ، 38 ، 46  و 90 کیلو گرمی در رنگ بندی های سفید و مشکی موجود میباشند",
    price: "",
    image:"/images/yakhsaz.jpg" ,
    images : '/images/kinoee.jpeg'
  },
  {
    id:14 ,
    name:"یخچال پرده هوا",
    description:"یخچال های پرده هوا با ابعاد ها و عرض های  مختلف برای شما مشتریان عزیز طراحی میگردد",
    price:"",
    image:"/images/pardehava4.jpg" ,
    images : ''
  } ,
  {
    id : 15 , 
    name : "بارسفت کن البرز" , 
    description : 'بارسفت کن های البرز تمامی مدل ها موجود میباشد ' , 
    price : '' , 
    image : '/images/barseftkonalbrz.jpeg' , 
    images : '/images/barseftknealbrzee.jpeg'
  } ,
  {
    id: 16,
    name: "  بار سفت کن البرز",
    price: "",
    description: "دستگاه های بار سفت کن تنوری و  درب عایق دار و استیل موجود میباشد",
     image : '/images/barseftkon3.jpg' , 
     images : '/images/barseftknealbrzee.jpeg'
  },
  {
    id: 20,
    name: " یخچال لبنیات",
    price: "",
    description: "یخچال لبنیات  در ابعاد های مختلف موجود میباشد",
     image : '/images/yakhchallabaniyat.jpeg' , 
     images : ''
  }
];
export default products;
