import {getServerSession} from 'next-auth'
import SignOutButton from './SignOutButton'
export default async function DashboardPage(){
    const session = await getServerSession()
    return (<div className='flex justify-center items-center h-screen'>
        <div className='bg-slate-300 p-10 text-center rounded-lg'>
        <h1 className='text-lg font-bold'>Bienvenido {session?.user?.name }</h1>
        <p>{session?.user?.email }</p>
        <img src={session?.user?.image ?? 'https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png'} alt="user's image"
            className='rounded-full m-auto my-3'
        />
        <SignOutButton></SignOutButton>
        </div>
        </div>
    )
}