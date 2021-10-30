export enum ModalTypeEnum {
    Info,
    Question,
    Warning,
    Error,
    Component
};

export enum HttpErrorEnum {
    BadRequest = 400,
    Unauthorized = 401,
    Forbidden = 403,
    NotFound = 404,
    MethodNotAllowed = 405,
    RequestTimeout = 408,
    TooManyRequests = 429,
    InternalServerError = 500,
    BadGateway = 502,
    ServiceUnavailable = 503,
    GatewayTimeout = 504
};