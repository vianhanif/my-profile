import credentials from './oauth.credentials';

const oauth = require('simple-oauth2').create(credentials)
const authorizationUri = oauth.authorizationCode.authorizeURL({
  redirect_url: `${process.env.APPLICATION_BASE_URL}/api/oauth/callback`,
  scope: 'repo, user',
  state: '3(#0/!~'
})

export const auth = (req, res) => {
  res.redirect(authorizationUri)
}

export const callback = (req, res) => {
  const code = req.query.code
  const options = {
    code
  }
  oauth.authorizationCode.getToken(options).then(
    (result) => {
      console.log('token : ', result)
      const token = oauth.accessToken.create(result)
      return res.status(200).json(token)
    },
    (error) => {
      console.error('error access token', error.message)
      return res.status(500).json('Authentication failed')
    }
  )
}

export default {
  auth,
  callback
}
