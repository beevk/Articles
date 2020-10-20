import {Service} from "@crazyfactory/tinka";
import {boundMethod} from "autobind-decorator";
import {IError} from "../Api";
import {IListHeadlineResponse} from "./Headlines";

export class Search extends Service {
    @boundMethod
    public search(query: string): Promise<IListHeadlineResponse | IError> {
        return this.client.process({url: "/v2/top-headlines", method: "GET", queryParameters: {q: query}});
    }
}
