import { Box, Chip, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import ImageSearchIcon from "@material-ui/icons/ImageSearch";
import DashboardIcon from "@material-ui/icons/Dashboard";
import { Update } from "@material-ui/icons";
import DatasetTree from "./DatasetTree";
import ClearIcon from "@material-ui/icons/Clear";
import CustomTable from "./CustomTable";

export default function BottomPanel() {
	const classes = useStyles();
	return (
		<Grid container className={classes.root}>
			<Grid item xs={12} style={{ borderBottom: "1px solid grey" }}>
				<Box display="flex" ml={2} marginY={2}>
					<Box display="flex">
						<ImageSearchIcon />
						<Box ml={1} className={classes.verticalCenter}>
							Query results
						</Box>
					</Box>
					<Box ml={3} display="flex">
						<DashboardIcon />
						<Box ml={1} className={classes.verticalCenter}>
							Schemas
						</Box>
					</Box>
				</Box>
			</Grid>
			<Grid item xs={12} sm={3} style={{ borderRight: "1px solid grey", padding: 10 }}>
				<Grid container xs={12}>
					<Grid item xs={12}>
						<Box display="flex" ml={2}>
							<Box className={classes.verticalCenter}>Refresh</Box>
							<Update />
						</Box>
					</Grid>
					<Grid item xs={12}>
						<DatasetTree />
					</Grid>
				</Grid>
			</Grid>
			<Grid item xs={12} sm={9}>
				<Grid container xs={12} style={{ borderBottom: "1px solid grey" }}>
					<Grid item xs={12}>
						<Box display="flex" padding={2}>
							<Box>
								<Chip label="view" className={classes.chipOps} />
							</Box>
							<Box ml={2} className={classes.verticalCenter} flexGrow={1}>
								dataset_2_with_ref
							</Box>
							<Box className={classes.verticalCenter}>
								<ClearIcon />
							</Box>
						</Box>
					</Grid>
				</Grid>
				<Box display="flex">
					<CustomTable />
				</Box>
			</Grid>
		</Grid>
	);
}

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: "#24303c",
		height: "40vh",
		overflow: "auto",
		position: "fixed",
		bottom: 0,
	},
	chipOps: {
		backgroundColor: "#355260",
		color: "white",
	},
	verticalCenter: {
		display: "flex",
		alignItems: "center",
	},
}));
