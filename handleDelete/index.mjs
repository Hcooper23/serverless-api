import dynamoose from 'dynamoose';

const schema = new dynamoose.Schema({
  'id': String,
  'name': String,
});

const People = dynamoose.model('People', schema);

export const handler = async (event) => {
  try {
    const { id } = event.pathParameters;
    await People.delete(id);

    return {
      statusCode: 200,
      body: JSON.stringify({}),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};
