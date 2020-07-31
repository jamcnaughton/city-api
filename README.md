# city-user-list
Front end for querying an external API which lists users in and nearby a city.

## Workings
This solution uses the city endpoint of the supplied API for getting users in the targetted city. It then calls the all users endpoint. Users returned from the first query are excluded from the second query, then the remaining users are iterated through to find those within the specified distance of the target's city central point (using the Haversine formula). The resulting list of users is combined with those returned from the first query to produce all the users in the city and those considered to be nearby.

The solution supplies users with the following endpoint:

```bash
GET [host]/api/1.0/people/near/{city}/within/{distance}
```
This endpoint allows users to supply a city (the solution is currently only configured with latitude/longitude data for "London", currently set as 51.509865, -0.118092) and a distance to consider as being nearby (in miles).

For example, to find all user in or within 50 miles of London the following request would be needed:

```bash
GET [host]/api/1.0/people/near/London/within/50
```


## Dev Commands

The following commands assume you have NodeJs with NPM installed and are to be executed from the project's root directory.

### Set up

```bash
npm run api:install:dev
```

### Run on dev env

```bash
npm run api:start:dev
```

### Generate Docs

```bash
npm run api:doc
```

### Generate API Docs

```bash
npm run api:apidoc
```

### Lint

```bash
npm run api:lint
```

### Test

```bash
npm run api:test
```

### Production Commands

### Set up

```bash
npm run api:install:dev
```

### Build

```bash
npm run api:install:dev
```

### Run

Install forever on the server and deploy the build there and run the following command:

```bash
npm run forever
```





