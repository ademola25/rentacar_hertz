const tripsService = (axios) => {

const getAllTrips = () => {
    return axios.get('/trip_report')
                .then(res => {
                    return res.data.data;
                })
                .catch(err => {
                    if(err.response){
                        return err.response.data;
                    }
                })
}

return { getAllTrips}

}
export {tripsService}