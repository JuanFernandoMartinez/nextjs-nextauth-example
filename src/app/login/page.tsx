"use client"
import {signIn} from 'next-auth/react'


export default function LoginPage(){
    return (
        <div className="flex justify-center items-center h-screen">
            <div>
            <h1 className="text-5xl text-center my-3">Login</h1>
            <button
            className="bg-blue-600 text-white p-4 rounded-full hover:bg-white hover:text-blue-600 border-blue-600 border-2"
            onClick={async ()=>{
                const result = await signIn("google", {redirect:false, callbackUrl:"/dashboard"})
                console.log(result)
            }}
            >Login with google</button>
            </div>
        </div>
    )
}