import express from 'express'

const app = express();

app.get('/github', (req, res) => {
  res.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`);
})

app.listen(3000, () => {
  console.log('App running')
})