export interface BasicformationType {

   ProgressbarFlag: number;
   firstName: string;
   LastName: string;
   Age: number;
   email: string;
   gender: string;
   Required: string;
   enableTab:boolean
}


export interface EmployeeInformationType {
   ProgressbarFlag: number;
   companyName: string;
   PhoneNumber: number;
   EmergencyContact: number;
   pastRole: string;
   Learninginstitution: string
   enableTab:boolean
 

}

export interface addressInfo {
   Address: string;
   Address2: string;
   Country: string,
   State: string,
   city: string;
   enableTab:boolean
   

}

export interface generalInformationType {

   Language: {
      map(arg0: (value: string) => JSX.Element): import("react").ReactNode;
      java: string;
      Python: string;
      c: string;
      JavaScript: string;
    
   }
   frameworks: {
      map(arg0: (value: string) => JSX.Element): import("react").ReactNode;
      React: string;
      Nextjs: string;
      VueJs: string;
      AngularJs: string;
     
   }
   hobbies: {
      map(arg0: (value: string) => JSX.Element): import("react").ReactNode;
      Gym: string;
      FootBall: string;
      Coding: string;
      Tennis: string;
      TableTennis: string
    
   }
   enableTab:boolean

}

export interface experienceTypes {
   currentUserData: any;
   Projects: string;
   liveProjects: {
      Yes: string;
      NO: string
   }
   experience: string;
   enableTab:boolean
 
}




export interface currentUserData {
   currentUserData: {
      Step_1: {
         firstName: string;
         LastName: string;
         Age: number;
         email: string;
         gender: string;
         Required: string;
       
      }
      Step_2: {
         companyName: string;
         PhoneNumber: number;
         EmergencyContact: number;
         pastRole: string;
         Learninginstitution: string;
      
         
      }
      Step_3: {
         Address: string;
         Address2: string;
         Country: string;
         State: string;
         city: string
        
      }
      Step_4: {
         Language: generalInformationType[];
         frameworks: generalInformationType[];
         hobbies: generalInformationType[];
       
      }

      Step_5: {
         Projects: string;
         liveProjects: string[]
         experience: string
         
      }
   }
}

export interface RootState {
   currentUserData: {
      Step_1: BasicformationType;
      Step_2: EmployeeInformationType;
      Step_3: addressInfo;
      Step_4: generalInformationType;
      Step_5: experienceTypes;
      
   }
}




export type actionState = EmployeeInformationType | BasicformationType | addressInfo | generalInformationType | experienceTypes | boolean