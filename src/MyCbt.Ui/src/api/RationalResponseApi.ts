import * as axios from 'axios';
import {
	RationalResponse,
	RationalResponseEntry,
} from '../interfaces/RationalResponse';

export function postRationalResponse(
	request: AddRationalResponseCommand,
	accessToken: string
): Promise<number|null> {
    console.log("Token posted:", accessToken);
	return axios.default.post(
		process.env.REACT_APP_BACKEND_BASE_URI + '/api/rationalresponse',
		request,
        {
            headers: createHeaderWithAuthorization(accessToken),
        }
	).then(response => {
		if (response.status === 200) {
			return response.data;
		}

		return null;
	} );
}

export function getRationalResponses(
	accessToken: string
): Promise<Array<RationalResponse>> {
	return axios.default
		.get(
			process.env.REACT_APP_BACKEND_BASE_URI + '/api/rationalresponse/getall',
			{
				headers: createHeaderWithAuthorization(accessToken),
			}
		)
		.then((response) => response.data);
}

export function getRationalResponseById(
	id: number,
	accessToken: string
): Promise<RationalResponse> {
	return axios.default
		.get(
			process.env.REACT_APP_BACKEND_BASE_URI +
				`/api/rationalresponse/getbyid?id=${id}`,
                {
                    headers: createHeaderWithAuthorization(accessToken),
                }
		)
		.then((response) => response.data);
}

function createHeaderWithAuthorization(token: string): any {
	return { Authorization: `Bearer ${token}` };
}

export interface AddRationalResponseCommand {
    Entries: Array<RationalResponseEntry>;
    UserId: string;
}
