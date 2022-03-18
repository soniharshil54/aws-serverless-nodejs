module.exports.handler = async (event) => {

  const apiResponse = {
    message: "Public api called!!"
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