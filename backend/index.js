const express = require("express");
const Connection = require("./db");
const app = express();

const cors = require("cors"); // Added

const PORT = 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

//Added
app.use(cors(
  {
    origin: ["https://deploy-mern-1whq.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true
  }
));

//Added
mongoose.connect("mongodb+srv://sheelparikh:sheelparikh@burger-app.3n5irs1.mongodb.net/Burger-app?retryWrites=true&w=majority");

app.use(express.json());
app.use("/api", require("./Routes/CreateUser"));
app.use("/api", require("./Routes/DisplayData"));
app.use("/api", require("./Routes/OrderData"));

app.listen(PORT, () =>
  console.log(`server is running successfully on PORT ${PORT}`)
);

Connection();

// const express = require("express");
// const app = express();
// const port = 5000;
// const mongoDB = require("./db");

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.use(express.json());
// app.use("/api", require("./Routes/CreateUser"));

// app.listen(port, () => {
//   console.log(`Example app listening on ${port}`);
// });
