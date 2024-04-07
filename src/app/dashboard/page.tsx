import {getServerSession} from 'next-auth'
import SignOutButton from './SignOutButton'
export default async function DashboardPage(){
    const session = await getServerSession()
    return (<div className='flex justify-center items-center h-screen'>
        <div className='bg-slate-300 p-10 text-center'>
        <h1>Bienvenido {session?.user?.name}</h1>
        <p>{session?.user?.email}</p>
        <img src={session?.user?.image ?? ''} alt="user's image" />
        <SignOutButton></SignOutButton>
        </div>
        </div>
    )
}