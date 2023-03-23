import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Stack, Chip, Typography } from '@mui/material';

// project import
import DrawerHeaderStyled from './DrawerHeaderStyled';
import Logo from 'components/Logo';

// ==============================|| DRAWER HEADER ||============================== //

const DrawerHeader = ({ open }) => {
    const theme = useTheme();

    return (
        // only available in paid version
        <DrawerHeaderStyled theme={theme} open={open}>
            <Stack direction="row" spacing={2} alignItems="center">
                <Logo />
                <Typography variant="h5">Hello LeTian</Typography>
                {/* 
                <Chip
                    label={process.env.REACT_APP_VERSION}
                    size="small"
                    sx={{ display: 'none', height: 16, '& .MuiChip-label': { fontSize: '0.625rem', py: 0.25 } }}
                    component="span"
                    // component="a"
                    // href="https://github.com/codedthemes/mantis-free-react-admin-template"
                    // target="_blank"
                    // clickable
                />
                */}
            </Stack>
        </DrawerHeaderStyled>
    );
};

DrawerHeader.propTypes = {
    open: PropTypes.bool
};

export default DrawerHeader;
