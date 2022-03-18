const { v4: uuidv4 } = require('uuid');

module.exports.handler = async (event) => {

  const uuidV4 = uuidv4();

  const apiResponse = {
    message: "Public uuid layer api called!!",
    uuidV4,
  }

  const responseBody = {
    data: apiResponse
  }
  const response = {
    statusCode : 200,
    body : JSON.stringify(responseBody),
    isBase64Encoded : false,
    headers : {"content-type" : "application/json"}
  }
  return response;
}