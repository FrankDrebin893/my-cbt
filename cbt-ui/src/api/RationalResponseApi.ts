import * as axios from 'axios';
import { RationalResponse, RationalResponseEntry } from '../interfaces/RationalResponse';

export function postRationalResponse(request: AddRationalResponseCommand, accessToken: string):Promise<number> {
    return axios.default.post(process.env.REACT_APP_BACKEND_BASE_URI + "/api/rationalresponse", request);
}

export function getRationalResponses(accessToken: string):Promise<Array<RationalResponse>> {
    return axios.default.get(process.env.REACT_APP_BACKEND_BASE_URI + "/api/rationalresponse/getall")
        .then(response => response.data);
}

export function getRationalResponseById(id: number, accessToken: string):Promise<RationalResponse> {
    return axios.default.get(process.env.REACT_APP_BACKEND_BASE_URI + `/api/rationalresponse/getbyid?id=${id}`)
        .then(response => response.data);
}

export interface AddRationalResponseCommand {
    Entries: Array<RationalResponseEntry>
}