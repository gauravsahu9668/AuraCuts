import z from "zod";
export declare const customerSignupInput: z.ZodObject<{
    firstName: z.ZodString;
    lastName: z.ZodOptional<z.ZodString>;
    username: z.ZodString;
    password: z.ZodString;
    phoneNumber: z.ZodString;
}, "strip", z.ZodTypeAny, {
    firstName: string;
    username: string;
    password: string;
    phoneNumber: string;
    lastName?: string | undefined;
}, {
    firstName: string;
    username: string;
    password: string;
    phoneNumber: string;
    lastName?: string | undefined;
}>;
export declare const signinInput: z.ZodObject<{
    username: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    username: string;
    password: string;
}, {
    username: string;
    password: string;
}>;
export type CustomerSignupInput = z.infer<typeof customerSignupInput>;
export type SigninInput = z.infer<typeof signinInput>;
