"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const util_1 = require("../../util/util");
const image_middleware_1 = require("./image.middleware");
const router = express_1.Router();
router.use(image_middleware_1.deleteTempFiles);
router.get('/', image_middleware_1.validateImageUrl, (req, res) => __awaiter(this, void 0, void 0, function* () {
    let { image_url } = req.query;
    let filtered_image_path = yield util_1.filterImageFromURL(image_url);
    res.locals = new util_1.LocalContext(filtered_image_path);
    res.sendFile(filtered_image_path);
}));
exports.ImageRouter = router;
//# sourceMappingURL=image.router.js.map