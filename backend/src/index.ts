import { Hono } from 'hono'
import {customerRouter} from './routes/customerRouter'
import { shopkeeperRouter } from './routes/shopkeeperRouter';
import {cors} from 'hono/cors'

const app = new Hono<{
  Bindings:{
    DATABASE_URL:string;
    JWT_SECRET:string
  }
}>()

app.use('/*',cors()) 
app.route("/customer",customerRouter)
app.route('/shopkeeper',shopkeeperRouter)



export default app