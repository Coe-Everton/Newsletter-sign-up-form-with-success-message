import { useContext } from "react"
import { Context } from "../Context/Context"
import { useNavigate } from "react-router-dom"

export default function Subscribing(){
    const { Email, setEmail } = useContext<any>(Context)
    const navigate = useNavigate();

    const changePath = (e:string) => {
        navigate(e);
      }

    const resetWebSite = (e:string) => {
        setEmail(undefined)
        alert("Thanks very much")
        changePath(e)
     }

    return(
        <main className="w-6/12 place-self-center">
        <div className="bg-White p-16 rounded-2xl">
            <img src="/icon-success.svg" className="mb-8"/>
            <h1 className="text-5xl font-bold">Thanks for subscribing!</h1>
            <p className="py-8">A confirmation email has been sent to <strong>{Email}</strong>. Please open it and click the button inside to confirm your subscription</p>
            <button className="bg-CharcoalGrey w-full py-3 rounded-lg text-White"
            onClick={() => {resetWebSite('/')}}
            >Dismiss message</button>
        </div>
        </main>
    )

}