exports.successResponse = function (res, msg) {
    var data = {
        status: true,
        status_code: 200,
        status_message: msg
    };
    return res.status(200).json(data);
};

exports.successResponseWithData = function (res, msg, data) {
    var resData = {
        status: true,
        status_code: 200,
        status_message: msg,
        data: data
    };
    return res.status(200).json(resData);
};

exports.successResponseWithArrayData = function (res, data) {
    return res.status(200).json(data);
};

exports.ErrorResponse = function (res, msg) {
    var data = {
        status: false,
        status_code: 500,
        status_message: msg,
    };
    return res.status(500).json(data);
};

exports.notFoundResponse = function (res, msg) {
    var data = {
        status: false,
        status_code: 404,
        status_message: msg,
    };
    return res.status(404).json(data);
};

exports.validationErrorWithData = function (res, msg, data) {
    var resData = {
        status: false,
        status_code: 400,
        status_message: msg,
        data: data
    };
    return res.status(400).json(resData);
};

exports.unauthorizedResponse = function (res, msg) {
    var data = {
        status: false,
        status_code: 401,
        status_message: msg,
    };
    return res.status(401).json(data);
};