"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv = __importStar(require("dotenv"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
//database
const database_1 = require("./src/provider/database");
const redis_1 = require("./src/provider/redis");
// Create an Express app
const app = (0, express_1.default)();
dotenv.config();
const port = process.env.PORT;
app.use(express_1.default.json());
//Router
const login_1 = __importDefault(require("./src/routes/login"));
const userSignup_1 = __importDefault(require("./src/routes/userSignup"));
const followeroutes_1 = __importDefault(require("./src/routes/followeroutes"));
const post_1 = __importDefault(require("./src/routes/post"));
const action_1 = __importDefault(require("./src/routes/action"));
const session_1 = __importDefault(require("./src/routes/session"));
// for parsing application/x-www-form-urlencoded
app.use(express_1.default.urlencoded({ extended: true }));
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'insta API',
            version: '1.0.0'
        }
    },
    apis: ['./src/router/login.ts', './src/router/logout.ts']
};
const swaggerDoc = (0, swagger_jsdoc_1.default)(swaggerOptions);
//Routes calling
app.use('/api-doc', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDoc));
app.use('/auth', login_1.default);
app.use('/auth', userSignup_1.default);
app.use('/activity', followeroutes_1.default);
app.use('/activity', post_1.default);
app.use('/activity/', action_1.default),
    app.use('/session', session_1.default);
// Start the server
app.listen(port, () => {
    (0, database_1.db)();
    (0, redis_1.redFun)();
    console.log('Server started on port 5000');
});
//# sourceMappingURL=index.js.map