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

app.use('/*', cors({
  origin: 'http://localhost:5173',
  allowMethods: ['POST', 'GET', 'OPTIONS'], 
  allowHeaders: ['Content-Type', 'Authorization'],
}))


app.route("/customer",customerRouter)
app.route('/shopkeeper',shopkeeperRouter)


export default app
