import { Grid, Button, Divider, Paper, makeStyles, Box } from "@material-ui/core";
import React from "react";
import CustomTabs from "./CustomTabs";
import BottomPanel from "./BottomPanel";
import CodeEditor from "@uiw/react-textarea-code-editor";

export default function RighPanel() {
	const classes = useStyles();
	const [code, setCode] = React.useState(`function add(a, b) {\n  return a + b;\n}`);

	return (
		<div>
			<div className={classes.appBarSpacer}></div>
			<Grid container xs={12} className={classes.main}>
				<Grid item spacing={0} xs={8}>
					<Box display="flex" justifyContent="space-between" style={{ borderBottom: "1px solid grey" }} paddingX={2} paddingY={2}>
						<Box>definitions/1_simple_examples/dataset_2_with_ref.sql</Box>
						<Box>
							<Button variant="contained">Save</Button>
						</Box>
					</Box>
					<Divider />
					<Grid container spacing={0} xs={12}>
						<Grid item xs={12}>
							<CodeEditor
								value={code}
								language="sql"
								placeholder="Please enter SQL Code"
								onChange={(evn) => setCode(evn.target.value)}
								padding={15}
								style={{
									fontSize: 12,
									backgroundColor: "#2d3947",
									fontFamily: "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
								}}
							/>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={4} style={{ borderLeft: "1px solid grey" }}>
					<CustomTabs />
				</Grid>
				{/* <Grid display="flex"> */}
				<BottomPanel />
				{/* </Grid> */}
			</Grid>
		</div>
	);
}

const useStyles = makeStyles((theme) => ({
	main: {
		backgroundColor: "#2d3947",
		color: "white",
		lineHeight: "center",
		borderRadius: 0,
		height: "100vh",
		overflow: "auto",
	},
	chip: {
		backgroundColor: "#4c8e9a",
		color: "white",
	},
	chipRow: {
		marginTop: "10px",
	},
	appBarSpacer: theme.mixins.toolbar,
	border: {
		border: "1px solid grey",
	},
}));
