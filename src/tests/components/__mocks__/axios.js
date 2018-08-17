module.exports = {
    create: () => {
        get: () => {
            console.log('mock axios.get called');
            return Promise.resolve({
                "name": "mock-name",
                "message": "mock-msg"
            })
        }
    }
}