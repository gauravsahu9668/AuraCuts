import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import {decode,sign,verify} from 'hono/jwt'
import { loginInput, signupInput } from "@codingprism/auracuts-commons";
import axios from "axios";
export const customerRouter = new Hono<{
  Bindings:{
    DATABASE_URL:string;
    JWT_SECRET:string
  }
}>()
customerRouter.post('/signup',async (c) => {
    const body=await c.req.json();
    const {success}=signupInput.safeParse(body);
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
      const customer=await prisma.customer.create({
        data:{
          firstName:body.firstName,
          lastName:body.lastName,
          email:body.email,
          password:body.password,
          phoneNumber:body.phone
        }
      })
      const jwt=await sign({
        id:customer.id,  
      },c.env.JWT_SECRET);
      return c.json({ token: jwt, message: 'Signup successful!',userId:customer.id })
    }
    catch(e){
      c.status(411)
      return c.text('Invalid')
    }
  })
  customerRouter.post('/login',async (c) => {
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
      const user=await prisma.customer.findFirst({
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
      await axios({
        url:"https://testimonialexpress1.vercel.app/send-email",
        method:"POST",
        data:{
          email:body.email,
          title:"use this otp to signup on Auracuts",
          html:`<h1>Sign up successfully</h1>`
        }
      })
      return c.json({ token: jwt, message: 'Login successful!',userId:user.id,user:"customer" });
    }
    catch(e){
      c.status(403)
      return c.text('you are not Logged in')
    }
  })