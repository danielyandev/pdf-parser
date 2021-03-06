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

# Tests

Note: before running tests create .env.testing file with testing env variables

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

# Architecture diagram

#### NOTE: the app does not work with apache-tika microservice. Just to show remaining functionality, apache tika URL was changed to an external one to process PDF files.

![architecture-diagram](./diagrams/architecture-diagram.png)

# Login sequence diagram

![login-sequence-diagram](./diagrams/login-sequence-diagram.png)

# Register sequence diagram

![register-sequence-diagram](./diagrams/register-sequence-diagram.png)