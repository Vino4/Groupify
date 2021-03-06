const HttpStatus = require("http-status-codes");
const createErrorHandler = require("../../../utils").createErrorHandler;

const Activity = require("../../../../models/").Activity;
const User = require("../../../../models/").User;
const Participant = require("../../../../models/").Participant;

module.exports = function (req, res, next) {
    function validateInput(req) {
        return true;
    }

    if (!validateInput(req)) {
        const errorMessage = 'please give the correct payload';
        createErrorHandler(res, HttpStatus.BAD_REQUEST)(errorMessage);
        return;
    }

    createErrorHandler(res, HttpStatus.NOT_IMPLEMENTED)("Not implemented");

};
