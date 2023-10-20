import { useMutation, useQuery } from "@tanstack/react-query"
import { API_ENDPOINT } from "../../utils/api-endpoint"
import http2 from "../../utils/http2";

//unutk nge hit API
const RegisterUser = async (input) => {

    const { data } = await http2.post(API_ENDPOINT.Register, input)
    return data
}


const UseCreateUser = () => {
    return useMutation(RegisterUser);
}

export {RegisterUser, UseCreateUser}