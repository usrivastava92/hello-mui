import {PaletteMode, PaletteOptions} from "@mui/material";

const lightModePallet: PaletteOptions = {
    mode: 'light',
    background: {
        default: '#1C3FAA',
    },
    text: {
        primary:  '#fff'
    }
};

const darkModePallet: PaletteOptions = {
    mode: 'light',
    background: {
        default: '#232a3b',
    },
    text: {
       primary:  '#fff'
    }
};

export const getDesignTokens = (mode: PaletteMode) => {
    return mode === 'light' ? {...lightModePallet} : {...darkModePallet};
};