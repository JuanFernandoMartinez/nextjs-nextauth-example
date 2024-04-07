import {getServerSession} from 'next-auth'

export default async function DashboardPage(){
    const session = await getServerSession()
    const message = (session != null)? JSON.stringify(session) : "No hay sesión"
    return (<div>
        <h1>Dashboard</h1>
        <p>
            {message }
        </p>
        </div>
    )
}