// ==============================|| OVERRIDES - ICON BUTTON ||============================== //

export default function IconButton(theme) {
    return {
        MuiIconButton: {
            styleOverrides: {
                root: {
                    borderRadius: 5
                },
                sizeLarge: {
                    width: theme.spacing(5.0),
                    height: theme.spacing(5.0),
                    // width: '1.25rem',
                    // height: '1.25rem',
                    fontSize: '1.25rem'
                },
                sizeMedium: {
                    width: theme.spacing(3.5),
                    height: theme.spacing(3.5),
                    // width: '1rem',
                    // height: '1rem',
                    fontSize: '1rem'
                },
                sizeSmall: {
                    width: theme.spacing(2.75),
                    height: theme.spacing(2.75),
                    fontSize: '0.75rem'
                }
            }
        }
    };
}
