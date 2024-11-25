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
exports.OrderController = void 0;
const order_service_1 = __importDefault(require("./order.service"));
class OrderController {
    // Create a new order
    createOrder(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const order = yield order_service_1.default.createOrder(req.body);
                res.status(201).json({
                    message: 'Order created successfully',
                    status: true,
                    data: order,
                });
            }
            catch (error) {
                const err = error;
                if (err.name === 'ValidationError') {
                    res.status(400).json({
                        message: 'Validation Failed',
                        status: false,
                        err,
                        stack: err.stack,
                    });
                }
                else {
                    res.status(404).json({
                        message: err.message,
                        status: false,
                        err,
                        stack: err.stack,
                    });
                }
            }
        });
    }
    // Get total revenue from orders
    getTotalRevenue(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const totalRevenue = yield order_service_1.default.calculateRevenue();
                res.status(201).json({
                    message: 'Revenue calculated successfully',
                    status: true,
                    data: {
                        totalRevenue,
                    },
                });
            }
            catch (error) {
                res.status(400).json({
                    message: 'Failed to calculate revenue',
                    status: false,
                    error,
                });
            }
        });
    }
}
exports.OrderController = OrderController;
const orderController = new OrderController();
exports.default = orderController;
