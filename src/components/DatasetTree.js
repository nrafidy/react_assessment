import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import TreeItem from "@material-ui/lab/TreeItem";
import { Grid, Chip, Typography } from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { Visibility } from "@material-ui/icons";

const StyledTreeItem = withStyles((theme) => ({
	iconContainer: {
		"& .close": {
			opacity: 0.3,
		},
	},
	group: {
		marginLeft: 7,
		paddingLeft: 18,
		borderLeft: `1px solid grey`,
	},
}))((props) => <TreeItem {...props} />);

export default function Tree() {
	const classes = useStyles();

	return (
		<TreeView className={classes.root} defaultExpanded={["1"]} defaultCollapseIcon={<KeyboardArrowDownIcon />} defaultExpandIcon={<ChevronRightIcon />}>
			<StyledTreeItem
				nodeId="1"
				label={
					<Grid container wrap="nowrap" spacing={2}>
						<Grid item xs>
							<Typography noWrap className={classes.typo}>
								datafrom_demo
							</Typography>
						</Grid>
					</Grid>
				}
				className={classes.chipRow}
			>
				<StyledTreeItem
					nodeId="2"
					label={
						<Grid container wrap="nowrap" spacing={2}>
							<Grid item>
								<Visibility className={classes.icon} />
							</Grid>
							<Grid item xs>
								<Typography noWrap className={classes.typo}>
									data_set_1
								</Typography>
							</Grid>
						</Grid>
					}
					className={classes.chipRow}
				/>
				<StyledTreeItem
					nodeId="2"
					label={
						<Grid container wrap="nowrap" spacing={2}>
							<Grid item>
								<Visibility className={classes.icon} />
							</Grid>
							<Grid item xs>
								<Typography noWrap className={classes.typo}>
									data_set_2
								</Typography>
							</Grid>
						</Grid>
					}
					className={classes.chipRow}
				/>
				<StyledTreeItem
					nodeId="2"
					label={
						<Grid container wrap="nowrap" spacing={2}>
							<Grid item>
								<Visibility className={classes.icon} />
							</Grid>
							<Grid item xs>
								<Typography noWrap className={classes.typo}>
									data_set_3
								</Typography>
							</Grid>
						</Grid>
					}
					className={classes.chipRow}
				/>
				<StyledTreeItem
					nodeId="2"
					label={
						<Grid container wrap="nowrap" spacing={2}>
							<Grid item>
								<Visibility className={classes.icon} />
							</Grid>

							<Grid item xs>
								<Typography noWrap className={classes.typo}>
									data_set_4
								</Typography>
							</Grid>
						</Grid>
					}
					className={classes.chipRow}
				/>
				<StyledTreeItem
					nodeId="2"
					label={
						<Grid container wrap="nowrap" spacing={2}>
							<Grid item>
								<Visibility className={classes.icon} />
							</Grid>
							<Grid item xs>
								<Typography noWrap className={classes.typo}>
									data_set_5
								</Typography>
							</Grid>
						</Grid>
					}
					className={classes.chipRow}
				/>
			</StyledTreeItem>
			<StyledTreeItem
				nodeId="3"
				label={
					<Grid container wrap="nowrap" spacing={2}>
						<Grid item xs>
							<Typography noWrap className={classes.typo}>
								datafrom_demo
							</Typography>
						</Grid>
					</Grid>
				}
				className={classes.chipRow}
			>
				<StyledTreeItem
					nodeId="4"
					label={
						<Grid container wrap="nowrap" spacing={2}>
							<Grid item>
								<Visibility className={classes.icon} />
							</Grid>
							<Grid item xs>
								<Typography noWrap className={classes.typo}>
									data_set_1
								</Typography>
							</Grid>
						</Grid>
					}
					className={classes.chipRow}
				/>
				<StyledTreeItem
					nodeId="2"
					label={
						<Grid container wrap="nowrap" spacing={2}>
							<Grid item>
								<Visibility className={classes.icon} />
							</Grid>
							<Grid item xs>
								<Typography noWrap className={classes.typo}>
									data_set_2
								</Typography>
							</Grid>
						</Grid>
					}
					className={classes.chipRow}
				/>
				<StyledTreeItem
					nodeId="2"
					label={
						<Grid container wrap="nowrap" spacing={2}>
							<Grid item>
								<Visibility className={classes.icon} />
							</Grid>
							<Grid item xs>
								<Typography noWrap className={classes.typo}>
									data_set_3
								</Typography>
							</Grid>
						</Grid>
					}
					className={classes.chipRow}
				/>
				<StyledTreeItem
					nodeId="2"
					label={
						<Grid container wrap="nowrap" spacing={2}>
							<Grid item>
								<Visibility className={classes.icon} />
							</Grid>
							<Grid item xs>
								<Typography noWrap className={classes.typo}>
									data_set_4
								</Typography>
							</Grid>
						</Grid>
					}
					className={classes.chipRow}
				/>
				<StyledTreeItem
					nodeId="2"
					label={
						<Grid container wrap="nowrap" spacing={2}>
							<Grid item>
								<Visibility className={classes.icon} />
							</Grid>
							<Grid item xs>
								<Typography noWrap className={classes.typo}>
									data_set_5``
								</Typography>
							</Grid>
						</Grid>
					}
					className={classes.chipRow}
				/>
			</StyledTreeItem>
		</TreeView>
	);
}

const useStyles = makeStyles({
	root: {
		left: 0,
		top: 0,
		flexGrow: 1,
		marginTop: 20,
	},
	chipSql: {
		backgroundColor: "#2d3947",
		color: "white",
	},
	chipJS: {
		backgroundColor: "#fcd877",
		color: "white",
	},
	chipOps: {
		backgroundColor: "#355260",
		color: "white",
	},
	chipAssert: {
		backgroundColor: "#b28a82",
		color: "white",
	},
	chipRow: {
		marginTop: 5,
	},
	icon: {
		width: 20,
	},
	verticalCenter: {
		display: "flex",
		alignItems: "center",
	},
	typo: { fontSize: 14 },
});
