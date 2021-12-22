// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const webhookEndpoint = "https://webhook.site/ae9798bc-5609-4443-aed5-bfb59520dbfe"
const handler = async (event) => {
  try {
    sendMessage(webhookEndpoint, "Deploy succeded!")
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Hello ${subject}` }),
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

function sendMessage(endpoint, message) {
  const request = new XMLHttpRequest();
  request.open("POST", endpoint);

  request.setRequestHeader('Content-type', 'application/json');

  const params = {
    content: message
  }

  request.send(JSON.stringify(params));
}

module.exports = { handler }
