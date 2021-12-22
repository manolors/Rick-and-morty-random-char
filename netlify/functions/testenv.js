
exports.handler = async () => {

  return {
    statusCode: 200,
    body: JSON.stringify({envVar:(process.env.MI_SECRET || "not-set")}),
  };
};