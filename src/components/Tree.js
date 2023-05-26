import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import TreeItem from "@material-ui/lab/TreeItem";
import { Grid, Chip, Typography } from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import FolderIcon from "@material-ui/icons/Folder";

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
		<TreeView className={classes.root} defaultExpanded={["2"]} defaultCollapseIcon={<KeyboardArrowDownIcon />} defaultExpandIcon={<ChevronRightIcon />}>
			<StyledTreeItem
				nodeId="1"
				label={
					<Grid container wrap="nowrap" spacing={2}>
						<Grid item>
							<FolderIcon className={classes.icon} />
						</Grid>
						<Grid item xs>
							<Typography noWrap className={classes.typo}>
								models
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
								<FolderIcon className={classes.icon} />
							</Grid>
							<Grid item xs>
								<Typography noWrap className={classes.typo}>
									1_advanced_examples
								</Typography>
							</Grid>
						</Grid>
					}
					className={classes.chipRow}
				>
					<Grid container item xs={12} spacing={1} className={classes.chipRow}>
						<Grid item>
							<Chip label="SQL" className={classes.chipSql} />
						</Grid>
						<Grid item className={classes.verticalCenter}>
							dataform
						</Grid>
					</Grid>
					<Grid container item xs={12} spacing={1} className={classes.chipRow}>
						<Grid item>
							<Chip label="SQL" className={classes.chipSql} />
						</Grid>
						<Grid item className={classes.verticalCenter}>
							dataform
						</Grid>
					</Grid>
				</StyledTreeItem>
				<StyledTreeItem
					nodeId="3"
					label={
						<Grid container wrap="nowrap" spacing={2}>
							<Grid item>
								<FolderIcon className={classes.icon} />
							</Grid>
							<Grid item xs>
								<Typography noWrap className={classes.typo}>
									2_advanced_examples
								</Typography>
							</Grid>
						</Grid>
					}
					className={classes.chipRow}
				>
					<Grid container item xs={12} spacing={1} className={classes.chipRow}>
						<Grid item>
							<Chip label="SQL" className={classes.chipSql} />
						</Grid>
						<Grid item className={classes.verticalCenter}>
							dataset_3_increase
						</Grid>
					</Grid>
					<Grid container item xs={12} spacing={1} className={classes.chipRow}>
						<Grid item>
							<Chip label="JS" className={classes.chipJS} />
						</Grid>
						<Grid item className={classes.verticalCenter}>
							dataset_3_increase
						</Grid>
					</Grid>
				</StyledTreeItem>
				<StyledTreeItem
					nodeId="4"
					label={
						<Grid container wrap="nowrap" spacing={2}>
							<Grid item>
								<FolderIcon className={classes.icon} />
							</Grid>
							<Grid item xs>
								<Typography noWrap className={classes.typo}>
									3_advanced_examples
								</Typography>
							</Grid>
						</Grid>
					}
					className={classes.chipRow}
				>
					<Grid container item xs={12} spacing={1} className={classes.chipRow}>
						<Grid item>
							<Chip label="ops" className={classes.chipOps} />
						</Grid>
						<Grid item className={classes.verticalCenter}>
							grant_access
						</Grid>
					</Grid>
					<Grid container item xs={12} spacing={1} className={classes.chipRow}>
						<Grid item>
							<Chip label="assert" className={classes.chipAssert} />
						</Grid>
						<Grid item className={classes.verticalCenter}>
							simple_assertion
						</Grid>
					</Grid>
				</StyledTreeItem>
			</StyledTreeItem>
			<StyledTreeItem
				nodeId="5"
				label={
					<Grid container wrap="nowrap" spacing={2}>
						<Grid item>
							<FolderIcon className={classes.icon} />
						</Grid>
						<Grid item xs>
							<Typography noWrap className={classes.typo}>
								models_2
							</Typography>
						</Grid>
					</Grid>
				}
				className={classes.chipRow}
			>
				<StyledTreeItem nodeId="6" label="4_simple_examples" className={classes.chipRow}>
					<Grid container item xs={12} spacing={1} className={classes.chipRow}>
						<Grid item>
							<Chip label="SQL" className={classes.chipSql} />
						</Grid>
						<Grid item>dataform</Grid>
					</Grid>
					<Grid container item xs={12} spacing={1} className={classes.chipRow}>
						<Grid item>
							<Chip label="SQL" className={classes.chipSql} />
						</Grid>
						<Grid item>dataform</Grid>
					</Grid>
				</StyledTreeItem>
				<StyledTreeItem nodeId="7" label="5_simple_examples" className={classes.chipRow}>
					<Grid container item xs={12} spacing={1} className={classes.chipRow}>
						<Grid item>
							<Chip label="SQL" className={classes.chipSql} />
						</Grid>
						<Grid item>dataform</Grid>
					</Grid>
					<Grid container item xs={12} spacing={1} className={classes.chipRow}>
						<Grid item>
							<Chip label="SQL" className={classes.chipSql} />
						</Grid>
						<Grid item>dataform</Grid>
					</Grid>
				</StyledTreeItem>
				<StyledTreeItem nodeId="8" label="6_simple_examples" className={classes.chipRow}>
					<Grid container item xs={12} spacing={1} className={classes.chipRow}>
						<Grid item>
							<Chip label="SQL" className={classes.chipSql} />
						</Grid>
						<Grid item>dataform</Grid>
					</Grid>
					<Grid container item xs={12} spacing={1} className={classes.chipRow}>
						<Grid item>
							<Chip label="SQL" className={classes.chipSql} />
						</Grid>
						<Grid item>dataform</Grid>
					</Grid>
				</StyledTreeItem>
			</StyledTreeItem>
		</TreeView>
	);
}

const useStyles = makeStyles({
	root: {
		left: 0,
		top: 0,
		flexGrow: 1,
		height: "100vh",
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
