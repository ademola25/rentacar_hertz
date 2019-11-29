

const auth = (axios) => {
  const userLogin = (user) => {
   
    return axios.post(`http://demo.c-ileasing.com/hertz/api/mlogin`, user)
        .then(res => {
          return res.data;
        })
      }

  const logout = () => {
    return axios.post(`/mlogout`)
        .then(res => {
          localStorage.removeItem('token');
          return res.data;
        }).catch(err => {
          if (err.response) {
            return err.response;
          }
        })
    
  }
  return {
    userLogin, logout
  }
}

export { auth };