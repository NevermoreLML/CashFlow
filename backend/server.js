const express = require("express");
const cors = require("cors"); // add cors before your route
const globalErrHandler = require("./middlewares/globalErrHandler");
require("./config/dbConnect");
const accountRoute = require("./routes/accounts/accountRoute");
const transactionsRoute = require("./routes/transactions/transactionsRoute");
const usersRoute = require("./routes/users/usersRoute");

const app = express();

//middlewares
app.use(express.json()); //pass incoming data

//cors middlewares
app.use(cors()); // 解决前后端连接 cors blocked

//users route
app.use("/api/v1/users", usersRoute);
//account routes
app.use("/api/v1/accounts", accountRoute);

//transactions route
app.use("/api/v1/transactions", transactionsRoute);

//Error handlers
app.use(globalErrHandler);
//listen to server
const PORT = process.env.PORT || 8080;
app.listen(PORT, console.log(`Server is up and runing on port ${PORT}`));
