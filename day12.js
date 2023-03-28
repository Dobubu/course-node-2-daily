// 設計當使用者造訪以下頁面（GET）時的路由， response 可先回傳一段簡單的文字即可

app.get('/login', (req, res) => {
  res.send('歡迎來到登入頁')
})

app.get('/register', (req, res) => {
  res.send('歡迎來到註冊頁')
})

app.get('/posts', (req, res) => {
  res.send('歡迎來到全體動態牆')
})

app.get('/user/:id', (req, res) => {
  const id = req.params.id

  res.send(`${id} 個人頁面`)
})

app.get('/user/:id/following', (req, res) => {
  const id = req.params.id
  
  res.send(`${id} 個人追蹤名單`)
})