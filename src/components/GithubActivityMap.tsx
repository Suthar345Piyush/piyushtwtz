// github heat map component 

'use client';

import {motion} from "framer-motion";

import React, { useState , useEffect } from "react";


// types for contribution 

interface ContributionDay {
   date : string;
   count : number;
   level : 0 | 1 | 2 | 3 | 4;
}


interface Week {
   days : ContributionDay[];
}



// month labels 

function getMonthLabels(weeks : Week[]) {
   
    const labels : {

      label : string;
      weekIndex : number

    }[] = [];

    let lastMonth = -1;

    weeks.forEach((week , wi) => {

       const firstDay = week.days[0];

       if(!firstDay) return;

       const month = new Date(firstDay.date).getMonth();

       if(month != lastMonth) {
          
           labels.push({
             label : new Date(firstDay.date).toLocaleString("default" , {
               month : "short",
             }),
             weekIndex : wi,
           });

           lastMonth = month;

       }
    });

    return labels;

}

 // color palette 

 const CELL_COLORS = [
   "bg-[#161b22] border border-[#21262d]",   // 0 (no color)
   "bg-[#0e4429] border border-[#0e4429]",    // 1 (very light color)
   "bg-[#006d32] border border-[#006d32]",   // 2 (some improved)
   "bg-[#26a641] border border-[#26a641]",    // 3 (more bright)
   "bg-[#39d353] border border-[#39d353]",   // 4 (complete bright)
 ];


 // more color , if contribution is active 
 const LEGEND_COLORS = [
   "bg-[#161b22] border border-[#21262d]",
   "bg-[#0e4429]",
   "bg-[#006d32]",
   "bg-[#26a641]",
   "bg-[#39d353]",
 ];


 // cursor on the each cell shows the number of contributions made on that day 

 function Tooltip({day , x , y} : {day : ContributionDay; x : number; y : number}) {
     
      const label = day.count === 0 ? "No Contribution" : `${day.count} contribution${day.count > 1 ? "s" : ""}`;


      return (

         <motion.div initial={{opacity : 0 , y : 4}} animate={{opacity : 1 , y : 0}} exit={{opacity: 0 , y : 4}} transition={{duration : 0.15}} style={{left : x , y : y}} className="pointer-events-none fixed z-50 -translate-x-1/2 -translate-y-full rounded-md bg-[#1c2128] px-2.5 py-1.5 text-xs text-[#e6edf3] shadow ring-1 ring-white/10">

          <span className="font-semibold text-[#39d353]">{label}</span>

          <span className="mx-1 text-[#8b9353]">·</span>

          <span className="text-[#8b949e]">
            {
              new Date(day.date + "T00:00:00").toLocaleDateString("ist-IN" , {
                 month : "short",
                 day : "numeric",
                 year : "numeric",
              })
            }
          </span>

         </motion.div>
      );
 }


 // boxes cells on heat map 

 function Cell({day , weekIndex , dayIndex , onHover , onLeave} : {
   
  day : ContributionDay;
  weekIndex : number;
  dayIndex : number;
  onHover : (day : ContributionDay , e : React.MouseEvent) => void;
  onLeave : () => void;

}) {
   

      return (

         <motion.div className={`h-2.75 w-2.75 rounded-sm cursor-pointer transition-all duration-150 ${CELL_COLORS[day.level]}`}
         initial={{opacity : 0 , scale : 0.6}} 
         animate={{opacity : 1 , scale:1}} 
         transition={{
            delay : (weekIndex * 7 + dayIndex) * 0.002,
            duration : 0.25,
            ease : "easeOut",
         }}

         whileHover={{scale : 1.4 , zIndex : 10}} onMouseEnter={(e) => onHover(day , e)}
         onMouseLeave={onLeave}

         />
      );

}



// Main activity  component 

export default function GithubActivityMap({ username = "Suthar345Piyush" , totalContributions} : {
   username? : string;  totalContributions? : number;
})  

   {
        const [weeks , setWeeks] = useState<Week[]>([]);

        const [tooltip , setTooltip] = useState<{

            day : ContributionDay;
            x : number;
            y : number;

        } | null>(null);


        const [total , setTotal] = useState(0);

        // github's graphQL api section 

      useEffect(() => {

         async function fetchData() {

             const res = await fetch("/api/github-activity");
             const calendar = await res.json();

             // according to the week[] format 

             const weeks = calendar.weeks.map((week : any) => ({
               days : week.contributionDays.map((day : any) => {
                  
                  const count = day.contributionCount;

                  const level : 0 | 1 | 2 | 3 | 4 = count === 0 ? 0 : count <= 3 ? 1 : count <= 6 ? 2 : count <= 9 ? 3 : 4;

                  return {date : day.date , count , level};

               }),
             }));


             setWeeks(weeks);
             setTotal(calendar.totalContributions);
         }

         fetchData();

      } , []);



      const monthLabels = getMonthLabels(weeks);

      const handleHover = (day : ContributionDay , e : React.MouseEvent) => { 
        
          const rect = (e.target as HTMLElement).getBoundingClientRect();

          setTooltip({
             day,
             x : rect.left + rect.width / 2,
             y : rect.top - 8,
          });
        
      };


      const DAYS = ["" , "Mon" , "" , "Wed" , "" , "Fri" , ""];


      return (
         <>

          {tooltip && (
             <Tooltip day={tooltip.day} x={tooltip.x} y={tooltip.y}/>
          )}



          <motion.div initial={{opacity : 0 , y : 20}} animate={{opacity : 1 , y :0}} transition={{duration : 0.5 , ease : "easeOut"}} className="w-full max-w-4xl rounded-2xl border border-[#21262d] bg-[#0d1117] p-6 shadow-2xl">


            <div className="mb-4 flex items-center justify-between">
              <div>

                <h2 className="font-mono text-sm font-medium tracking-widest text-[#8b949e] uppercase">
                  Github Activity
                </h2>


                <motion.p initial={{opacity : 0}} animate={{opacity : 1}} transition={{delay : 0.4}} className="mt-1 font-mono text-xs text-[#6e7681]">

                  {total.toLocaleString()} contributions in the last year

                </motion.p>
                 
              </div>

              <a href={`https://github.com/${username}`} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-1.5 rounded-lg border border-[#21262d] bg-[#161b22] px-3 py-1.5 text-xs text-[#8b949e] transition-all hover:border-[#39d353]/50 hover:text-[#39d353]">

              <svg
              viewBox="0 0 24 24"
              className="h-3.5 w-3.5 fill-current"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>

            @{username}
                 
              </a>

          </div>


          {/* graph  */}

          <div className="overflow-x-auto">
            <div className="min-w-max">

                {/* month labels  */}

                <div className="mb-1 flex pl-8">

                  {monthLabels.map(({label , weekIndex} , i) => {
                      
                        const nextWeekIndex = monthLabels[i + 1]?.weekIndex ?? weeks.length;

                        const spanWeeks = nextWeekIndex - weekIndex;

                        // each cell is 11px wide + 2px gap = 13px per column 

                        const widthPx = spanWeeks * 13;

                        return (

                            <div key={`${label}-${weekIndex}`} className="font-mono text-[10px] text-[#8b949e] overflow-hidden" style={{width : `${widthPx}px` , minWidth : `${widthPx}px`}}>

                              {label}

                              </div>

                        )


                        
                        

                  })}



                  </div>

                

               
                  


                {/* grid and day labels  */}

                <div className="flex gap-1">
                  <div className="flex flex-col justify-around pr-1">

                    {DAYS.map((d , i) => (

                      <span key={i} style={{height : "11px"}} className="font-mono text-[9px] leading-2.75 text-[#8b949e]">

                        {d}

                      </span>
                       
                    ))}

                  </div>


                  <div className="flex gap-0.5">

                    {weeks.map((week , wi) => (
                       
                         <div key={wi} className="flex flex-col gap-0.5">
                          {Array.from({length : 7}).map((_, di) => {
                             
                               const day = week.days[di];

                               if(!day) {
                                 return (
                                    <div key={di} className="h-2.75 w-2.75 rounded-sm opacity-0" />
                                 );
                               }


                               return (


                                 <Cell key={di} day={day} weekIndex={wi} dayIndex={di} onHover={handleHover} onLeave={() => setTooltip(null)}/>


                               );


                          })}

                          </div>
                    ))}

                    </div>




                </div>


                {/* legend colors  */}

                <div className="mt-3 flex items-center justify-end gap-1.5">


                  <span className="font-mono text-[10px] text-[#8b949e]">
                     Less
                  </span>

                  {LEGEND_COLORS.map((cls , i) => (

                    <div key={i} className={`h-2.75 w-2.75 rounded-sm ${cls}`}/>
                     
                  ))}

                  <span className="font-mono text-[10px] text-[#8b949e]">
                     More 
 
                  </span>


                </div>







            </div>
          </div>







             
          </motion.div>

         
         
         </>
      )

   }







