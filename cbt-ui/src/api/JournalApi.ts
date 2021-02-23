import * as axios from 'axios';
import {
	JournalEntry
} from '../interfaces/Journal';

export function postRationalResponse(
	request: AddJournalEntryCommand,
	accessToken: string
): Promise<number|null> {
	return axios.default.post(
		process.env.REACT_APP_BACKEND_BASE_URI + '/api/journal/addJournalEntry',
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

export function getJournalEntriesByUserId(
	userId: number,
	accessToken: string
): Promise<JournalEntry[]> {
	return axios.default
		.get(
			process.env.REACT_APP_BACKEND_BASE_URI +
				`/api/journal/getJournalEntriesByUserId?userId=${userId}`,
                {
                    headers: createHeaderWithAuthorization(accessToken),
                }
		)
		.then((response) => response.data);
}

function createHeaderWithAuthorization(token: string): any {
	return { Authorization: `Bearer ${token}` };
}

export interface AddJournalEntryCommand {
    EntryContent: string;
    UserId: string;
}
