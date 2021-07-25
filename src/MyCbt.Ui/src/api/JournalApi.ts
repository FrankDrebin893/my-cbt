import * as axios from 'axios';
import {
	JournalEntry
} from '../interfaces/Journal';

export function postJournalEntry(
	request: AddJournalEntryCommand,
	accessToken: string
): Promise<number|null> {
	return axios.default.post(
		process.env.REACT_APP_BACKEND_BASE_URI + '/api/journal/AddJournalEntry',
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
	userId: string,
	accessToken: string
): Promise<JournalEntry[]> {
	return axios.default
		.get(
			process.env.REACT_APP_BACKEND_BASE_URI +
				`/api/journal/GetJournalEntriesByUserId?userId=${encodeURI(userId)}`,
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
