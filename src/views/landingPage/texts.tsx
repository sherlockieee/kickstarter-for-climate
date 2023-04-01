import { ApplyButton, ProjectButton } from "../../components/Buttons";
import { TextLayout } from "./textLayout";

export const TextOne = () => {
	return (
		<TextLayout
			imgSource="https://images.unsplash.com/photo-1646579079898-9dbd8e234078?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwxNDEzNDF8MHwxfHNlYXJjaHwxMXx8Y29yYWwlMjByZWVmJTIwcHJvdGVjdGlvbnxlbnwwfHx8fDE2NjI2NTk0ODQ&ixlib=rb-1.2.1&q=80&w=430&dpr=2"
			title="Diverse, high-quality projects"
			text="As the climate is expected to warm up to 4 degrees, we need urgent action now. To reverse this course of action, we need carbon removal to give us buffer time for decarbonization, and to remove already existing carbon in the air from the past."
			callToAction={<ProjectButton />}
		/>
	);
};

export const TextTwo = () => {
	return (
		<TextLayout
			imgSource="https://images.unsplash.com/photo-1558449028-b53a39d100fc?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwxNDEzNDF8MHwxfHNlYXJjaHwxfHxzb2xhcnxlbnwwfHx8fDE2NjI2NTk2Mjg&ixlib=rb-1.2.1&q=80&w=430&dpr=2"
			title="Invest in the future"
			text="When you crowdfund in carbon removal projects, you get future carbon credits which can be exchanged for actual carbon credits later on. This credit can then be burned, sold or kept as an asset in your investment portfolio."
			callToAction={<ProjectButton />}
			reverse={true}
		/>
	);
};

export const TextThree = () => {
	return (
		<TextLayout
			imgSource="https://images.unsplash.com/photo-1520052203542-d3095f1b6cf0?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwxNDEzNDF8MHwxfHNlYXJjaHwxM3x8ZmFybWVyJTIwaGFwcHl8ZW58MHx8fHwxNjYyNjYwODEy&ixlib=rb-1.2.1&q=80&w=430&dpr=2"
			title="Have a project that needs funding?"
			text="Get funding faster, diversify your funding sources and have a community around the world to support you. What are you waiting for?"
			callToAction={<ApplyButton />}
		/>
	);
};
