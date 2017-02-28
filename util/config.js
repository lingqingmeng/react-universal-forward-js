const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 8080;

export default {
  serverUrl: `http://${host}:${port}`
}
