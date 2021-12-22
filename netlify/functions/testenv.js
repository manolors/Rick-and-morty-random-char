
exports.handler = async () => {
  console.log("contenido de process.env" + JSON.stringify(process.env))
  return {
    statusCode: 200,
    body: JSON.stringify({envVar:(process.env.MI_SECRET || "not-set")}),
  };
};