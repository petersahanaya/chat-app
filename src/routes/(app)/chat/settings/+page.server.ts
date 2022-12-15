import type { Actions } from "@sveltejs/kit";

export const action : Actions = {
    upload : async ({request}) => {
        console.log(request)
        const formData = await request.formData()
        console.log("formdata", formData)
    }
}