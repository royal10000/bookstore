export default asyncHandler = (reqHandler) => {
    return (req, res, next) => {
        Promise.resolve(reqHandler(req, res, next)).catch((err) => {
            console.log("something  is wrong while using asynchandler")
            next(err)
        })
    }
}

