"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signinInput = exports.customerSignupInput = void 0;
const zod_1 = __importDefault(require("zod"));
exports.customerSignupInput = zod_1.default.object({
    firstName: zod_1.default.string(),
    lastName: zod_1.default.string().optional(),
    username: zod_1.default.string().email(),
    password: zod_1.default.string().min(8),
    phoneNumber: zod_1.default.string().length(10)
});
exports.signinInput = zod_1.default.object({
    username: zod_1.default.string().email(),
    password: zod_1.default.string().min(8)
});
