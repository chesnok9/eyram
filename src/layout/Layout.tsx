import * as React from 'react';
import { Layout, LayoutProps, Sidebar } from 'react-admin';
import AppBar from './AppBar';
import Menu from './Menu';
import { styled } from '@mui/material';

const CustomLayout = styled(Layout)({
    '& .RaLayout-content': {
        color: '#fff',
        background: '#000000',
    },
});

const sidebar = styled(Sidebar)({
    '& .RaSidebar-fixed': {
        color: '#fff',
        background: '#000000',
    },
    '& .MuiPaper-root': {
        color: '#fff',
        background: '#000000',
    },
    '& .MuiButtonBase-root, & .MuiButtonBase-root svg, & .RaMenuItemLink-active': {
        color: '#fff !important',
    }
});

export default (props: LayoutProps) => (
    <CustomLayout {...props} appBar={AppBar} menu={Menu} sidebar={sidebar} />
);
