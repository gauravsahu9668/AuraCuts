import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import {decode,sign,verify} from 'hono/jwt'
import {customerSignupInput,signinInput} from '@govinda03/auracuts-common';

export const customerRouter = new Hono<{
  Bindings:{
    DATABASE_URL:string;
    JWT_SECRET:string
  }
}>()

customerRouter.post('/signup',async (c) => {
    const body=await c.req.json();
    const {success}=customerSignupInput.safeParse(body);
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
      await prisma.customer.create({
        data:{
          firstName:body.firstName,
          lastName:body.lastName,
          username:body.username,
          password:body.password,
          phoneNumber:body.phoneNumber
        }
      })
      const jwt=await sign({
        id:body.id,  
      },c.env.JWT_SECRET);
      return c.text(jwt)
    }
    catch(e){
      c.status(411)
      return c.text('Invalid')
    }
  })
  
  customerRouter.post('/login',async (c) => {
    const body=await c.req.json();
    const {success}=signinInput.safeParse(body);
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
          username:body.username,
          password:body.password       
        }
      })
      if(!user){
        c.status(403)
        return c.text('Incorrect Credentials')
      }
      return c.text('Hello Hono!')
    }
    catch(e){
      c.status(411)
      return c.text('Invalid')
    }
  })