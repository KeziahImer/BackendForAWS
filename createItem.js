const createItem = async (connection, name, email) => {
  const [result] = await connection.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email]);
  return {
    statusCode: 201,
    body: JSON.stringify({ id: result.insertId, name, email }),
  };
};

export default createItem;
