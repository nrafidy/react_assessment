import { AppBar, Box, Button, ButtonGroup, Toolbar, makeStyles } from "@material-ui/core";
import React from "react";
import DataUsageIcon from "@material-ui/icons/DataUsage";
import { KeyboardArrowDown, MoreHoriz } from "@material-ui/icons";

export default function Appbar({ newClasses }) {
	const classes = useStyles();

	return (
		<AppBar position="absolute" className={newClasses}>
			<Toolbar
			// className={classes.toolbar}
			>
				<ButtonGroup>
					<Button className={classes.btnProject}>
						<Box>Project name</Box>
						<KeyboardArrowDown />
					</Button>
				</ButtonGroup>
				<ButtonGroup>
					<Button className={classes.btnDev}>
						<Box>Development</Box>
						<KeyboardArrowDown />
					</Button>
					<Button className={classes.btnDev}>
						<MoreHoriz />
					</Button>
				</ButtonGroup>
				<Button variant="contained" color="primary" className={classes.btnCommit} startIcon={<DataUsageIcon />}>
					Commit (2files)
				</Button>
			</Toolbar>
		</AppBar>
	);
}

const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
		color: "white",
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
	inputLabel: {
		color: "white",
	},
	btnDev: {
		color: "white",
		borderColor: "grey",
		textTransform: "capitalize",
	},
	btnProject: {
		border: "none",
		color: "white",
		textTransform: "capitalize",
	},
	btnCommit: {
		textTransform: "capitalize",
		borderRadius: "5px",
		marginLeft: "15px",
	},
}));
