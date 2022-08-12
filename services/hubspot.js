const axios = require("axios");

const hubspotCall = async (body) => {
  let response =
  await axios
    .post("https://api.hubapi.com/contacts/v1/contact/", body, 
    {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer pat-na1-ad4b7e00-01fe-4734-ab9f-6b9704843b2e"
      },
    });
    return response;
    
};

module.exports = { hubspotCall };
