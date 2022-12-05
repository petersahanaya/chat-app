import { invalid, redirect } from "@sveltejs/kit";
import type { Actions } from "@sveltejs/kit";
import { User } from "$lib/models/index";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "$env/static/private";
import bcrypt from 'bcrypt'
import JWT from 'jsonwebtoken'
import type { UserProps } from "$lib/stores/auth";

export const actions : Actions = {
    login : async ({request, cookies}) => {
        const formData = Object.fromEntries(await request.formData())
        const { username, password } = (formData as {username : string, password : string})

        if(!(username && password)) return invalid(401, {msg : "Username & Password are Required..."})

        const find : Awaited<Promise<UserProps> | any> = await User.findOne({where : {username}})

        if(!find) return invalid(401, {msg : "Incorrect password.."})

        const match = await bcrypt.compare(password, find.password)

        if(!match) return invalid(401, {msg : "incorrect password.."})

        const accessToken = JWT.sign({username, id : find.id!}, ACCESS_TOKEN!, {expiresIn : "15m"})

        const refreshToken = JWT.sign({username, id : find.id!}, REFRESH_TOKEN!, {expiresIn : "30d"})

        cookies.set('token', accessToken, {path : "/"})

        await User.update(find, {where : {token : refreshToken}})

        throw redirect(301, "/")
    }
}