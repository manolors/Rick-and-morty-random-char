// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method


function Saludar(nombre) {
  return `Hello ${nombre}`
}


const handler = async (event) => {
  try {
    console.log("%j", event)
    //const nombre = event.queryStringParameters.name || 'World'
    const body = JSON.parse(event.body)
    const nombre = body.name || 'World'
    return {
      statusCode: 200,
      body: JSON.stringify({ message: Saludar(nombre)  }),
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
