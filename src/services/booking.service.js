
const booking = (axios) => {
  const createBooking = (params) => {
    return new Promise((resolve, reject) => {
      axios.post(`/createbooking`, params)
        .then(res => {
          resolve(res.data);
        }).catch(err => {
          if (err.response) {
            reject(err.response);
          }
        })
    })
  }
  return { createBooking }
}

export { booking };