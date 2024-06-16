const { Code, CodeMsg } = require("../constants/code");

// interface ResOption {
//     type?: codeType
//     status?: number
//     message?: unknown
// }

function commonRes(res, data, options) {
    options = Object.assign({ type: Code[200] }, options || {});
    const { type, status, message } = options;
    let resStatus = status;
    if(!resStatus) resStatus = type === Code[200] ? 200 : 409;
    //{code: number, data: unknown, message?: unknown}
    const sendRes = {
        code: Code[type],
        data
    };
    message && (sendRes.message = message);
    return res.status(resStatus).send(sendRes);
}

commonRes.error = function (res, data, message, status) {
    // logger.error(message || CodeMsg["error"]);
    this(res, data, { type: "error", status: status || 409, message: message || CodeMsg["error"] });
}

commonRes.denied = function (res, data) {
    this(res, data, { type: "denied", status: 401, message: CodeMsg["denied"] });
}

module.exports = commonRes;
