import { Box, Paper } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import React from 'react';
import { Button, TextField } from '../components/styled/Input';

export const JournalHomePage = (props: any) => {
    return (
        <div>
            <Typography variant="h4">Your journal</Typography>
            <Typography variant="h5">Recent journal entries</Typography>
            <Paper>
                <Box>
                    <Button>Add new journal entry</Button>
                    <TextField />
                </Box>
                <Box>
                    Display recent journal entries here
                </Box>
            </Paper>
        </div>
    );
}

export default JournalHomePage;