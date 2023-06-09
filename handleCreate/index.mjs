import dynamoose from 'dynamoose';
import { v4 as uuidv4 } from 'uuid';

const schema = new dynamoose.Schema({
  'id': {
    type: String,
    hashKey: true,
  },
  'name': String,
});

const People = dynamoose.model('People', schema);

export const handler = async (event) => {
  try {
    const { name } = JSON.parse(event.body);
    const id = generateId();
    const person = new People({ id, name });
    await person.save();

    return {
      statusCode: 200,
      body: JSON.stringify(person),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};

function generateId() {
  return uuidv4();
}
