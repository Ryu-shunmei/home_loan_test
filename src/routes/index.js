import { useRoutes } from "react-router-dom";
// layout
import Layout from "../layout";
// .
import { CaseHistory, StepPage1, StepPage2, StepPage3, StepPage4, StepPage5, StepPage6, StepPage7, StepPage8 } from "./elements";

// ----------------------------------------------------------------------

export default function Router() {
	return useRoutes([
		{
			path: "/",
			element: <Layout />,
			children: [
				// { path: "sbi/history", element: <CaseHistory /> },

				{ path: "/", element: <StepPage1 /> },
				{ path: "/case/create/1", element: <StepPage1 /> },
				{ path: "/case/create/2", element: <StepPage2 /> },
				{ path: "/case/create/3", element: <StepPage3 /> },
				{ path: "/case/create/4", element: <StepPage4 /> },
				{ path: "/case/create/5", element: <StepPage5 /> },
				{ path: "/case/create/6", element: <StepPage6 /> },
				{ path: "/case/create/7", element: <StepPage7 /> },
				{ path: "/case/create/8", element: <StepPage8 /> },
			],
		},
	]);
}
