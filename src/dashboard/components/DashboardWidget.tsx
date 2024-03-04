import * as React from 'react';
import { Card, CardHeader, CardContent, Typography, Box } from '@mui/material';
import { useTranslate } from 'react-admin';

const styles = {
    body: { padding: 0, overflowY: 'auto' },
};

const DashboardWidget = (props: {
    children?: any;
    title?: string;
    height?: string;
}) => {
    const { children, height, title } = props;
    const translate = useTranslate();

    return (
        <Box sx={{width: '100%'}}>
            {title && <Typography variant="h6" component="h3" gutterBottom>{title}</Typography>}
            <Card>
                <CardContent style={styles.body}>
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
