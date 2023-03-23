// material-ui
import { Button, CardMedia, Link, Stack, Typography } from '@mui/material';
import AnimateButton from 'components/@extended/AnimateButton';

// project import
import MainCard from 'components/MainCard';

// assets
import theLogo from 'assets/images/icons/ChatGPT_logo.svg';
// import theLogo from 'assets/images/users/avatar-letian.jpg';

// ==============================|| DRAWER CONTENT - NAVIGATION CARD ||============================== //

const NavCard = () => {
    const theURL = 'https://chat.openai.com/';
    const title = 'chatGPT';
    const description = '是個不錯用的工具';
    // const theURL = 'https://www.facebook.com/letian.chang';
    // const title = '我的FB';
    // const description = '';
    return (
        <MainCard sx={{ bgcolor: 'grey.50', m: 3 }}>
            <Stack alignItems="center" spacing={1.5}>
                <CardMedia component="img" image={theLogo} sx={{ width: 72 }} />
                <Stack alignItems="center">
                    <Typography variant="h5">{title}</Typography>
                    <Typography variant="h6" color="secondary">
                        {description}
                    </Typography>
                </Stack>
                <AnimateButton>
                    <Button component={Link} target="_blank" href={theURL} variant="contained" color="success" size="small">
                        Go
                    </Button>
                </AnimateButton>
            </Stack>
        </MainCard>
    );
};

export default NavCard;
