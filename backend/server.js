const jsonServer = require("json-server");
const cors = require("cors");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

const PORT = process.env.PORT || 3000;

// Allow CORS for all origins (for testing)
server.use(cors());

// Or allow only your frontend domain:
// server.use(cors({ origin: "https://your-frontend.netlify.app" }));

server.use(middlewares);
server.use(router);

server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
