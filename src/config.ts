const netlify = 'netlify.app'
const localhost = 'http://localhost:3000'

const isDev = false

export const domain = isDev ? localhost : netlify
