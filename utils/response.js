const model = {
    data: null,
    message: null,
    success: null,
    error: null
};

function success(data) {
    let resModel = model;
    resModel.data = data;
    resModel.success = true;
    resModel.error = null;
    resModel.message =null;

    return resModel;

}

function error(message=null) {
    let resModel = model;
    resModel.message = message;
    resModel.error =true;
    resModel.success = null;
    resModel.data = null;

    return resModel;
}

module.exports = {
    success,
    error
};
