const notFoundPath = (req, res, next)=>{
    return res.status(400).json({
        message: "NOT FOUND PATH"
    });
}

export default notFoundPath