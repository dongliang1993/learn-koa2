const Koa = require('koa')
const fs = require('fs')

const app = new Koa()

const render = (page) => {
  return new Promise((resolve, reject) => {
    fs.readFile(page, 'binary', (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

const route = async (url) => {
  let page
  switch (url) {
    case '/':
    case '/index':
      page = `./page/index.html`
      break
    case '/todo':
      page = `./page/todo.html`
    default:
      page = `./page/404.html`
  }
  const html = await render(page)
  return html
}

app.use(async (ctx) => {
  const url = ctx.url
  const html = await route(url)
  console.log(html)
  ctx.body = html
})

app.listen(3000, () => {
  console.log('server is starting!')
})