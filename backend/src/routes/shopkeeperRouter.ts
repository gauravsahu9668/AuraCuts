import { loginInput, signupInput } from "@codingprism/auracuts-commons";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { sign } from "hono/jwt";
import axios from "axios";
export const shopkeeperRouter = new Hono<{
    Bindings:{
      DATABASE_URL:string;
      JWT_SECRET:string
    }
  }>()
  shopkeeperRouter.post('/signup', async (c) => {
    const body=await c.req.json();
    const {success} = signupInput.safeParse(body);
    if(!success){
      c.status(400);
      return c.json({
        message: "Inputs are Invalid"
      })
    }
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    try {
      const shopkeeper=await prisma.shopkeeper.create({
        data: {
          email: body.email,
          firstName: body.firstName,
          lastName: body.lastName,
          phoneNumber: body.phone,
          password: body.password
        }
      })
      const jwt=await sign({
        id:shopkeeper.id,
      },c.env.JWT_SECRET);
      await axios({
        url:"https://testimonialexpress1.vercel.app/send-email",
        method:"POST",
        data:{
          email:body.email,
          title:"use this otp to signup on Auracuts",
          html:`<h1>Sign up successfully</h1>`
        }
      })
      return c.json({ token: jwt, message: 'Signup successful!',userId:shopkeeper.id });
    } catch (error) {
        c.status(409);
        console.log(error);
        return c.json({ message: 'User already exists with this email.' });
    }
  })
  shopkeeperRouter.post('/login',async (c) => {
      const body=await c.req.json();
      const {success}=loginInput.safeParse(body);
      if((!success)){
        c.status(411)
        return c.json({
          message: "Input are Incorrect"
        })
      }
      const prisma=new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate())
      
      try{
        const user=await prisma.shopkeeper.findFirst({
          where:{
            email:body.email,
            password:body.password       
          }
        })
        if(!user){
          c.status(403)
          return c.text('Incorrect Credentials')
        }
        const jwt = await sign({
            id: user.id,
          }, c.env.JWT_SECRET);
      
          return c.json({ token: jwt, message: 'Login successful!',userId:user.id,user:"shopkeeper" });
      }
      catch(e){
        c.status(403)
        return c.text('you are not Logged in')
      }
    })
 shopkeeperRouter.post('/send-otp',async(c)=>{
    try{
      const body=await c.req.json();
      const otp = Math.random().toString().slice(2, 8); // Generates a 6-digit OTP
      await axios({
        url:"https://testimonialexpress1.vercel.app/send-email",
        method:"POST",
        data:{
          email:body.email,
          title:"use this otp to signup on Auracuts",
          html:`<h1>Otp: ${otp}</h1>`
        }
      })
      return c.json({
        success:true,otp,message:" otp send successfully"
      })
    }catch(e:any){
      return c.json({
        success:false,
        message:"otp not send",
        data:e.message
      })
    }
 })