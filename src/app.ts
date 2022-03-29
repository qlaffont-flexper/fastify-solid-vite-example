import Fastify from 'fastify'
import FastifyVite from 'fastify-vite'
import FastifyViteSolid from 'fastify-vite-solid'

async function main () {
  const app = Fastify()
  await app.register(FastifyVite, {
    root: __dirname,
    renderer: FastifyViteSolid,
  })
  //@ts-ignore
  await app.vite.commands()
  return app
}

if (require.main === module) {
  main().then((app) => {
    app.listen(3000, (err, address) => {
      if (err) {
        console.error(err)
        process.exit(1)
      }
      console.log(`Server listening on ${address}`)
    })
  })
}

module.exports = main
