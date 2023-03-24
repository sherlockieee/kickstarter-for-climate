import React from "react";
import { useRouter } from "next/router";
import Menu from "@mui/material/Menu";
import ListItemIcon from "@mui/material/ListItemIcon";
import Logout from "@mui/icons-material/Logout";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";

import { useAuth } from "../../../contexts/auth";
import theme from "../../../constants/theme";

type Props = {
	anchorEl: HTMLElement | null;
	setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement>>;
};

export default function MenuDropDown({ anchorEl, setAnchorEl }: Props) {
	const { logout } = useAuth();
	const router = useRouter();
	const open = Boolean(anchorEl);
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<Menu
			anchorEl={anchorEl}
			id="account-menu"
			open={open}
			onClose={handleClose}
			onClick={handleClose}
			PaperProps={{
				elevation: 0,

				sx: {
					overflow: "visible",
					filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
					mt: 1.5,
					"& .MuiAvatar-root": {
						width: 32,
						height: 32,
						ml: "-4px",
						marginRight: "10px",
						backgroundColor: theme.palette.primary.main,
					},
					"&:before": {
						content: '""',
						display: "block",
						position: "absolute",
						top: 0,
						right: 14,
						width: 10,
						height: 10,
						transform: "translateY(-50%) rotate(45deg)",
						zIndex: 0,
					},
					"& .MuiMenuItem-root": {
						color: theme.palette.primary.contrastText,
						fontSize: "1rem",
						//justifyContent: "space-evenly",
					},
					"& .MuiListItemIcon-root": {
						color: theme.palette.primary.main,
						minWidth: 32,
						marginRight: "8px",
					},
				},
			}}
			transformOrigin={{ horizontal: "right", vertical: "top" }}
			anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
		>
			<MenuItem
				onClick={() => {
					router.push(`/profile`);
				}}
			>
				<Avatar /> Profile
			</MenuItem>
			<MenuItem
				onClick={() => {
					logout({ redirectLocation: "/projects" });
				}}
			>
				<ListItemIcon>
					<Logout fontSize="small" />
				</ListItemIcon>
				Logout
			</MenuItem>
		</Menu>
	);
}
