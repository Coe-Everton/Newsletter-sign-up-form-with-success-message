import { useContext } from "react"
import { useNavigate } from "react-router-dom";
import { Context } from "../Context/Context.tsx"

export default function Home(){
  const { Regex, takeEmail, Email} = useContext<any>(Context)
  const navigate = useNavigate();

  const changePath = (e:string) => {
    if(Email){return navigate(e);}
    alert("Enter an Email")
  }

  return (
  <main className="bg-DarkSlateGrey place-self-center">
      <div className="bg-White flex rounded-3xl p-5">
        <div className="w-96 mx-12 place-self-center">
          <header className="my-8">
            <h1 className="text-5xl font-bold mb-5">Stay updated!</h1>
            <p>Join 60,000+ product managers receiving monthly updates on:</p>
          </header>
        <ul>
          <li className="flex">
            <img src="/icon-list.svg" alt="" />
            <p className="mx-3">Product discovery and building what matters</p>
          </li>
          <li className="flex my-3">
            <img src="/icon-list.svg" alt="" />
            <p className="mx-4">Measuring to ensure updates are a success</p>
          </li>
          <li className="flex">
            <img src="/icon-list.svg" alt="" />
            <p className="mx-4">And much more!</p>
          </li>
        </ul>
        <div className="my-8">
          <form className="grid w-96 my-5">
            <div className="flex justify-between">
            <label className="text-xs font-bold mb-1">Email address</label>
            {
              Regex == false ? 
              <label className="text-xs font-bold mb-1 text-Tomato">Valid email required</label>
              :
              null 
            }
            </div>
            {
              Regex == false ? 
              <input className="p-2 border-solid border-2 border-Tomato bg-Tomato text-Tomato bg-opacity-20 rounded-lg" type="text" 
              onChange={takeEmail}/> 
              :
              <input className="p-2 border-solid border-2 rounded-lg border-DarkSlateGrey border-opacity-20" type="text"
              placeholder="email@company.com"
              onChange={takeEmail}/> 
            }
          </form>
            <button 
            className="bg-CharcoalGrey w-96 py-3 rounded-lg text-White" 
            onClick={() => {changePath('/subscribing')}}
            >Subscribe to monthly newsletter</button>
        </div>
        </div>
        <div className="flex">
          <img src="/illustration-sign-up-desktop.svg" alt="" />
        </div>
    </div>
  </main>
  )
  }

