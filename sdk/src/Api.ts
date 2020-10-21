import {Client, Service} from "@crazyfactory/tinka";
import {ApiTokenMiddleware, TApiTokenFactory} from "./middleware/ApiTokenMiddleware";
import {WrapMiddleware} from "./middleware/WrapMiddleware";
import {Headlines} from "./nodes/Headlines";
import {Search} from "./nodes/Search";
import {Sources} from "./nodes/Sources";

export interface IError {
    status: "error";
    code: string;
    message: string;
}

export class Api extends Service {
    private static instance: Api;

    public static isError(obj: unknown): obj is IError {
        // @ts-ignore
        return typeof obj === "object" && obj !== null && "status" in obj && obj.status === "error";
    }

    public static getInstance(baseUrl: string, tokenFactory: TApiTokenFactory): Api {
        if (!Api.instance) {
            Api.instance = new Api(Api.getConfiguredClient(baseUrl, tokenFactory));
        }
        return Api.instance;
    }

    private static getConfiguredClient(baseUrl: string, tokenFactory: TApiTokenFactory): Client {
        const client = new Client({baseUrl});
        client.addMiddleware(new ApiTokenMiddleware(tokenFactory));
        client.addMiddleware(new WrapMiddleware());
        return client;
    }

    public get sources(): Sources {
        return new Sources(this.client);
    }

    public get headlines(): Headlines {
        return new Headlines(this.client);
    }

    public get search(): Search {
        return new Search(this.client);
    }
}
