const netlify = 'netlify.app'
const localhost = 'http://localhost:3000'

const isDev = true

export const domain = isDev ? localhost : netlify
