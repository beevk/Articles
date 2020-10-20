import {IFetchRequest, IFetchResponse, IMiddleware} from "@crazyfactory/tinka";
import {boundMethod} from "autobind-decorator";

export class WrapMiddleware implements IMiddleware<IFetchRequest, Promise<IFetchResponse<any>>> {
    @boundMethod
    public async process(options: IFetchRequest, next: (nextOptions: IFetchRequest) => Promise<IFetchResponse<any>>): Promise<IFetchResponse<any>> {
        const response = await next(options);
        return response.json();
    }
}
