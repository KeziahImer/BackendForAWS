import mysql from 'mysql2/promise';
import { dbConfig } from './dbConfig.js';

const deleteItem = async (id) => {
  const connection = await mysql.createConnection(dbConfig);
  await connection.query('DELETE FROM users WHERE id = ?', [id]);
  return {
    statusCode: 204,
  };
};

export default deleteItem;
