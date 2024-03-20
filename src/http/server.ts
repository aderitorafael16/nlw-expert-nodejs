import { app } from '@/app'
import { env } from '@/lib/env'

app
  .listen({
    port: env.PORT,
    host: '0.0.0.0',
  })
  .then(() => {
    console.log(`🚀 SERVER IS RUNNING ON PORT ${env.PORT}`)
  })
