const info = (req, res) => {
    return res.json({
        success: true,
        message: "info api is called",
        error: {},
        data: {},
    })
}

module.exports = { 
    info
};