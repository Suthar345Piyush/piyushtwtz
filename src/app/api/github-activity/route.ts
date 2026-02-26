// Api route for the github api 

import { NextResponse } from "next/server";


const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_USERNAME = process.env.GITHUB_USERNAME;



const query = `

    query($username: String!){
       user(login: $username) {
         contributionsCollection {
           contributionCalendar {
             totalContributions 
              weeks {
                 contributionDays {
                   date 
                   contributionCount
                 }
              }
           }
         }
       }
    }
 `;


 // get function for data 

 export async function GET() {

    const res = await fetch("https://api.github.com/graphql" , {
       method : "POST",
       headers : {
         Authorization : `Bearer ${GITHUB_TOKEN}`,
         "Content-Type" : "application/json",
       },

       body : JSON.stringify({query , variables : {username : GITHUB_USERNAME}}),

       next : {revalidate : 3600},    // caching for 1 hour  
      
    });

    if(!res.ok) {
       return NextResponse.json({error : "Failed to fetch Github data"} , {status : 500});
    }

    const json = await res.json();

    const calender = json.data.user.contributionsCollection.contributionCalendar;

    return NextResponse.json(calender);

 }

 

