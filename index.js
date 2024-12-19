import createItem from "./routes/createItem";
import getItems from "./routes/getItems";
import updateItem from "./routes/updateItem";
import deleteItem from "./routes/deleteItem";

export const handler = async (event) => {
  if (event.httpMethod === 'GET') {
    await getItems();
  } else if (event.httpMethod === 'POST') {
    const { name, email } = JSON.parse(body);
    await createItem(name, email);
  } else if (event.httpMethod === 'UPDATE') {
    const { id } = event.pathParameters;
    const { name, email } = JSON.parse(body);
    await updateItem(id, name, email);
  } else if (event.httpMethod === 'DELETE') {
    const { id } = pathParameters;
    await deleteItem(id);
  } else {
    return { statusCode: 400, body: JSON.stringify({ message: 'Unsupported HTTP method' }) };
  }
};
