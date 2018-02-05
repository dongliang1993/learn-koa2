const Koa = require('koa')
const fs = require('fs')
const app = new Koa()

const Router = require('koa-router')
const router = new Router()


// 子路由1
router.get('/', async ( ctx )=>{
  let html = `
    <ul>
      <li><a href="/page/helloworld">/page/helloworld</a></li>
      <li><a href="/page/404">/page/404</a></li>
    </ul>
  `
  ctx.body = html
})

// 加载路由中间件
app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => {
  console.log('server is listenning')
})