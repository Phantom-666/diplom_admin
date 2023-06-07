import { resolve } from 'path'

const PORT = 80
const rootPath = resolve(__dirname, '..')
const pagesPath = resolve(rootPath, 'pages')

export { PORT, rootPath, pagesPath }
