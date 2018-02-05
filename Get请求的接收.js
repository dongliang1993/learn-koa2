const Koa = require('koa')

const app = new Koa()

app.use(async (ctx, next) => {
  const url = ctx.url
  const request = ctx.request
  const req_query = request.query
  const req_querystring = request.querystring

  //从上下文中直接获取
  const ctx_query = ctx.query;
  const ctx_querystring = ctx.querystring;
  ctx.body = {
    url,
    request,
    req_query,
    req_querystring,
    ctx_query,
    ctx_querystring
  }
})

app.listen(8989, () => {
  console.log('server is listenning')
})