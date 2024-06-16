const App = require("./app");

const routerConf = require("./routes");
const app = new App();
async function setup() {
  await app.init(routerConf);
  const server = app.getServer();
  server.get("/", (req, res) => {
    res.send("Hello World");
  });
  server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
  });
}
setup();
