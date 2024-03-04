import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const styles = {
    row: { fontSize: '12px' },
};

const CheckboxTable = ( props: any ) => {
    const {rows, columns} = props;

    const columsSorting = columns.map(col => ({...col, sortable: col.sortable ?? false}));
    
    return (
        <DataGrid
            rows={rows}
            columns={columsSorting}
            columnHeaderHeight={40}
            rowHeight={40}
            density="compact"
            checkboxSelection
            hideFooter
            disableColumnMenu
            sx={{
                '& .MuiDataGrid-cell, & .MuiDataGrid-columnHeaderTitle': {
                    fontSize: '12px',
                    // padding: 0
                    // paddingLeft: 0
                },
                '& .MuiCheckbox-root': {
                    transform: "scale(0.8)",
                    padding: 0
                },
                '& .MuiDataGrid-cellCheckbox': {
                    // minWidth: '30px !important',
                    // maxWidth: '30px !important' 
                },
                '& .MuiDataGrid-columnHeaderCheckbox': {
                    // minWidth: '30px !important',
                    // maxWidth: '30px !important' 
                },
                '& .MuiDataGrid-columnHeader': {
                    // minWidth: '30px !important',
                    // width: '30px !important'
                    // paddingLeft: 0
                },

            }}
        />
    );
};

export default CheckboxTable;
