// wrapper contain trycatch for error handling
const safeCall = require('../utils/safeCall.utils');
const Task = require('../model/task.model');

const _get = safeCall(async (request, response, _next) => {

    const task = await Task.find({});
    return response.json({ path: request.originalUrl, success: true, result: task });

});

const _post = safeCall(async (request, response, _next) => {

    const data = { title, description } = request.body;
    await Task.create(data);
    return response.json({ path: request.originalUrl, success: true, result: 'Task created' });

});

const _delete = safeCall(async (request, response, _next) => {

    const taskId = request.body.id;
    let dletedTask = await Task.findByIdAndDelete(taskId);

    dletedTask.deletedCount !== 0 ?
        response.json({ path: request.originalUrl, success: true, result: 'Task deleted' })
        : response.json({ path: request.originalUrl, success: false, result: 'Task not found' });
});

const _put = safeCall(async (request, response, _next) => {
    const taskId = request.body.id;

    const data = {
        title, description
    } = request.body;

    let dletedTask = await Task.findOneAndUpdate(taskId, data, { new: true });
    return response.json({ path: request.originalUrl, success: true, result: dletedTask });

});


module.exports = {
    _get,
    _post,
    _delete,
    _put
};