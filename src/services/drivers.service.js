
const driversService = (axios) => {
  const getAllDrivers = () => {
  
    return axios.get(`/driver_info`)
        .then(res => {
        //  console.log(res.data)
          return res.data.data;
        }).catch(err => {
          if (err.response) {
            return err.response;
          }
        })
  }
  return { getAllDrivers }
}

export { driversService };