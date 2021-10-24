function logError(err, req, res, next) {
  console.error("[Log Error Handler]",err);
  next(err);
}
function errorHandler(err, req, res, next) {
  res.status(500).json({ message: err.message, stack: err.stack });
}
module.exports = { logError, errorHandler };
