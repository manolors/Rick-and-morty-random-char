// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const webhookEndpoint = "https://webhook.site/ae9798bc-5609-4443-aed5-bfb59520dbfe"

const fetch = require("node-fetch");

exports.handler = async () => {
    const message = "Repo building!"
    await fetch(
      webhookEndpoint,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          text: message,
        }),
      }
    );


  return {
    statusCode: 200,
    body: JSON.stringify({}),
  };
};