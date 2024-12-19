const updateItem = async (connection, id, name, email) => {
  await connection.query('UPDATE users SET name = ?, email = ? WHERE id = ?', [name, email, id]);
  return {
    statusCode: 201,
    body: JSON.stringify({ id, name, email }),
  };
};

export default updateItem;


