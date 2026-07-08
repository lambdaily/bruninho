import express from 'express'
import { execFile } from 'node:child_process'
import { promisify } from 'node:util'

const execFileAsync = promisify(execFile)
const app = express()
const port = process.env.PORT || 3000
const collectionPath = process.env.COLLECTION_PATH || '/collections'

app.get('/health', (_req, res) => {
  res.json({ ok: true })
})

app.post('/run', async (req, res) => {
  const args = ['run', collectionPath]
  if (process.env.BRUNO_ENV) {
    args.push('--env', process.env.BRUNO_ENV)
  }

  try {
    const { stdout, stderr } = await execFileAsync('bru', args, {
      timeout: Number(process.env.BRUNO_TIMEOUT_MS || 120000),
      maxBuffer: 10 * 1024 * 1024,
    })

    res.json({ ok: true, stdout, stderr })
  } catch (error) {
    res.status(500).json({
      ok: false,
      code: error.code,
      stdout: error.stdout,
      stderr: error.stderr,
      message: error.message,
    })
  }
})

app.listen(port, () => {
  console.log(`Bruno runner listening on ${port}`)
})
