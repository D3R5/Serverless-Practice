import { formatJSONResponse } from '@libs/api-gateway';
import { APIGatewayProxyEvent, Context } from 'aws-lambda';

const hello = async (event: APIGatewayProxyEvent, context: Context) => {
  //const {name} = JSON.parse(event.body) as {name:string}
  const {id} = event.pathParameters
  const {age} = event.queryStringParameters
  const {awsRequestId} = context
  return formatJSONResponse({
    message: `Hello ${id}, welcome to the exciting Serverless world! ${age}`,
    awsRequestId,
  });
};

export const main = hello;
