import { IResponse } from "types";

export class BadRequest implements IResponse {
    error: boolean = false;
    status: number = 200;
   message: string = "Bad Request"
    
}