const axios = require('axios')

export async function getAdressById(id) {
  try {
    return axios
      .get(`https://library-places-back.herokuapp.com/places/${id}`)
      .then(function (response) {
        return response.data
      })
  } catch (err) {
    console.log(err)
  }
}

export default { getAdressById }
