exports.handler = async () => {
  const secret =  process.env.SECRET

  const response = { secret: secret}

  const pass = (data) => {
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    }
  }

  return pass(response)
}