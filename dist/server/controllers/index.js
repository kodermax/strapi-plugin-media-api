"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const my_controller_1 = __importDefault(require("./my-controller"));
const fs_1 = __importDefault(require("./fs"));
exports.default = {
    myController: my_controller_1.default,
    fs: fs_1.default
};
