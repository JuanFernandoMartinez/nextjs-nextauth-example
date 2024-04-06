import {getServerSession} from 'next-auth'

export default async function DashboardPage(){
    const session = await getServerSession()
    console.log(session)
    return (
        <h1>Dashboard</h1>
    )
}