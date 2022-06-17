function createGroupCategories(array) {
  let newObject = {
    all: [],
    Locomotion: [],
    Entertainment: [],
    Emergency: [],
    Food: [],
  }

  array.forEach((element) => {
    if (
      [
        'police',
        'pharmacy',
        'hospital',
        'doctor',
        'bank',
        'health',
        'drugstore',
        'political',
        'airport',
      ].find((category) => category === element)
    ) {
      newObject.all.push(element)
      newObject.Emergency.push(element)
    } else if (
      ['light_rail_station', 'airport', 'bus_station', 'locality'].find(
        (category) => category === element
      )
    ) {
      newObject.all.push(element)
      newObject.Locomotion.push(element)
    } else if (
      [
        'art_gallery',
        'aquarium',
        'amusement_park',
        'book_store',
        'casino',
        'movie_theater',
        'museum',
        'night_club',
        'park',
        'parking',
        'bar',
        'point_of_interest',
        'night_club',
        'store',
        'establishment',
      ].find((category) => category === element)
    ) {
      newObject.all.push(element)
      newObject.Entertainment.push(element)
    } else if (
      [
        'bakery',
        'cafe',
        'liquor_store',
        'home_goods_store',
        'restaurant',
        'food',
        'bar',
        'night_club',
        'store',
        'restaurant',
      ].find((category) => category === element)
    ) {
      newObject.all.push(element)
      newObject.Food.push(element)
    }
  })
  return newObject
}

export default createGroupCategories
