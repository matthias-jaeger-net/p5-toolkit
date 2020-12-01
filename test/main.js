var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define("colors", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Colors {
        constructor(context) {
            this.context = context;
        }
    }
    exports.default = Colors;
});
define("index", ["require", "exports", "colors"], function (require, exports, colors_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    colors_1 = __importDefault(colors_1);
    function test(n) {
        const col = new colors_1.default(n);
    }
});
