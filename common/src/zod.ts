import z from "zod";

export const signupInput = z.object({
    email: z.string().email(),
    password: z.string().min(8),
    firstName: z.string().optional(),
    lastName: z.string().optional(),
    phone: z.string(),
})


export type SignupInput =z.infer<typeof signupInput>


export const loginInput = z.object({
    email: z.string().email(),
    password: z.string().min(8),
})


export type LoginInput =z.infer<typeof loginInput>
