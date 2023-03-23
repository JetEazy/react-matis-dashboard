// material-ui
import { useTheme } from '@mui/material/styles';
import { Avatar } from '@mui/material';

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */
//import logo from 'assets/images/favicon/apple-touch-icon.png';
import userAvatar from 'assets/images/users/avatar-letian.jpg';

// ==============================|| LOGO SVG ||============================== //

const Logo = () => {
    // const theme = useTheme();

    return (
        /**
         * if you want to use image instead of svg uncomment following, and comment out <svg> element.
         *
         * <img src={logo} alt="Mantis" width="100" />
         *
         */
        <>
            {/* <img src={logo} alt="LeTian Logo" width="36px" height="36px" /> */}
            <Avatar alt="profile user" src={userAvatar} sx={{ width: '2.5rem', height: '2.5rem' }} />
        </>
    );
};

export default Logo;
