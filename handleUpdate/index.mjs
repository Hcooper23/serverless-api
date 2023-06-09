import dynamoose from 'dynamoose';

const schema = new dynamoose.Schema({
  'id': String,
  'name': String,
});

const People = dynamoose.model('People', schema);

export const handler = async (event) => {
  let id = event.pathParameters.id;
  let parsedData = JSON.parse(event.body);
  let updatedName = parsedData.name;

  const response = {
    statusCode: null,
    body: null,
  };

  try {
    let updatedResults = await People.update({ 'id': id }, { 'name': updatedName });
    response.body = JSON.stringify(updatedResults);
    response.statusCode = 200;
  } catch (e) {
    response.body = JSON.stringify(e.message);
    response.statusCode = 500;
  }

  return response;
};
