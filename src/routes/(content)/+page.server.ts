import { redirect, type ServerLoad } from "@sveltejs/kit";
import { ACCESS_TOKEN } from "$env/static/private";
import JWT from 'jsonwebtoken'

export const load : ServerLoad = async ({cookies}) => {
    const token = cookies.get('token')

    if(!token) throw redirect(300, '/auth/register')

    let user : any ;

    JWT.verify(token , ACCESS_TOKEN, (err, decoded) => {
        if(err) throw redirect(301, '/auth/register')

        if(decoded) return user = decoded
    })

    return {
        user
    }
}