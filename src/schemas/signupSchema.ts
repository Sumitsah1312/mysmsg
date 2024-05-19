import {z} from "zod"
export const usernameValidation=z
.string()
.min(2,"Username must have atleast 2 Characters")
.max(20,"Username must have atmost 20 Characters")
.regex(/[a-zA-Z0-9]+$/,"Username must not contain Special Characters")

export const signUpSchema=z.object({
    username:usernameValidation,
    email:z.string().email({message:"Invalid Email Validation"}),
    password:z.string().min(6,{message:"Password must be atleast 6 Characters"})

})