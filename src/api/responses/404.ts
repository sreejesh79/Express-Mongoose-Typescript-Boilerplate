import { IResponse } from "types";

export class NotFound implements IResponse {
    error: boolean = false;
    status: number = 200;
    message: string = "Not Found"
    
    constructor(msg: string = '') {
        this.message = `${this.message} ${msg}`;
    }
}
