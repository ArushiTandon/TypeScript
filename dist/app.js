"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const todos_1 = __importDefault(require("./routes/todos"));
const app = express();
app.use(bodyParser.json());
app.use(todos_1.default);
app.listen(3000);
