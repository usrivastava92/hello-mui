import './App.scss'
import {Button, createTheme, CssBaseline, ThemeProvider, useMediaQuery} from "@mui/material";
import React from "react";
import {getDesignTokens} from "./config/theme";

function App() {

    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const theme = React.useMemo(() =>
            createTheme({
                palette: getDesignTokens(prefersDarkMode ? 'dark' : 'light'),
            }),
        [prefersDarkMode],
    );

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Button color={'primary'} >Hello World</Button>
        </ThemeProvider>
    );
}

export default App
