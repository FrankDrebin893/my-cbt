import { Box, Paper } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import React from 'react';
import { Button, TextField } from '../components/styled/Input';

export const JournalHomePage = (props: any) => {
    const [textFieldState, setTextFieldState] = React.useState<string>("");
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
                                <Button onClick={() => console.log("Saving")}>Save</Button>
                            </Box>
                        </form>
                    </Box>
                </Box>
                <Box>
                    Display recent journal entries here
                </Box>
            </Paper>
        </div>
    );
}

export default JournalHomePage;