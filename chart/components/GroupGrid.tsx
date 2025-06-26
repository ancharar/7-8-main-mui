import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import Container from "@mui/material/Container";
import { ruRU } from "@mui/x-data-grid/locales";
import { tGroup } from "../groupdata";

type GroupProps = {
    data: tGroup;
};

function GroupGrid({ data }: GroupProps) {
    const columns: GridColDef[] = [
        { field: "Группа", headerName: "Группа", flex: 1 },
        { field: "Минимальная высота", headerName: "Минимальная высота", flex: 1 },
        { field: "Максимальная высота", headerName: "Максимальная высота", flex: 1 },
        { field: "Средняя высота", headerName: "Средняя высота", flex: 1 },
    ];

    const rows: GridRowsProp = data;

    return (
        <Container maxWidth="md" sx={{ height: '700px', mt: '20px' }}>
            <DataGrid
                localeText={ruRU.components.MuiDataGrid.defaultProps.localeText}
                showToolbar={true}
                rows={rows}
                columns={columns}
            />
        </Container>
    );
}

export default GroupGrid;