import React from "react";
import PropTypes from "prop-types";
// import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { Accordion, AccordionDetails, AccordionSummary, Badge, Box, Button, Chip } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div role="tabpanel" hidden={value !== index} id={`full-width-tabpanel-${index}`} aria-labelledby={`full-width-tab-${index}`} {...other}>
			{value === index && (
				<Grid p={3}>
					<Typography>{children}</Typography>
				</Grid>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};

function a11yProps(index) {
	return {
		id: `full-width-tab-${index}`,
		"aria-controls": `full-width-tabpanel-${index}`,
	};
}

export default function CustomTabs() {
	const classes = useStyles();
	const theme = useTheme();
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div className={classes.root}>
			<AppBar position="static" style={{ backgroundColor: "#2d3947", color: "white" }}>
				<Tabs value={value} onChange={handleChange} TabIndicatorProps={{ style: { backgroundColor: "white" } }} textColor="white" variant="fullWidth" aria-label="full width tabs example">
					<Tab label="Outline" {...a11yProps(0)} />
					<Tab label="Documentation" {...a11yProps(1)} />
				</Tabs>
			</AppBar>
			<TabPanel value={value} index={0} dir={theme.direction}>
				<Grid Container xs={12}>
					<Grid item xs={12}>
						<Box display="flex" style={{ color: "#fcd877" }} mt={3} px={2}>
							<Box>
								<HelpOutlineIcon />
							</Box>
							<Box ml={2}>No Compilation issue</Box>
						</Box>
					</Grid>
					<Grid item xs={12}>
						<Box display="flex" mt={3} px={2}>
							<Box>
								<Chip label="table" className={classes.chipOps} />
							</Box>
							<Box ml={2} flexGrow={1} className={classes.verticalCenter}>
								dataset_2_with_ref
							</Box>
							<Box className={classes.verticalCenter}>
								<MoreHorizIcon />
							</Box>
						</Box>
					</Grid>

					<Grid my={2} item xs={12} style={{ marginTop: 10 }}>
						<Accordion className={classes.accordion}>
							<AccordionSummary expandIcon={<ExpandMoreIcon className={classes.whiteIcon} />} aria-controls="panel1a-content" id="panel1a-header">
								<Box display="flex" justifyContent="space-between" width={"100%"}>
									<Box flexGrow={1}>
										<Typography className={classes.heading}>Dependencies</Typography>
									</Box>
									<Box className={classes.shape}>3</Box>
								</Box>
							</AccordionSummary>
							<AccordionDetails>
								<Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</Typography>
							</AccordionDetails>
						</Accordion>
						<Accordion className={classes.accordion}>
							<AccordionSummary expandIcon={<ExpandMoreIcon className={classes.whiteIcon} />} aria-controls="panel2a-content" id="panel2a-header">
								<Typography className={classes.heading}>Compiled</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</Typography>
							</AccordionDetails>
						</Accordion>
						<Accordion className={classes.accordion}>
							<AccordionSummary expandIcon={<ExpandMoreIcon className={classes.whiteIcon} />} aria-controls="panel2a-content" id="panel2a-header">
								<Typography className={classes.heading}>Query</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</Typography>
							</AccordionDetails>
						</Accordion>
					</Grid>
					<Grid item xs={12}>
						<Box display="flex" justifyContent="space-around" mt={3}>
							<Box>
								<Button variant="contained">Execute query</Button>
							</Box>
							<Box>
								<Button variant="contained" color="primary">
									Run this node
								</Button>
							</Box>
						</Box>
					</Grid>
				</Grid>
			</TabPanel>
			<TabPanel value={value} index={1} dir={theme.direction}>
				Item Two
			</TabPanel>
		</div>
	);
}

const useStyles = makeStyles((theme) => ({
	root: {
		fontSize: 14,
	},
	shape: {
		backgroundColor: "grey",
		width: 20,
		height: 20,
		color: "white",
		borderRadius: 5,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	chipOps: {
		backgroundColor: "#355260",
		color: "white",
	},
	accordion: {
		backgroundColor: "#2d3947",
		color: "white",
		borderColor: "white",
	},
	whiteIcon: {
		color: "white",
	},
	verticalCenter: {
		display: "flex",
		alignItems: "center",
	},
}));
