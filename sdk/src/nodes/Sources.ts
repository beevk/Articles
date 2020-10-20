import {IFetchRequest, Service} from "@crazyfactory/tinka";
import {boundMethod} from "autobind-decorator";
import {IError} from "../Api";

interface ISource {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

interface ISourceResponse {
    status: "ok" | "error";
    sources: ISource[];
}

export class Sources extends Service {
    @boundMethod
    public listSources(): Promise<ISourceResponse | IError> {
        return this.client.process({url: "/v2/sources", method: "GET"} as IFetchRequest);
    }
}
