
const vehiclesService = (axios) => {
  const getAllVehicles = () => {
    return axios.get(`/vehicle_data`)
        .then(res => {
        // console.log(res.data)
          return res.data.data;
        }).catch(err => {
          if (err.response) {
            console.log(err.response.data)
            return err.response.data;
          }
        })
  }
  return { getAllVehicles }
}

export { vehiclesService };