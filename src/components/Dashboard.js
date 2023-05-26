import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { FirstListItems, SecondListItems, ThirdListItems } from "./listItems";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { Avatar, Box, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import Appbar from "./Appbar";
import LeftPanel from "./LeftPanel";
import RighPanel from "./RighPanel";
import TuneIcon from "@material-ui/icons/Tune";

const drawerWidth = 240;

export default function Dashboard() {
	const classes = useStyles();
	const [open, setOpen] = React.useState(true);
	const handleDrawerOpen = () => {
		setOpen(true);
	};
	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<div className={classes.root}>
			<CssBaseline />
			<Appbar newClasses={clsx(classes.appBar, open && classes.appBarShift)} />
			<Drawer
				variant="permanent"
				classes={{
					paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
				}}
				open={open}
			>
				<Divider className={classes.divider} />
				<List>{FirstListItems}</List>
				<Divider />
				<List>{SecondListItems}</List>
				<Divider />
				<List>{ThirdListItems}</List>
				<Divider />
				<ListItem button>
					<ListItemIcon>{open ? <ChevronLeftIcon onClick={handleDrawerClose} style={{ color: "white" }} /> : <ChevronRightIcon onClick={handleDrawerOpen} style={{ color: "white" }} />}</ListItemIcon>
					<ListItemText primary="Collapse" style={{ color: "white" }} />
				</ListItem>
				<Divider />
				<ListItem button>
					<ListItemIcon>
						<TuneIcon style={{ color: "grey" }} />
					</ListItemIcon>
					<ListItemText primary="History" />
				</ListItem>
				<ListItem button>
					<ListItemIcon>
						<Avatar className={classes.small}>H</Avatar>
					</ListItemIcon>
					<ListItemText primary="Profile" />
				</ListItem>
			</Drawer>
			<Box display={"flex"} className={classes.appBarSpacer}>
				<Box display={"flex"}>
					<LeftPanel />
				</Box>
				<Box display={"flex"}>
					<RighPanel />
				</Box>
			</Box>
		</div>
	);
}

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
	},
	toolbar: {
		paddingRight: 24, // keep right padding when drawer closed
	},
	toolbarIcon: {
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-end",
		padding: "0 8px",
		...theme.mixins.toolbar,
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		marginLeft: theme.spacing(9),
		width: `calc(100% - ${theme.spacing(9)}px)`,
		transition: theme.transitions.create(["width", "margin"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		backgroundColor: "#24303c",
	},
	appBarShift: {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(["width", "margin"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	menuButton: {
		marginRight: 36,
	},
	menuButtonHidden: {
		display: "none",
	},
	title: {
		flexGrow: 1,
	},
	drawerPaper: {
		position: "relative",
		whiteSpace: "nowrap",
		width: drawerWidth,
		transition: theme.transitions.create("width", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
		backgroundColor: "#1f2933",
		color: "grey",
	},
	drawerPaperClose: {
		overflowX: "hidden",
		transition: theme.transitions.create("width", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		width: theme.spacing(7),
		[theme.breakpoints.up("sm")]: {
			width: theme.spacing(9),
		},
	},

	content: {
		flexGrow: 1,
		height: "100vh",
		overflow: "auto",
		width: "300px",
	},
	paper: {
		padding: theme.spacing(2),
		display: "flex",
		overflow: "auto",
		flexDirection: "column",
	},
	small: {
		width: theme.spacing(3),
		height: theme.spacing(3),
	},
}));
