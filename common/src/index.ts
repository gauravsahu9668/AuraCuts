import z from "zod";

export const customerSignupInput=z.object({
    firstName: z.string(),
    lastName: z.string().optional(),
    username: z.string().email(),
    password: z.string().min(8),
    phoneNumber: z.string().length(10)
})

export const signinInput=z.object({
    username: z.string().email(),
    password: z.string().min(8)
})

export type CustomerSignupInput=z.infer<typeof customerSignupInput>
export type SigninInput=z.infer<typeof signinInput>