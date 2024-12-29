import { createContext, ReactNode, useState } from "react";

interface ProviderProps {
   children: ReactNode;
}

interface ContextType {
   setEmail: (arg: any) => any;
   Email: (arg: any) => any;
   Regex: (arg:any) => any;
   setRegex: (arg:any) => any;
   regex: any;
   takeEmail: (arg:any) => any;
}


export const Context = createContext<ContextType | undefined>(undefined);

export const ContextProvider =({children}: ProviderProps) => {
   const [Email, setEmail]:any = useState(``);
   const [Regex, setRegex]:any= useState();
   const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

   const takeEmail = (e:any) => {
   setEmail(e.target.value)
   checkEmail(Email)
   }

   const checkEmail = (e:string) => {
   return setRegex(regex.test(e))
   }

    return(
       <Context.Provider value={{ setEmail, Email, Regex, setRegex, regex, takeEmail }}>
          {children}
       </Context.Provider>
    )
 }