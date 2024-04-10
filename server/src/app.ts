import express from "express";
import config from "config";
import cors from 'cors'; 

import Connection from "./db/connect.ts";
import route from "./routes/route.ts";


const port = config.get("port") as number;
const host = config.get("host") as string;

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', route);
 
Connection();

app.listen(port, host, () => {
    console.log(`Server listing at http://${host}:${port}`);
});
