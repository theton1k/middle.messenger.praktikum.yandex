const netlify = 'mellifluous-dieffenbachia-054d33.netlify.app'
const localhost = 'http://localhost:3000'

const isDev = false

export const domain = isDev ? localhost : netlify
