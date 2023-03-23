// material-ui
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

// LETIAN
import { brandBgGradient } from 'config';

// ==============================|| DRAWER HEADER - STYLED ||============================== //

const DrawerHeaderStyled = styled(Box, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
    ...theme.mixins.toolbar,
    display: 'flex',
    alignItems: 'center',
    justifyContent: open ? 'flex-start' : 'center',
    paddingLeft: theme.spacing(open ? 3 : 0),
    // color: theme.palette.common.white,
    backgroundImage: brandBgGradient(theme),
    borderRadius: '0px 0px 0px 16px'
}));

export default DrawerHeaderStyled;
