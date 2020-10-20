import {IFetchRequest, Service} from "@crazyfactory/tinka";
import {boundMethod} from "autobind-decorator";
import {IError} from "../Api";

interface ISource {
    id: string | null;
    name: string | null;
}

interface IHeadline {
    source: ISource;
    author: string | null;
    title: string;
    description: string;
    url: string;
    urlToImage: string | null;
    publishedAt: string | null;
    content: string;
}

export interface IListHeadlineResponse {
    status: "ok" | "error";
    totalResults: number;
    articles: IHeadline[];
}

export class Headlines extends Service {
    @boundMethod
    public listHeadlines(): Promise<IListHeadlineResponse | IError> {
        return this.client.process({url: "/v2/top-headlines", method: "GET", queryParameters: {country: "us"}} as IFetchRequest);
    }
}
