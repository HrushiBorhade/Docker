import { PrismaClient } from "@prisma/client";
import express from "express";
import { ErrorHandler } from "./utils";

const app = express();
const prisma = new PrismaClient();

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

app.get("/", async (req, res) => {
  const data = await prisma.user.findMany();
  res.json({
    message: "success",
    data,
  });
});

app.post("/", async (req, res) => {
  console.log("req", req.body);
  
  const { username, password } = req.body;
  
  if (!username || !password) {
    res.status(400);
    res.json({
      message: "please enter valid user with username and password",
    });
    return;
  }
  
  const newUser = await prisma.user.create({
    data: {
      username,
      password,
    },
  });
  
  res.json({
    message: "server is running for post endpoint",
    data: newUser,
  });
});

app.use(ErrorHandler);

app.listen(3000, () => {
  console.log("Server started on port 3000");
});