// @mui
import {
  TableRow,
  Checkbox,
  TableCell,
  TableSortLabel,
  TableHead as MuiTableHead,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
// ----------------------------------------------------------------------

const headCells = [
  {
    id: "id",
    disablePadding: true,
    label: "ケースID",
  },
  {
    id: "name",
    disablePadding: false,
    label: "名称",
  },
  {
    id: "comment",
    disablePadding: false,
    label: "コメント",
  },
  {
    id: "created_at",
    disablePadding: false,
    label: "作成日付",
  },
];

export default function TableHead({
  onSelectAllClick,
  order,
  orderBy,
  numSelected,
  rowCount,
  onRequestSort,
}) {
  const theme = useTheme();

  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <MuiTableHead>
      <TableRow sx={{ backgroundColor: theme.palette.grey[100] }}>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align="left"
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
            </TableSortLabel>
          </TableCell>
        ))}
        <TableCell/>
      </TableRow>
    </MuiTableHead>
  );
}
