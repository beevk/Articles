# News API - SDK (https://newsapi.org)

[![Greenkeeper badge](https://badges.greenkeeper.io/crazyfactory/ts-module-boilerplate.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/crazyfactory/ts-module-boilerplate.svg)](https://travis-ci.org/crazyfactory/ts-module-boilerplate)
[![GitHub issues](https://img.shields.io/github/issues/crazyfactory/ts-module-boilerplate.svg)](https://github.com/crazyfactory/ts-module-boilerplate/issues)
[![codecov](https://codecov.io/gh/crazyfactory/ts-module-boilerplate/branch/master/graph/badge.svg)](https://codecov.io/gh/crazyfactory/ts-module-boilerplate)
[![devDependencies Status](https://david-dm.org/crazyfactory/ts-module-boilerplate/dev-status.svg)](https://david-dm.org/crazyfactory/ts-module-boilerplate?type=dev)
[![peerDependencies Status](https://david-dm.org/crazyfactory/ts-module-boilerplate/peer-status.svg)](https://david-dm.org/crazyfactory/ts-module-boilerplate?type=peer)
[![dependencies Status](https://david-dm.org/crazyfactory/ts-module-boilerplate/status.svg)](https://david-dm.org/crazyfactory/ts-module-boilerplate)

This SDK is made using ts-module-boilerplate (@crazyfactory).
 Please install [@crazyfactory/tinka](https://www.npmjs.com/package/@crazyfactory/tinka) if you already don't have it in your project.


## Usage
install this package using
```
npm install @beevk/newsapi-sdk
```
or
```
yard add @beevk/newsapi-ask
```

And import it where required (i.e. where you need to make API call).
Also for ease, all the middlewares are already configured if you call getInstance. 
But you can do it yourself as well if you choose to.

```js
import { API } from '@beevk/mewsapi-sdk';
// Get your APIKey from newsapi.org
const client = Api.getInstance('https://newsapi.org', () => 'APIKey');
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
const hasError = client.isError(headlines);
```
