import { loginInput, signupInput } from "@codingprism/auracuts-commons";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { sign } from "hono/jwt";

export const shopkeeperRouter = new Hono<{
    Bindings:{
      DATABASE_URL:string;
      JWT_SECRET:string
    }
  }>()
  shopkeeperRouter.use('/*', cors({
    origin: 'http://localhost:5173', 
    allowMethods: ['POST', 'GET', 'OPTIONS'],
    allowHeaders: ['Content-Type', 'Authorization'],
  }))
  
  

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
      return c.json({ token: jwt, message: 'Signup successful!' });
      
    } catch (error) {
        c.status(409); // 409 Conflict
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
      
          return c.json({ token: jwt, message: 'Login successful!' });
      }
      catch(e){
        c.status(411)
        return c.text('Invalid')
      }
    })