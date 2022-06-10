const express = require("express");
const cors = require("cors");

const restService = require("./rest-service");

const app = express();

app.use(cors());
app.use(express.json());

app.use(`/`, restService);

const PORT = process.env.NODE_PORT || 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}...`));
