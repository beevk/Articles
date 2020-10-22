# News API - SDK (https://newsapi.org)

This SDK is made using ts-module-boilerplate (@crazyfactory).
Please install [@crazyfactory/tinka](https://www.npmjs.com/package/@crazyfactory/tinka) if you already don't have it in your project.

## Usage

install this package using

```bash
npm install @beevk/newsapi-sdk
```

or

```bash
yarn add @beevk/newsapi-ask
```

And import it where required (i.e. where you need to make API call).
Also for ease, all the middlewares are already configured if you call getInstance.

```js
import { Api } from "@beevk/mewsapi-sdk";
// Get your APIKey from newsapi.org
const client = Api.getInstance("https://newsapi.org", () => "APIKey");
```

To fetch headlines

```js
const headlines = await client.headlines.listHeadlines();
```

To fetch news sources

```js
const sources = await client.sources.listSources();
```

To search the API

```js
const searchResult = await client.search.search(query);
```

You can also easily check if the response you got is an error response from API.

```js
const hasError = Api.isError(headlines);
```

If you don't want to use the preconfigured instance, you can do it yourself as well.

```js
import { Client, Service } from "@crazyfactory/tinka";
import {
  WrapMiddleware,
  ApiTokenMiddleware,
  Api as NewsApi,
} from "@beevk/newsapi-sdk";

export default class Api extends Service {
  static instance;

  static getInstance(baseUrl, tokenFactory) {
    if (!Api.instance) {
      Api.instance = new NewsApi(
        Api.getConfiguredClient(baseUrl, tokenFactory)
      );
    }
    return Api.instance;
  }

  static getConfiguredClient(baseUrl, tokenFactory) {
    const client = new Client({ baseUrl });
    client.addMiddleware(new ApiTokenMiddleware(tokenFactory));
    client.addMiddleware(new WrapMiddleware());
    return client;
  }
}
```

And use the instance of this class as your HTTP client.

```js
const httpClient = Api.getInstance("https://newsapi.org", () => "APIKey");
```
