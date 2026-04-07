// project data here 

import { Project } from "@/types";
import gifhubimage from "../../public/images/gifhub.png";
import invoiceflowimage from "../../public/images/invoiceflowimage.jpg";
import colliderimage from "../../public/images/colliderimage.png";
import taskifyimage from "../../public/images/taskifyimage.png";
import ezyqimage from "../../public/images/ezyqimage.png";
import securechatimage from "../../public/images/securechatimage.png";

export const projects : Project[] = [

   {
     id : 1,
     title : "Invoiceflow",
     description : "professional invoices service for freelancers and small businesses",
     tech : ["nextjs" , "typescript" , "supabase" , "pdfshift" , "tailwindcss", "zustand", "zod", "resend", "lucide-icons", "oauth"],
     github : "https://github.com/Suthar345Piyush/invoiceflow",
     image : invoiceflowimage,
     live : "https://invoiceflow.co.in/",
     date : "2026"
   },


   {
    id : 2,
    title : "Taskify",
    description : "a todo mobile app",
    tech : ["react native" , "typescript" ,  "expo" , "convex" , "sentry" , "vanilla css"],
    github : "https://github.com/Suthar345Piyush/Taskify",
    image : taskifyimage,
    date : "2025"
  },

  {
    id : 3,
    title : "ezyQ",
    description : "a queue management mobile app built for user's & business's to manage queue's efficiently",
    tech : ["react native" , "expo" , "react navigation" , "tamagui" , "typescript" , "expo-sqlite" , "zod" , "zustand"],
    github : "https://github.com/Suthar345Piyush/ezyQ",
    image : ezyqimage,
    date : "2026"
  },




  {
    id : 4,
    title : "Gifhub",
    description : "a frontend gif's website built using giphy api",
    tech : ["reactjs" , "javascript" , "react-router-dom" , "tailwindcss" , "giphy api"],
    github : "https://github.com/Suthar345Piyush/GIFHub-Gifs-App",
    image : gifhubimage,
    live : "https://gif-hub-gifs-app.vercel.app/",
    date : "2024"
  },


  {
    id : 5,
    title : "collider",
    description : "a fun physics project , where you can make collisions b/w particles and study their related metrics , developed for physics geeks",
    tech : ["reactjs" , "typescript" , "tailwindcss" , "recharts" , "canvasapi"],
    github : "https://github.com/Suthar345Piyush/collider",
    image : colliderimage,
    live : "https://collider-app.vercel.app/",
    date : "2026"
  },


  {
    id : 6,
    title : "secureChat",
    description : "a very secure chat app with room time limit of 10 mins , room will automatically closed after 10 mins and all chat are permanently deleted from database",
    tech : ["nextjs16" , "typescript" , "upstash realtime" , "redis" , "tanstackquery" , "zod" , "elysiajs" , "tailwindcss"],
    github : "https://github.com/Suthar345Piyush/secure_chat",
    image : securechatimage,
    live : "https://securechat-blue.vercel.app/",
    date : "2025"
  },

];
