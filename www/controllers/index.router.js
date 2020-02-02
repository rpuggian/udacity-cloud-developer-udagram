"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const image_router_1 = require("./imageFilter/image.router");
const router = express_1.Router();
// @TODO
// GET /filteredimage
router.use('/filteredimage', image_router_1.ImageRouter);
exports.IndexRouter = router;
//# sourceMappingURL=index.router.js.map