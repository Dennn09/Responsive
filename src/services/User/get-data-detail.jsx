import { useQuery } from "@tanstack/react-query"
import http from "../../utils/htpp"
import { API_ENDPOINT } from "../../utils/api-endpoint"

const fetchDataMovieDetail = async (id) => {
//   try {
//     // Append 'videos' to the 'append_to_response' parameter
//     const { data } = await http.get(`${API_ENDPOINT.DETAIL}${id}?api_key=${process.env.REACT_APP_KEY}&append_to_response=videos`);
        const { data } = await http.get(`${API_ENDPOINT.DETAIL}${id}?api_key=${process.env.REACT_APP_KEY}&append_to_response=videos`);
        return data
//     // Check if the 'videos' property exists in the response
//     if (data.videos) {
//       return data;
//     } else {
//       throw new Error('Video tidak ada.');
//     }
//   } catch (error) {
//     throw error;
//   }
// };
}

const useMovieDataQueryDetail = (id) => {
  return useQuery(["movieData", id], () => fetchDataMovieDetail(id));
};

export {useMovieDataQueryDetail}
