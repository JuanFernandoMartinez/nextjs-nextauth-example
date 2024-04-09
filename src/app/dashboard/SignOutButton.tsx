"use client"

import {signOut} from 'next-auth/react'

export default function SignOutButton(){
    return <button
    className='hover:bg-red-700 rounded-full bg-red-500 text-white font-bold py-2 px-4 ' 
    onClick={()=>{signOut()}}>Cerrar sesión
    </button>
}