// ==============================|| THEME CONFIG  ||============================== //

const config = {
    defaultPath: '/dashboard/default',
    fontFamily: `'Public Sans', sans-serif`,
    i18n: 'en',
    miniDrawer: false,
    container: true,
    mode: 'light',
    presetColor: 'default',
    themeDirection: 'ltr'
};

export default config;
export const drawerWidth = 260;

export const twitterColor = '#1DA1F2';
export const facebookColor = '#3b5998';
export const linkedInColor = '#0e76a8';

// ==============================|| LETIAN:暫改 ||============================== //
// eslint-disable-next-line no-unused-vars
// export const appBarBgGradient = (theme) => 'linear-gradient(45deg, #FF8E53 0%, #FE6B8B 70%)';
export const appBarBgGradient = (theme) => `linear-gradient(-1deg, ${theme.palette.primary.dark} 20%, ${theme.palette.primary[200]} 80%)`;
// eslint-disable-next-line no-unused-vars
// export const brandBgGradient = (theme) => 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)';
export const brandBgGradient = (theme) => `linear-gradient(5deg, ${theme.palette.primary.main} 20%, ${theme.palette.primary[200]} 80%)`;
