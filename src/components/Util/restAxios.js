const axios = require('axios')

export async function getAdressById(id) {
  try {
    return axios
      .get(`http://localhost:3000/places/${id}`)
      .then(function (response) {
        return response.data
      })
  } catch (err) {
    console.log(err)
  }
}

export async function getCategory(latitude, longitude) {
  try {
    return axios({
      method: 'get',
      url: `http://localhost:3000/places/categories/${latitude.toString()}/${longitude.toString()}/${5000}`,
    }).then(function (response) {
      return response.data
    })
  } catch (err) {
    console.log(err)
  }
}

export default { getAdressById, getCategory }
