exports.handler = async (event, context) => {
  const users = [
    { name: "John", email: "john@example.com" },
    { name: "Jane", email: "jane@example.com" }
  ];

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(users)
  };
};
