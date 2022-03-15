# Get Started

#### Start the whole application:
```
make start
```

#### Forward ports for all microservices:

NOTE: API runs on 8080 and UI on 3000 by default
```
make port-forward
```

#### After applied changes run to refresh the containers:
```
make up
make port-forward
```

### NOTE: the app does not work with apache-tika microservice. Just to show remaining functionality, apache tika URL was changed to an external one to process PDF files.

#### API microservice has tests, to run them use:
```
cd ./api
npm test
```

#### Not all files are tested, but you can see a coverage running:
```
cd ./api
npm test -- --coverage
```