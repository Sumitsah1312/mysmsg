import {z} from "zod"

export const messageSchema=z.object({
    content:z.string().min(10,{message:"Content Must be of 10 Characters"}).max(10,{message:"Content Must be less than 300 Characters"})
})