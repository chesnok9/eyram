import * as React from 'react';
import { Card, CardHeader, CardContent, Typography, Box, Stack } from '@mui/material';
import { useTranslate } from 'react-admin';

const styles = {
    body: { padding: 0, overflowY: 'auto' },
};

const DashboardWidget = (props: {
    children?: any;
    title?: string;
    height?: string;
    actions? : any;
}) => {
    const { children, height, title, actions } = props;
    const translate = useTranslate();

    return (
        <Box sx={{width: '100%'}}>
            <Stack direction="row" justifyContent="space-between">
                {title && <Typography variant="h6" component="h3" gutterBottom>{title}</Typography>}
                {actions}
            </Stack>
            <Card>
                <CardContent sx={styles.body}>
                    <div style={{ width: '100%', height: height ?? 'auto' }}>
                        {children}
                    </div>
                </CardContent>
            </Card>
        </Box>
    );
};

interface TotalByDay {
    date: number;
    total: number;
}

export default DashboardWidget;
