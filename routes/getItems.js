import mysql from 'mysql2/promise';
import { dbConfig } from './dbConfig.js';

const getItems = async () => {
  const connection = await mysql.createConnection(dbConfig);
  const [rows] = await connection.query('SELECT * FROM users');
  return {
    statusCode: 200,
    body: JSON.stringify(rows),
  };
};

export default getItems;
