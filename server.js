const jsonServer = require("json-server");
const server = jsonServer.create();

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

const router = jsonServer.router("db_mock_data.json");
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);

server.listen(port);
