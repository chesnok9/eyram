import * as React from 'react';
import { ReactElement, ReactNode } from 'react';
import {
    List,
    MenuItem,
    ListItemIcon,
    Typography,
    Collapse,
    Tooltip,
} from '@mui/material';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ArrowForward from '@mui/icons-material/ArrowForward';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useTranslate, useSidebarState } from 'react-admin';

interface Props {
    dense: boolean;
    handleToggle?: () => void;
    // icon: ReactElement;
    isOpen?: boolean;
    name: string;
    children?: ReactNode;
}

const CollapsedList = (props: Props) => {
    const { isOpen, name, children, dense } = props;
    const translate = useTranslate();
    const [open, setOpen] = React.useState(isOpen);

    const [sidebarIsOpen] = useSidebarState();

    const header = (
        <MenuItem
            dense={dense}
            onClick={() => setOpen(!open)}
            sx={{
                paddingLeft: 1,
                '& .MuiListItemIcon-root': { minWidth: '24px' },
            }}
        >
            <ListItemIcon sx={{ minWidth: 2 }}>
                {open ? <ExpandMore /> : <KeyboardArrowRightIcon />}
            </ListItemIcon>
            <Typography variant="inherit" color="textSecondary">
                {name}
            </Typography>
        </MenuItem>
    );

    return (
        <div>
            {header}
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List
                    dense={dense}
                    component="div"
                    disablePadding
                    sx={{
                        '& .MuiMenuItem-root': {
                            transition:
                                'padding-left 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms',
                            paddingLeft: (theme) =>
                                sidebarIsOpen
                                    ? theme.spacing(4)
                                    : theme.spacing(2),
                        },
                    }}
                >
                    {children}
                </List>
            </Collapse>
        </div>
    );
};

export default CollapsedList;
