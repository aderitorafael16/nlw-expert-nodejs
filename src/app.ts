import fastify from 'fastify'
import cookie from '@fastify/cookie'

import { createPoll } from './http/routes/create-poll'
import { getPoll } from './http/routes/get-poll'
import { voteOnPoll } from './http/routes/vote-on-poll'

export const app = fastify({
  logger: true,
})

app.register(cookie, {
  secret: 'polls-app-nlw',
  hook: 'onRequest',
})

app.register(getPoll)
app.register(createPoll)
app.register(voteOnPoll)
