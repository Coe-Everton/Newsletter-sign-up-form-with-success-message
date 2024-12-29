import { createContext, useState } from "react";
export const Context = createContext();

export const ContextProvider =({children}) => {
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