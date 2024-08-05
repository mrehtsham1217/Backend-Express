class APIResponse {
    constructor(statusCode, message = "Success", data) {
        this.status = statusCode;
        this.message = message;
        this.data = data;
        this.succcess = statusCode
    }
}