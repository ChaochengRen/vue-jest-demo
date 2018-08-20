module.exports = {
    get: () => {
        return Promise.resolve({
            data: {
                "name": "mock-name",
                "message": "mock-msg"
            }
        })
    }
}