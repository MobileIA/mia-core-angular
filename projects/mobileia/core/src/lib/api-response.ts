import { ApiError } from "./api-error";

export class ApiResponse<T> {
    public success : boolean;
    public error : ApiError;
    public response : T;
}
