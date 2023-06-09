# Project: Serverless-Api

## Author: Hayden Cooper

## Problem Domain

Create a single resource REST API using a domain model of your choosing, constructed using AWS Cloud Services.

- Database: DynamoDB
  - 1 Table required.
- Routing: API Gateway
  - POST
    - /people - Given a JSON body, inserts a record into the database.
    - returns an object representing one record, by its id (##).
  - GET
    - /people - returns an array of objects representing the records in the database.
    - /people/## - returns an object representing one record, by its id (##).
  - PUT
  - /people/## - Given a JSON body and an ID (##), updates a record in the database.
  - returns an object representing one record, by its id (##).
  - DELETE
  - /people/## - Given an id (##) removes the matching record from the database.
  - returns an empty object.

- CRUD Operation Handlers: Lambda Functions

## Links and Resources

- [GitHub Actions ci/cd](https://s3.console.aws.amazon.com/s3/buckets?region=us-east-2&region=us-east-2)
- [back-end dev server url](https://us-east-2.console.aws.amazon.com/lambda/home?region=us-east-2#/discover)

## Collaborators

Ryan Gallaway/ seat401d53/ chatgpt

## Setup ///

## `.env` requirements (where applicable)

node version "v19.6.1"

## How to initialize/run your application (where applicable)

- Set up DynamoDB: Create a DynamoDB table to store the records for your domain model. Define the table structure using DynamoDB's key-value schema. You can use the AWS Management Console or the AWS SDKs/APIs to create the table.
- Install and configure Dynamoose: Dynamoose is a modeling tool for DynamoDB that simplifies working with the database. Install Dynamoose as a dependency in your project and configure it to connect to your DynamoDB table.
- Implement Lambda functions: Create separate directories for each CRUD operation handler (handleCreate, handleRead, handleUpdate, handleDelete). Inside each directory, write the code for the Lambda function that handles the specific CRUD operation. You can use the AWS SDK or Dynamoose's API to interact with the DynamoDB table.
- Write tests: For each Lambda function, write test cases using a testing framework of your choice (e.g., Jest). Mock the input event and DynamoDB interactions to ensure proper testing of your functions.
- Set up API Gateway: Create an API Gateway REST API and define the routes (/people, /people/{id}) for your API. Configure the integration of each route with the respective Lambda function. You can use the AWS Management Console or the AWS SDKs/APIs to create and configure the API.
- Test your API: Use tools like curl, Postman, or a browser extension like REST Client to test your API endpoints. Verify that the requests and responses are working as expected.
- Deployment: Manually deploy each Lambda function by creating a .zip file that includes the function code, dependencies, and any necessary configuration files. Upload the .zip file to each Lambda function using the AWS Management Console or the AWS CLI. For automating deployments on check-ins, you can explore CI/CD tools like AWS CodePipeline or use a deployment script triggered by your version control system's events.

## Routes

- Npm Test and install npm Jest if no test runs

## Tests

to run tests, after running `npm i`, run the command `npm test`

## UML

![UML image](./Screenshot%202023-06-07%20at%209.54.06%20PM.png)
