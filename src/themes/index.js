import PropTypes from 'prop-types';
import { useMemo } from 'react';

// material-ui
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// project import
import MtMuiTheme from './mt-mui-theme';
import MtTypography from './mt-typography';
import MtCustomShadows from './mt-shadows';
import componentsOverride from './overrides';

// ==============================|| DEFAULT THEME - MAIN  ||============================== //

export default function ThemeCustomization({ children }) {
    // Mantis (免費版) 基於原生 mui theme 加入更多顏色:
    //  原生 mui 'dark' theme 會被 mantis 覆寫成 light
    //  然而使用 'dark' 才能顯示後續 mantis 的陰影效果
    const themeRef = MtMuiTheme('dark');
    // Mantis 所使用字型與大小
    const themeTypography = MtTypography(`'Public Sans', sans-serif`);
    // Mantis 陰影
    const themeCustomShadows = useMemo(() => MtCustomShadows(themeRef), [themeRef]);
    // 最後合成的 json 資料結構 用來生成 最後的 theme
    const themeOptions = useMemo(
        () => ({
            // breakpoints: {
            //     values: {
            //         xs: 0,
            //         sm: 768,
            //         md: 1024,
            //         lg: 1266,
            //         xl: 1536
            //     }
            // },
            // direction: 'ltr',
            mixins: {
                // LETIAN modified
                toolbar: {
                    minHeight: 50,
                    paddingTop: 5,
                    paddingBottom: 5
                }
            },
            palette: themeRef.palette,
            customShadows: themeCustomShadows,
            typography: themeTypography
        }),
        [themeRef, themeTypography, themeCustomShadows]
    );

    // 最後總成的 theme
    const themes = createTheme(themeOptions);
    // 覆改 原生 mui components 的 css style
    themes.components = componentsOverride(themes);

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={themes}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </StyledEngineProvider>
    );
}

ThemeCustomization.propTypes = {
    children: PropTypes.node
};
