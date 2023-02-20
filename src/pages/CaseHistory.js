import { useState } from "react";
// @mui
import { Box, Table, Stack, MenuItem, TableRow, Checkbox, TableBody, Container, TableCell, IconButton, Typography, TablePagination, TableContainer } from "@mui/material";
import { useTheme, styled } from "@mui/material/styles";
// layout
import Layout from "src/layout";
// components
import Iconify from "src/components/iconify";
import MenuPopover from "src/components/menu-popover";
import { TableHead, TableToolbar, stableSort, getComparator } from "src/components/table";

// ----------------------------------------------------------------------

const Root = styled("div")(({ theme }) => ({
	minHeight: "100vh",
	paddingTop: "120px",
	paddingBottom: "60px",
	background: theme.palette.background.gradation,
}));

const rows = [];

export default function CaseHistory() {
	const theme = useTheme();
	const [order, setOrder] = useState("asc");
	const [orderBy, setOrderBy] = useState("calories");
	const [selected, setSelected] = useState([]);
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(5);
	const [openPopover, setOpenPopover] = useState(null);

	const handleOpenPopover = (event) => {
		setOpenPopover(event.currentTarget);
	};

	const handleClosePopover = () => {
		setOpenPopover(null);
	};

	const handleRequestSort = (event, property) => {
		const isAsc = orderBy === property && order === "asc";
		setOrder(isAsc ? "desc" : "asc");
		setOrderBy(property);
	};

	const handleSelectAllClick = (event) => {
		if (event.target.checked) {
			const newSelected = rows.map((n) => n.name);
			setSelected(newSelected);
			return;
		}
		setSelected([]);
	};

	const handleClick = (event, name) => {
		const selectedIndex = selected.indexOf(name);
		let newSelected = [];

		if (selectedIndex === -1) {
			newSelected = newSelected.concat(selected, name);
		} else if (selectedIndex === 0) {
			newSelected = newSelected.concat(selected.slice(1));
		} else if (selectedIndex === selected.length - 1) {
			newSelected = newSelected.concat(selected.slice(0, -1));
		} else if (selectedIndex > 0) {
			newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
		}

		setSelected(newSelected);
	};

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	const isSelected = (name) => selected.indexOf(name) !== -1;

	return (
		<Root>
			<Container maxWidth={false}>
				<Box
					sx={{
						boxShadow: "0px 0px 15px rgba(60, 72, 196, 0.1)",
						borderRadius: 2,
						background: theme.palette.common.white,
					}}
				>
					<TableToolbar numSelected={selected.length} />
					<TableContainer>
						<Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle" size="medium">
							<TableHead numSelected={selected.length} order={order} orderBy={orderBy} onSelectAllClick={handleSelectAllClick} onRequestSort={handleRequestSort} rowCount={rows.length} />
							<TableBody>
								{stableSort(rows, getComparator(order, orderBy))
									.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
									.map((row, index) => {
										const isItemSelected = isSelected(row.name);
										const labelId = `enhanced-table-checkbox-${index}`;

										return (
											<TableRow hover role="checkbox" aria-checked={isItemSelected} tabIndex={-1} key={row.name} selected={isItemSelected}>
												<TableCell padding="checkbox">
													<Checkbox
														onClick={(event) => handleClick(event, row.name)}
														color="primary"
														checked={isItemSelected}
														inputProps={{
															"aria-labelledby": labelId,
														}}
													/>
												</TableCell>
												<TableCell component="th" id={labelId} scope="row" padding="none">
													{row.name}
												</TableCell>
												<TableCell align="left">{row.calories}</TableCell>
												<TableCell align="left">{row.fat}</TableCell>
												<TableCell align="left">{row.carbs}</TableCell>
												<TableCell align="right">
													<IconButton color="primary" onClick={handleOpenPopover}>
														<Iconify icon="eva:more-vertical-fill" />
													</IconButton>
												</TableCell>
											</TableRow>
										);
									})}
							</TableBody>

							<MenuPopover open={openPopover} onClose={handleClosePopover} arrow="right-top" sx={{ width: 140 }}>
								<MenuItem
									onClick={() => {
										handleClosePopover();
									}}
									sx={{ color: "primary.main" }}
								>
									<Iconify icon="eva:eye-outline" />
									ビュー
								</MenuItem>

								<MenuItem
									onClick={() => {
										handleClosePopover();
									}}
									sx={{ color: "primary.main" }}
								>
									<Iconify icon="eva:edit-fill" />
									編集
								</MenuItem>
							</MenuPopover>
						</Table>
						{rows.length === 0 && (
							<Box
								sx={{
									display: "flex",
									width: "100%",
									height: "200px",
									textAlign: "center",
									alignItems: "center",
									justifyContent: "center",
								}}
							>
								<Box
									sx={{
										width: "380px",
										py: "16px",
										color: "error.main",
										border: `1px solid ${theme.palette.error.main}`,
										borderRadius: "8px",
										background: theme.palette.background.pink,
									}}
								>
									<Stack direction="column" justifyContent="center" alignItems="center" spacing={1}>
										<Iconify icon="ph:warning-light" sx={{ height: "40px", width: "40px" }} height="40px" />
										<Typography variant="subTitle">テーストケース履歴がありません</Typography>
									</Stack>
								</Box>
							</Box>
						)}
					</TableContainer>
					{rows.length > 0 && (
						<TablePagination
							labelRowsPerPage="表示件数:"
							rowsPerPageOptions={[5, 10, 25]}
							component="div"
							count={rows.length}
							rowsPerPage={rowsPerPage}
							page={page}
							onPageChange={handleChangePage}
							onRowsPerPageChange={handleChangeRowsPerPage}
						/>
					)}
				</Box>
			</Container>
		</Root>
	);
}
