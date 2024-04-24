const asyncHandler = (reqHandler) => {
    return (req, res, next) => {
        Promise.resolve(reqHandler(req, res, next)).catch((err) => {
            console.error("An error occurred while using asyncHandler:", err);
            next(err);
        });
    };
};

export default asyncHandler;
