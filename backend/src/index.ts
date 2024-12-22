import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, verify } from 'hono/jwt'
import { signupInput } from '@codingprism/auracuts-commons'
import { cors } from 'hono/cors'
import { shopkeeperRouter } from './routes/shopkeeperRouter'
import { customerRouter } from './routes/customerRouter'

const app = new Hono<{
  Bindings: {
    DATABASE_URL:string;
    JWT_SECRET:string;
  }
}>()
app.use('/*', cors())

app.get("/",async(c)=>{
   return c.json({
    success:true,
    message:"salo home route hi not found hai ye to bna lete pehle "
   })
})
app.route("/customer",customerRouter)
app.route('/shopkeeper',shopkeeperRouter)


export default app
