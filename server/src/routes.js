export default function (app) {
  app.get('/', (req, res) => res.json({ msg: 'Hello Artifakt :)' }))

  // No route match
  app.use((req, res) => {
    return res.status(404).json({
      error: 'URLNotFound',
      msg: 'URL not found'
    })
  })
}
