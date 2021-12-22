// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const webhookEndpoint = "https://discord.com/api/webhooks/923207419918696449/rW9T60zGF9mF_hIuSLNurOYrMLOHvlMvVkDPZdpKyobMsAjGCXpFZWC8Z7lYVwdVLrVA"

const fetch = require("node-fetch");

exports.handler = async () => {
    const message = "Building!"
    await fetch(
      webhookEndpoint,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(params = {
          username: "Buildbot",
          avatar_url: "",
          content: message
        }),
      }
    );


  return {
    statusCode: 200,
    body: JSON.stringify({}),
  };
};