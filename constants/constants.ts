import CompanyLogo1 from "@/public/images/Threadless.avif";
import CompanyLogo2 from "@/public/images/GrowSurf1.avif";
import CompanyLogo3 from "@/public/images/OnePageCRM.avif";
import CompanyLogo4 from "@/public/images/EfficientApp.avif";
import imageAvatar1 from "@/public/images/avatar--brianne-henderlong.avif";
import imageAvatar2 from "@/public/images/avatar--kevin-yun.avif";
import imageAvatar3 from "@/public/images/avatar--carmel-granahan.avif";
import imageAvatar4 from "@/public/images/avatar--alex-bass.avif";
import Image, { StaticImageData } from "next/image";



const solutionItems = [
    {
    id: 1,
    title: "customer support",
    description: "Support customers across email, live chat, and more",
    link: '/'
    },
    {
    id: 2,
    title: "shared inbox",
    description: "Manage and respond to emails as a team",
    link: '/'
    },
    {
    id: 3,
    title: "help center",
    description: "Create sites with answers to FAQs",
    link: '/'
    },
]


 const industryItems = [
        {id: 1, title: "sass", link: '/'},
        {id: 2, title: "logistics", link: '/'},
        {id: 3, title: "ecommerce", link: '/'},
        {id: 4, title: "manufacturing", link: '/'},
        {id: 5, title: "education", link: '/'},
        {id: 6, title: "media", link: '/'},
        {id: 7, title: "financial services", link: '/'},
        {id: 8, title: "health care", link: '/'},
        {id: 9, title: "proper management", link: '/'},
    ]

   const featuresItems =[
        {id: 10, title: "mailbox", link: '/'},
        {id: 11, title:"workflow", link: '/'},
        {id: 12, title: "knowlrdge base", link: '/'},
        {id: 13, title: "reporting", link: '/'},
        {id: 14, title: "live chat ", link: '/'},
        {id: 15, title: "customer management", link: '/'},
        {id: 16, title: "beacon", link: '/'},
        {id: 17, title: "integrations", link: '/'},
        {id: 18, title: "messages", link: '/'},
    ]

    const inspirationItems =[
        {id: 19, title: "help scout blog", link: '/'},
        {id: 20, title:"customer stories", link: '/'},
        {id: 21, title: "the ssupportive", link: '/'},
        {id: 22, title: "in the works", link: '/'},
       
    ]


    const doItems =[
        {id:23, title: "live classes", link: '/'},
        {id: 24, title:"help center", link: '/'},
        {id: 25, title: "developer docs", link: '/'},
        
       
    ]
    
    const StyesTail =[
        {btnNav:'bg-blue-700 px-2 py-2 rounded-lg flex items-center justify-center capitalize text-[0.7rem] text-white '}
    ]
 
    


  const FootPlatform = [
    {id:26 , title:"shared inbox",link:"/"},
    {id:27 , title:"knowledege base ",link:"/"},
    {id:28 , title:"livee chat ",link:"/"},
    {id:29 , title:"messaging",link:"/"},
    {id:30 , title:"customer management",link:"/"},
    {id:31 , title:"reporting",link:"/"},
    {id:32 , title:"integerations",link:"/"},
    {id:33 , title:"ios & android",link:"/"},
    {id:34 , title:"more features",link:"/"},
  ]  ;

  const FooterCompare =[
    {id:35, title:"help scout vs zendesk", link:"/"},
    {id:36, title:"help scout vs intercom", link:"/"},
    {id:37, title:"help scout vs front", link:"/"},
    {id:38, title:"help scout vs freshdesk", link:"/"},
    {id:39, title:"help scout vs  gorgias", link:"/"},
    {id:40, title:"help scout vs hubspot", link:"/"}, 
    {id:41, title:"help scout vs groove", link:"/"}, 
    {id:42, title:"help scout vs kayaako", link:"/"}, 

  ];


  const FooterCompany =[
    {id:43, title:"about us", link:"/"},
    {id:44 , title:"careers", link:"/"},
    {id:45, title:"dei dashboard ", link:"/"},
    {id:46, title:"help scout for good", link:"/"},
    {id:47, title:"startup program", link:"/"},
    {id:48, title:"partner program", link:"/"},
    {id:49, title:"in the works", link:"/"},
    {id:50, title:"terms & privacy", link:"/"},
    {id:51, title:"accessibility statement", link:"/"},
    {id:52, title:"do not sell", link:"/"},
  ];

  const FootGethelp =[
    {id:53, title:"developers", link:"/"} ,
    {id:54, title:"help docs ", link:"/"} ,
    {id:55, title:"free training", link:"/"} ,
    {id:56, title:"contact us", link:"/"} ,
    {id:57, title:"status", link:"/"} ,

];


interface TestimonialItem {
  id: number;
  name: string;
  designations: string;
  description: string;
  img: StaticImageData;
  companyLogo: StaticImageData;
}

const TestimonialItems: TestimonialItem[] = [
  {
    id: 1,
    name: "Brianne Henderlong",
    designations: "Director, Customer Support & Experience",
    description:
      "“Our team was able to teach themselves Help Scout in a day. It's like using a shared email inbox — just way more robust and better looking.”",
    img: imageAvatar1,
    companyLogo: CompanyLogo1,
  },
  {
    id: 2,
    name: "Kevin Yun",
    designations: "Co-Founder",
    description:
      "“Help Scout was the modern customer service software solution that was exactly what we were looking for. From the feature set to the pricing model, Help Scout has been great for us.”",
    img: imageAvatar2,
    companyLogo: CompanyLogo2,
  },
  {
    id: 3,
    name: "Carmel Granahan",
    designations: "Head of Customer Success",
    description:
      "“Help Scout has helped us reduce our workload by 50%, making our team twice as productive.”",
    img: imageAvatar3,
    companyLogo: CompanyLogo3,
  },
  {
    id: 4,
    name: "Alex Bass",
    designations: "Founder & Head of Product",
    description:
      "“I've tried every single help desk on the market (and continue to evaluate new solutions), and yet I keep finding myself coming back to Help Scout.”",
    img: imageAvatar4,
    companyLogo: CompanyLogo4,
  },
];



    
export {industryItems,featuresItems ,FootGethelp,FooterCompany,FooterCompare, FootPlatform ,inspirationItems,doItems  , StyesTail,TestimonialItems}


    