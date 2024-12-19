import mysql from 'mysql2/promise';
import { dbConfig } from './dbConfig.js';

const updateItem = async (id, name, email) => {
  const connection = await mysql.createConnection(dbConfig);
  await connection.query('UPDATE users SET name = ?, email = ? WHERE id = ?', [name, email, id]);
  return {
    statusCode: 201,
    body: JSON.stringify({ id, name, email }),
  };
};

export default updateItem;


