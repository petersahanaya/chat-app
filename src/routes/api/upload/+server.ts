import type { RequestHandler } from "@sveltejs/kit";
import { User } from "$lib/models/index";
import JWT from 'jsonwebtoken'
import { REFRESH_TOKEN,  ACCESS_TOKEN} from "$env/static/private";

export const POST : RequestHandler = async ({request, cookies}) => {
    const body = await request.json();
    console.log(body)

    if(body) {
           await User.update({image : body.url}, {where : { username : body.username }})
            const user : any = await User.findOne({where : {username : body.username}})

           const accessToken = JWT.sign({username : user.username, id : user.id, email : user.email, image : user.image, userId : user.userId}, ACCESS_TOKEN, {expiresIn : '15m'})

           const refreshToken = JWT.sign({username : user.username, id : user.id, email : user.email, image : user.image, userId : user.userId}, REFRESH_TOKEN, {expiresIn : '15m'})

            cookies.set('token', accessToken, {path : "/", httpOnly : true, expires : new Date(Date.now() + 1000 * 60 * 15)})

            cookies.set('refreshToken', refreshToken, {path : "/", httpOnly : true, expires : new Date(Date.now() + 1000 * 60 * 60 * 24 * 30)})

            return new Response(JSON.stringify("You profile is updated.."), {status : 200})
    }
}