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


// postgres://avnadmin:AVNS_3XhaiNtzeY4kmIGYTEh@pg-3c3813af-pg-e787.c.aivencloud.com:13780/defaultdb?sslmode=require

// DATABASE_URL="prisma://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiZjMwYjFjYzQtYjUyYS00ODE4LTlhYmMtYWZhMjkyMjA1MGRmIiwidGVuYW50X2lkIjoiZmU4Yjc3OTdhZjA1MjQ1OWJlM2Y1YzU0ZDczM2JlMDUyZmU5YTY2YjU5NzZmOTc3MmIxNDk3YjI2ZjM5MjI5YSIsImludGVybmFsX3NlY3JldCI6IjE2MDI1OTI4LWNiYjctNGU5ZS04YWM0LTcwNDIyYzFkYjg4MiJ9.adFlV9KHlVsadXkk9PFb2rPkDQcD2xBB_yBEZKg4vus"
