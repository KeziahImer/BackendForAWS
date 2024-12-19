import mysql from 'mysql2/promise';
import { dbConfig } from './dbConfig.js';

const createItem = async ({ name, email }) => {
  const connection = await mysql.createConnection(dbConfig);
  const [result] = await connection.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email]);
  return {
    statusCode: 201,
    body: JSON.stringify({ id: result.insertId, name, email }),
  };
};

export default createItem;
