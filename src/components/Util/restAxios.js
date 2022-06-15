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

export async function getCategoriesById(id) {
  try {
    return axios
      .get(`https://library-places-back.herokuapp.com/places/${id}`)
      .then(function (response) {
        return response.data.location
      })
      .then((location) => {
        return axios
          .get(
            `https://library-places-back.herokuapp.com/places/categories/${location.latitude}/${location.longitude}/5000`
          )
          .then(function (response) {
            return response.data
          })
      })
  } catch (err) {
    console.log(err)
  }
}

export default { getAdressById, getCategoriesById }
