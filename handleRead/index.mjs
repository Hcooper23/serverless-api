import dynamoose from 'dynamoose';

const schema = new dynamoose.Schema({
  'id': String,
  'name': String,
});

const People = dynamoose.model('People', schema);

export const handler = async (event) => {
  console.log('this is the body: ', event.body);

  const response = {
    statusCode: null,
    body: null,
  };

  console.log('event Parameters', event.eventPara);

  try {
    const id = event.pathParameters.id;
    const result = await People.query('id').contains(id).exec();
    const resultsOfOne = result[0]; // Assuming there is only one result

    console.log('resultsOfOne ------', resultsOfOne);
    response.body = JSON.stringify(resultsOfOne);
    response.statusCode = 200;
  } catch (e) {
    response.body = JSON.stringify(e.message);
    response.statusCode = 500;
  }

  return response;
};

