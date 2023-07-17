"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
app.get('/users', (req, res) => {
    res.sendFile(__dirname + '/users.json');
});
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
