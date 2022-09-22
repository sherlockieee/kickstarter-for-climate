import {
	Box,
	LinearProgress,
	LinearProgressProps,
	Typography,
} from "@material-ui/core";

export const ProgressBar = (props: LinearProgressProps & { value: number }) => {
	return (
		<Box
			style={{
				display: "flex",
				flexDirection: "row",
				alignItems: "center",
				gap: 8,
			}}
		>
			<Box style={{ width: "100%" }}>
				<LinearProgress
					variant="determinate"
					style={{
						height: 10,
						borderRadius: 5,
					}}
					value={Math.min(props.value, 100)}
				/>
			</Box>
			<Box style={{ minWidth: 35 }}>
				<Typography
					variant="body2"
					color="textSecondary"
				>{`${Math.round(props.value)}%`}</Typography>
			</Box>
		</Box>
	);
};
