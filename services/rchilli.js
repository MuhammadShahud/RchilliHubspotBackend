const axios = require('axios');

const rChilliCall = async (body) => {
  const newObj = {
    filedata: body.file,
    filename: body.name,
    userkey: "GB3AIJZV",
    version: "8.0.0",
    subuserid: "Muhammad Shahud",
  };
 const response = 
  await axios
    .post(
      "https://rest.rchilli.com/RChilliParser/Rchilli/parseResumeBinary",
      newObj,
      {
        headers: {
          "content-type": "application/json",
        },
      }
    )
   return response
};

module.exports = { rChilliCall };
