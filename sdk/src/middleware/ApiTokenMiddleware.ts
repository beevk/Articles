import {IFetchRequest, IFetchResponse, IMiddleware} from "@crazyfactory/tinka";
import {boundMethod} from "autobind-decorator";

export type TApiTokenFactory = () => string;
export class ApiTokenMiddleware implements IMiddleware<IFetchRequest, Promise<IFetchResponse<any>>> {
    constructor(private apiTokenFactory: TApiTokenFactory) {
    }

    @boundMethod
    public process(options: IFetchRequest, next: (nextOptions: IFetchRequest) => Promise<IFetchResponse<any>>): Promise<IFetchResponse<any>> {
        if (!options.queryParameters) {
            options.queryParameters = {};
        }
        options.queryParameters.apiKey = this.apiTokenFactory();
        return next(options);
    }
}
