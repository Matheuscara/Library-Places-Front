const axios = require('axios')

export async function getAdressById(id) {
  try {
    return axios
      .get(`${process.env.GOOGLE_PLACES_API || "http://localhost:3001"}/places/${id}`)
      .then(function (response) {
        return response.data
      })
  } catch (err) {
    console.log(err)
  }
}

export default { getAdressById }
