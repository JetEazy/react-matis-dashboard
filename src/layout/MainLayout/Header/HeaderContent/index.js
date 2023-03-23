// material-ui
import { Box, IconButton, Link, useMediaQuery } from '@mui/material';
import { GithubOutlined } from '@ant-design/icons';

// project import
import Search from './Search';
import Profile from './Profile';
import Notification from './Notification';
import MobileSection from './MobileSection';

// ==============================|| HEADER - CONTENT ||============================== //

const HeaderContent = () => {
    const matchesXs = useMediaQuery((theme) => theme.breakpoints.down('md'));
    const showProfileIcon = false;

    return (
        <>
            {!matchesXs && <Search />}
            {matchesXs && <Box sx={{ width: '100%', ml: 1 }} />}

            <Notification />

            <IconButton
                component={Link}
                href="https://github.com/lloydztw"
                target="_blank"
                disableRipple
                color="secondary"
                title="樂天 的 Github"
                sx={{ color: 'text.primary', bgcolor: 'grey.100', ml: 1 }}
            >
                <GithubOutlined />
            </IconButton>

            {showProfileIcon && !matchesXs && <Profile />}
            {showProfileIcon && matchesXs && <MobileSection />}
        </>
    );
};

export default HeaderContent;
