const getItems = async (connection) => {
  const [rows] = await connection.query('SELECT * FROM users');
  return {
    statusCode: 200,
    body: JSON.stringify(rows),
  };
};

export default getItems;
