const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => {
            next(err);
        })
    }
}
export default asyncHandler;







// this is a wrapper function
/*
const asynchHandler = (func) = async (req, res, next, err) => {
    try {
        await func(req, res, next, err)

    } catch (error) {
        res.status(err.code || 500).json({
            success: false,
            message: err.message
        })

    }

}
*/