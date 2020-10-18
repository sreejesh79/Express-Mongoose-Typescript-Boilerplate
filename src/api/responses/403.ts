import { IResponse } from "types";

export class Forbidden implements IResponse {
    error: boolean = false;
    status: number = 200;
    message: string = "Forbidden"
    
    constructor(msg: string = '') {
        this.message = `${this.message} ${msg}`;
    }
}
