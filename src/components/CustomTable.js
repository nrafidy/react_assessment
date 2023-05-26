import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Box } from "@material-ui/core";

const useStyles = makeStyles({
	// table: {
	// 	minWidth: 650,
	// },
	tableCell: {
		color: "white",
	},
});

export default function CustomTable() {
	const classes = useStyles();

	return (
		<TableContainer component={Box}>
			<Table className={classes.table} size="small" aria-label="a dense table">
				<TableHead>
					<TableRow>
						<TableCell align="left" className={classes.tableCell}>
							Field
						</TableCell>
						<TableCell align="left" className={classes.tableCell}>
							Type
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					<TableRow key={1}>
						<TableCell align="left" className={classes.tableCell}>
							date
						</TableCell>
						<TableCell align="left" className={classes.tableCell}>
							date
						</TableCell>
					</TableRow>
					<TableRow key={1}>
						<TableCell align="left" className={classes.tableCell}>
							device_type
						</TableCell>
						<TableCell align="left" className={classes.tableCell}>
							chter varyingarac
						</TableCell>
					</TableRow>
					<TableRow key={1}>
						<TableCell align="left" className={classes.tableCell}>
							country
						</TableCell>
						<TableCell align="left" className={classes.tableCell}>
							chter varyingarac
						</TableCell>
					</TableRow>
					<TableRow key={1}>
						<TableCell align="left" className={classes.tableCell}>
							sessions
						</TableCell>
						<TableCell align="left" className={classes.tableCell}>
							integer
						</TableCell>
					</TableRow>
					<TableRow key={1}>
						<TableCell align="left" className={classes.tableCell}>
							revenue
						</TableCell>
						<TableCell align="left" className={classes.tableCell}>
							integer
						</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</TableContainer>
	);
}
