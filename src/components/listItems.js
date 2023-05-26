import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DonutSmallIcon from "@material-ui/icons/DonutSmall";
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import SearchIcon from "@material-ui/icons/Search";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import UpdateIcon from "@material-ui/icons/Update";
import TodayIcon from "@material-ui/icons/Today";
import StorageIcon from "@material-ui/icons/Storage";

export const FirstListItems = (
	<div>
		<ListItem button>
			<ListItemIcon>
				<DonutSmallIcon style={{ color: "grey" }} />
			</ListItemIcon>
			<ListItemText primary="Dashboard" />
		</ListItem>
		<ListItem button>
			<ListItemIcon>
				<PlayCircleFilledWhiteIcon style={{ color: "#517cda" }} />
			</ListItemIcon>
			<ListItemText primary="Play" />
		</ListItem>
	</div>
);

export const SecondListItems = (
	<div>
		<ListItem button>
			<ListItemIcon>
				<DonutSmallIcon style={{ color: "grey" }} />
			</ListItemIcon>
			<ListItemText primary="Home" />
		</ListItem>
		<ListItem button>
			<ListItemIcon>
				<SearchIcon style={{ color: "grey" }} />
			</ListItemIcon>
			<ListItemText primary="Search" />
		</ListItem>
	</div>
);

export const ThirdListItems = (
	<div>
		<ListItem button>
			<ListItemIcon>
				<AccountTreeIcon style={{ color: "white" }} />
			</ListItemIcon>
			<ListItemText primary="Projects" style={{ color: "white" }} />
		</ListItem>
		<ListItem button>
			<ListItemIcon>
				<UpdateIcon style={{ color: "grey" }} />
			</ListItemIcon>
			<ListItemText primary="Update" />
		</ListItem>
		<ListItem button>
			<ListItemIcon>
				<TodayIcon style={{ color: "grey" }} />
			</ListItemIcon>
			<ListItemText primary="History" />
		</ListItem>
		<ListItem button>
			<ListItemIcon>
				<StorageIcon style={{ color: "grey" }} />
			</ListItemIcon>
			<ListItemText primary="Database" />
		</ListItem>
	</div>
);
