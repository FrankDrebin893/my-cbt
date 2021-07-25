import { Box, Paper } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import React from 'react';
import { Button, TextField } from '../components/styled/Input';
import * as journalApi from '../api/JournalApi';
import { useAuth0 } from '@auth0/auth0-react';
import { JournalEntry } from '../interfaces/Journal';
import { getJournalEntriesByUserId } from '../api/JournalApi';

export const JournalHomePage = (props: any) => {
    const [textFieldState, setTextFieldState] = React.useState<string>("");
    const [journalEntryState, setJournalEntryState] = React.useState<JournalEntry[]>();
    const { getAccessTokenSilently, user } = useAuth0();
    const fetchJournalEntries = () => {
        return getAccessTokenSilently({ audience: process.env.REACT_APP_BACKEND_BASE_URI })
            .then((token) => journalApi.getJournalEntriesByUserId(user.sub, token))
            .then((entries) => setJournalEntryState(entries))
            .catch(reason => {
                console.log("Failed:", reason);
            });
    };

    //const fetchEntriesCallback = React.useCallback(() => { return fetchEntriesCallback() });

    React.useEffect(() => {
        fetchJournalEntries();
    });

    const postJournalEntry = (entryContent: string) => {
        console.log("Posting journal entry with content", entryContent);
        return getAccessTokenSilently({ audience: process.env.REACT_APP_BACKEND_BASE_URI })
            .then((token) => journalApi.postJournalEntry({ EntryContent: entryContent, UserId: user.sub }, token))
            .then(() => fetchJournalEntries())
            .catch(reason => {
                console.log("Failed:", reason);
            });
    }
    return (
        <div>
            <Typography variant="h4">Your journal</Typography>
            <Typography variant="h5">Recent journal entries</Typography>
            <Paper>
                <Box>
                    <Box>
                        <form>
                            <TextField onChange={e => setTextFieldState(e.target.value)} />
                            <Box>
                                <Button onClick={() => postJournalEntry(textFieldState)}>Save</Button>
                            </Box>
                        </form>
                    </Box>
                </Box>
                <Box>
                    Display recent journal entries here
                     {journalEntryState?.map((entry) => {
                         return (<div key={"journalidkey"+entry.id}>{entry.entryContent}</div>);
                     })}
                </Box>
            </Paper>
        </div>
    );
}

export default JournalHomePage;