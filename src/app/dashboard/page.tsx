import {getServerSession} from 'next-auth'

export default async function DashboardPage(){
    const session = await getServerSession()
    return (<div>
        <h1>{session?.user?.name}</h1>
        <h3>{session?.user?.email}</h3>
        <img src={session?.user?.image ?? ''} alt="user's image" />
        </div>
    )
}