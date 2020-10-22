import {Service} from "@crazyfactory/tinka";
import {boundMethod} from "autobind-decorator";
import {IError} from "../Api";
import {IListHeadlineResponse} from "./Headlines";

interface IQueryParams {
  q: string;
  country?: string;
}

export class Search extends Service {
    @boundMethod
    public search(query: string): Promise<IListHeadlineResponse | IError> {
        const queryParams: IQueryParams = { q: query };
        if (!query) {
          queryParams.country = 'us';
        }
        return this.client.process({
          url: "/v2/top-headlines",
          method: "GET",
          queryParameters: queryParams
        });
    }
}
