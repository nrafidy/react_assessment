import { Chip, Grid, Paper, Typography, makeStyles } from "@material-ui/core";
import React from "react";
import Tree from "./Tree";

export default function LeftPanel() {
	const classes = useStyles();

	return (
		<Paper className={classes.main}>
			<div className={classes.appBarSpacer}></div>
			<Typography variant="h5">Files</Typography>
			<Grid container>
				<Grid container item xs={12} spacing={1} className={classes.chipRow}>
					<Grid item>
						<Chip label="Config" className={classes.chip} />
					</Grid>
					<Grid item className={classes.verticalCenter}>
						dataform
					</Grid>
				</Grid>
				<Grid container item xs={12} spacing={1} className={classes.chipRow}>
					<Grid item>
						<Chip label="Config" className={classes.chip} />
					</Grid>
					<Grid item className={classes.verticalCenter}>
						package.loc
					</Grid>
				</Grid>
				<Grid container item xs={12} spacing={1} className={classes.chipRow}>
					<Grid item>
						<Chip label="Config" className={classes.chip} />
					</Grid>
					<Grid item className={classes.verticalCenter}>
						package
					</Grid>
				</Grid>
			</Grid>
			<Tree />
		</Paper>
	);
}

const useStyles = makeStyles((theme) => ({
	main: {
		backgroundColor: "#3d4b56",
		color: "white",
		lineHeight: "center",
		borderRadius: 0,
		padding: 15,
		maxWidth: 300,
	},
	chip: {
		backgroundColor: "#4c8e9a",
		color: "white",
	},
	chipRow: {
		marginTop: "10px",
	},
	appBarSpacer: theme.mixins.toolbar,
	verticalCenter: {
		display: "flex",
		alignItems: "center",
	},
}));
