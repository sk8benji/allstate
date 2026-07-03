const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const fs = require('fs');
const path = require('path');

// Manually load .env.local on startup using pure Node.js to avoid module resolution issues
try {
  const envPath = path.join(__dirname, '.env.local');
  if (fs.existsSync(envPath)) {
    const envConfig = fs.readFileSync(envPath, 'utf8');
    envConfig.split(/\r?\n/).forEach(line => {
      const trimmed = line.trim();
      if (trimmed && !trimmed.startsWith('#')) {
        const firstEquals = trimmed.indexOf('=');
        if (firstEquals !== -1) {
          const key = trimmed.substring(0, firstEquals).trim();
          const value = trimmed.substring(firstEquals + 1).trim();
          const cleanValue = value.replace(/^['"]|['"]$/g, '');
          if (!process.env[key]) {
            process.env[key] = cleanValue;
          }
        }
      }
    });
  }
} catch (err) {
  console.error('Error loading .env.local manually:', err);
}

const dev = process.env.NODE_ENV !== 'production';
const hostname = 'localhost';
const port = process.env.PORT || 3000;

// Initialize the Next.js app
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true);
      await handle(req, res, parsedUrl);
    } catch (err) {
      console.error('Error occurred handling', req.url, err);
      res.statusCode = 500;
      res.end('internal server error');
    }
  }).once('error', (err) => {
    console.error(err);
    process.exit(1);
  }).listen(port, () => {
    console.log(`> Ready on port ${port}`);
  });
});
