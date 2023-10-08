import { useQuery } from "@tanstack/react-query"
import http from "../../utils/htpp"
import { API_ENDPOINT } from "../../utils/api-endpoint"

//unutk nge hit API
const fetchDataMoviePopuler = async ({queryKey}) => {
    // const { data } = await http.get(`${API_ENDPOINT.NOW_POPULER}?page=${page ? page :1}`)
    // return data
    const [_key, _params] = queryKey;
    const { data } = await http.get(_key, { params : _params})
    console.log(data , "data")
    return data
}


const useMovieDataPopulerQuery = (options) => {
    // return useQuery(["userDataMoviePopuler", page], () => fetchDataMoviePopuler(page))
    return useQuery([API_ENDPOINT.NOW_POPULER, options], fetchDataMoviePopuler)
}

export {fetchDataMoviePopuler, useMovieDataPopulerQuery}