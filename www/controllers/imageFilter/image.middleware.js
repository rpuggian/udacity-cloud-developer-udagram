"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../../util/util");
const axios_1 = __importDefault(require("axios"));
// @TODO
// Validate if the request contains a image url and if this url does exists.
function validateImageUrl(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        let { image_url } = req.query;
        if (!image_url) {
            res.status(400).send({ "error": "image_url is required." });
            return;
        }
        //verifying if the url does exist
        try {
            yield axios_1.default.head(image_url);
            next();
        }
        catch (error) {
            console.error("Error on try to get image:", error);
            res.status(400).send({ "error": `The image url ${image_url} does not exist or it is invalid.` });
            return;
        }
    });
}
exports.validateImageUrl = validateImageUrl;
// Delete Temp Files on request finished
function deleteTempFiles(req, res, next) {
    res.on('finish', () => __awaiter(this, void 0, void 0, function* () {
        if (res.statusCode != 200) {
            return;
        }
        let ctx = res.locals;
        if (!ctx.filePath) {
            console.log("Could not delete temp files");
            return;
        }
        yield util_1.deleteLocalFiles([ctx.filePath]);
    }));
    return next();
}
exports.deleteTempFiles = deleteTempFiles;
//# sourceMappingURL=image.middleware.js.map