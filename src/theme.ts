import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
    /** Change font  */
    typography: {
        fontFamily: `"Archivo", "Roboto", "Helvetica", "Arial", sans-serif`,
    }
});

export default theme;