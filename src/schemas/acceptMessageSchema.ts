import {z} from "zod"

export const acceptMessageSchema=z.object({
    acceptMeessage:z.boolean(),
})