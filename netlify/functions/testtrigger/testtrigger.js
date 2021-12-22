// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const handler = async (event) => {
  try {
    sendMessage()
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Hello ${subject}` }),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

function sendMessage() {
  const request = new XMLHttpRequest();
  request.open("POST", "https://webhook.site/ae9798bc-5609-4443-aed5-bfb59520dbfe");

  request.setRequestHeader('Content-type', 'application/json');

  const params = {
    username: "My Webhook Name",
    content: "The message to send"
  }

  request.send(JSON.stringify(params));
}

module.exports = { handler }
