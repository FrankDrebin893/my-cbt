import * as axios from 'axios';
import { RationalResponse, RationalResponseEntry } from '../interfaces/RationalResponse';

export function postRationalResponse(request: AddRationalResponseCommand):Promise<number> {
    return axios.default.post("https://localhost:44363/rationalresponse", request);
}

export function getRationalResponses():Promise<Array<RationalResponse>> {
    return axios.default.get("https://localhost:44363/rationalresponse/getall")
        .then(response => response.data);
}

export function getRationalResponseById(id: number):Promise<RationalResponse> {
    return axios.default.get(`https://localhost:44363/rationalresponse/getbyid?id=${id}`)
        .then(response => response.data);
}

export interface AddRationalResponseCommand {
    Entries: Array<RationalResponseEntry>
}