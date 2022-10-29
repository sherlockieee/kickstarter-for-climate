import type { NextApiRequest, NextApiResponse } from "next";
import type { User } from "../../../types/user";

export const mockUser: User = {
	id: 1,
	full_name: "Ha",
	preferred_name: "Ha",
	email: "phtn@abc.com",
	is_active: true,
	is_admin: false,
};

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<User>
) {
	res.status(200).json(mockUser);
}
