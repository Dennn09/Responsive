import { reduxDataMoviePopuler } from "../../services/API-BINAR/get-data-movie-populer-binar";
import { setData } from "../reducers/movie/DataMoviePopuler";


export const dataMovie = () => (dispatch) => {
    return reduxDataMoviePopuler().then((result) => {      
        console.log(result)
        dispatch(setData(result))
        return true
    }).catch((err) => {
        
    });
}







// export const reduxDataMoviePopuler = async (page) => {
//     return await http2.get(API_ENDPOINT.NOW_POPULER_BINAR, page)
// }

// export const LoginUserRe = (input) => (dispatch) => {
//     LoginRedux(input)
//       .then((result) => {
//         CookieStorage.set(CookieKeys.AuthToken, result.data.data.token);
//         dispatch(setToken(result.data.data.token));
//         dispatch(setIsLoggedIn(true));
//         window.location.href = "/dashboard";
//         console.log(result);
//       })
//       .catch((err) => {
//         console.log(err, "ini eror");
//         //  alert(err.response.data.message, "ini eror")
//         toast.error(err.response.data.message);
//       });