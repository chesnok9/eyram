import * as React from 'react';
import { Layout, LayoutProps, Sidebar } from 'react-admin';
import AppBar from './AppBar';
import Menu from './Menu';
import { styled } from '@mui/material';

const CustomLayout = styled(Layout)({
    '& .RaLayout-content': {
        color: '#fff',
        background: '#01579b',
    },
});

const sidebar = styled(Sidebar)({
    '& .RaSidebar-fixed': {
        color: '#fff',
        background: '#01579b',
    },
    '& .MuiPaper-root': {
        color: '#fff',
        background: '#01579b',
    },
    '& .MuiButtonBase-root, & .MuiButtonBase-root svg': {
        color: '#fff',
    }
});

export default (props: LayoutProps) => (
    <CustomLayout {...props} appBar={AppBar} menu={Menu} sidebar={sidebar} />
);
