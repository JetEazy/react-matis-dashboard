// material-ui
import { createTheme } from '@mui/material/styles';
// third-party 中國螞蟻
import { presetPalettes } from '@ant-design/colors';
// project import
import MtPaletteColors from './mt-palette-colors';

// ==============================|| DEFAULT THEME - PALETTE  ||============================== //

const MtMuiTheme = (mode) => {
    // 中國螞蟻 預設 palettes
    const colors = presetPalettes;
    // Mantis 擴增 灰色群 (primary)
    const greyPrimary = [
        '#ffffff',
        '#fafafa',
        '#f5f5f5',
        '#f0f0f0',
        '#d9d9d9',
        '#bfbfbf',
        '#8c8c8c',
        '#595959',
        '#262626',
        '#141414',
        '#000000'
    ];
    // Mantis 擴增 灰色群 (Ascent)
    const greyAscent = ['#fafafa', '#bfbfbf', '#434343', '#1f1f1f'];
    // Mantis 擴增 灰色群 (Constant)
    const greyConstant = ['#fafafb', '#e6ebf1'];
    // Mantis 覆寫 中國螞蟻 colors 的 灰色群
    colors.grey = [...greyPrimary, ...greyAscent, ...greyConstant];
    // Mantis 根據 中國螞蟻 colors 重新擴增顏色
    const paletteColors = MtPaletteColors(colors);
    console.log(mode);
    // Mantis 使用 以上顏色 覆寫 Mui 原生 Theme
    return createTheme({
        palette: {
            mode: mode,
            common: {
                black: '#000',
                white: '#fff'
            },
            ...paletteColors,
            text: {
                primary: paletteColors.grey[700],
                secondary: paletteColors.grey[500],
                disabled: paletteColors.grey[400]
            },
            action: {
                disabled: paletteColors.grey[300]
            },
            divider: paletteColors.grey[200],
            background: {
                paper: paletteColors.grey[0],
                default: paletteColors.grey.A50
            }
        }
    });
};

export default MtMuiTheme;
