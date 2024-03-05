import * as React from 'react';
import { AppBar, TitlePortal } from 'react-admin';
import { Box, useMediaQuery, Theme, Stack } from '@mui/material';

import { AppBarToolbar } from './AppBarToolbar';
import SearchAppBar from '../dashboard/components/Search';
import Logo from '../assets/images/logo.png';

const CustomAppBar = () => {
    const isLargeEnough = useMediaQuery<Theme>((theme) =>
        theme.breakpoints.up('sm')
    );
    return (
        <AppBar color="secondary" toolbar={<AppBarToolbar />}>
            <Stack spacing={{ xs: 1, sm: 11 }} direction="row">
                <img src={Logo} alt="" height="30"/>
                {isLargeEnough && <SearchAppBar />}
            </Stack>
            {isLargeEnough && <Box component="span" sx={{ flex: 1 }} />}
        </AppBar>
    );
};

export default CustomAppBar;
