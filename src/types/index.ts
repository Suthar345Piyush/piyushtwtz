// project types 
export interface Project {
    id : number;
    title : string;
    description : string;
    tech : string[];
    github? : string;
    live? : string;
    image? : string;
    date : string;
};


// education types 

export interface Education {
    id : number;
    institution : string;
    degree : string;
    field : string;
    startDate : string;
    endDate : string;
    status? : string;
}


// types for work experience

export interface WorkExperience {
   id : number;
   company : string;
   position : string;
   type : string;
   startDate : string;
   endDate : string;
   logo? : string;
};




