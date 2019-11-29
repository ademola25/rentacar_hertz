
const companyservice = (axios) => {
  const getCompanyUsers = () => {
  return  axios.get(`/companies`)
        .then(res => {
         // console.log(res.data)
          return res.data.data;
        }).catch(err => {
          if (err.response) {
          return err.response;
          }
        })
  }
  const addUser = (data) => {
  
      axios.post(`/companyusers`,data)
        .then(res => {
          return res.data;
        }).catch(err => {
          if (err.response) {
            return err.response;
          }
        })
 
  }
  return { getCompanyUsers, addUser }
}

export { companyservice };