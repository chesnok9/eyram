import * as React from 'react';
import { AppBar, TitlePortal } from 'react-admin';
import { Box, useMediaQuery, Theme, Stack } from '@mui/material';

import Logo from './Logo';
import { AppBarToolbar } from './AppBarToolbar';
import SearchAppBar from '../dashboard/components/Search';

const CustomAppBar = () => {
    const isLargeEnough = useMediaQuery<Theme>((theme) =>
        theme.breakpoints.up('sm')
    );
    return (
        <AppBar color="secondary" toolbar={<AppBarToolbar />}>
            <Stack spacing={{ xs: 1, sm: 13.5 }} direction="row">
                <TitlePortal>Logo</TitlePortal>
                {isLargeEnough && <SearchAppBar />}
            </Stack>
            {isLargeEnough && <Box component="span" sx={{ flex: 1 }} />}
        </AppBar>
    );
};

export default CustomAppBar;
