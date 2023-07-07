import 'reflect-metadata'

import App from '@application/App'
import { container } from '@config/container'
import config from '@config/Config'

const app: App = container.resolve(App)

app.start(config.PORT)
