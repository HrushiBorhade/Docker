"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const express_1 = __importDefault(require("express"));
const utils_1 = require("./utils");
const app = (0, express_1.default)();
const prisma = new client_1.PrismaClient();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield prisma.user.findMany();
    res.json({
        message: "success",
        data,
    });
}));
app.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("req", req.body);
    const { username, password } = req.body;
    if (!username || !password) {
        res.status(400);
        res.json({
            message: "please enter valid user with username and password",
        });
        return;
    }
    const newUser = yield prisma.user.create({
        data: {
            username,
            password,
        },
    });
    res.json({
        message: "server is running for post endpoint",
        data: newUser,
    });
}));
app.use(utils_1.ErrorHandler);
app.listen(3000, () => {
    console.log("Server started on port 3000");
});
