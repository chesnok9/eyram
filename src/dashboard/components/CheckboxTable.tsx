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
                '.MuiDataGrid-cell, .MuiDataGrid-columnHeaderTitle': {
                    fontSize: '12px',
                },
            }}
        />
    );
};

export default CheckboxTable;
