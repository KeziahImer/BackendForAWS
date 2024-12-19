const deleteItem = async (connection, id) => {
  await connection.query('DELETE FROM users WHERE id = ?', [id]);
  return {
    statusCode: 204,
  };
};

export default deleteItem;
