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
      const value = oauth.accessToken.create(result)
      return res.redirect(`/load_token?token=${value.token.access_token}`)
    },
    (error) => {
      return res.status(500).json(error.message)
    }
  )
}

export default {
  auth,
  callback
}
