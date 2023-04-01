const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const db = require("./utils/database");
const userRoutes = require("./routes/user.routes");
const productRoutes = require("./routes/product.routes");
const cartRoutes = require("./routes/cart.routes");
const orderRoutes = require("./routes/order.routes");
const productInOrderRoutes = require("./routes/productInOrder.routes");
const authRoutes = require("./routes/auth.routes");
const errorHandlerRouter = require("./routes/errorHandler.routes");
const initModels = require("./models/initModels");

initModels();

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

const PORT = 8000;

db.authenticate()
  .then(() => {
    console.log("Database connection successful.");
  })
  .catch((error) => console.log(error));

db.sync({ alter: true })
  .then(() => console.log("Synchronized database"))
  .catch((error) => console.log(error));

app.use(userRoutes);
app.use(productRoutes);
app.use(cartRoutes);
app.use(orderRoutes);
app.use(productInOrderRoutes);
app.use(authRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

errorHandlerRouter(app);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
