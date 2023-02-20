import { Suspense, lazy } from "react";

// ----------------------------------------------------------------------

const Loadable = (Component) => (props) =>
	(
		<Suspense>
			<Component {...props} />
		</Suspense>
	);

// ----------------------------------------------------------------------

export const CaseHistory = Loadable(lazy(() => import("../pages/CaseHistory")));
export const StepPage1 = Loadable(lazy(() => import("../pages/StepPage1")));
export const StepPage2 = Loadable(lazy(() => import("../pages/StepPage2")));
export const StepPage3 = Loadable(lazy(() => import("../pages/StepPage3")));
export const StepPage4 = Loadable(lazy(() => import("../pages/StepPage4")));
export const StepPage5 = Loadable(lazy(() => import("../pages/StepPage5")));
export const StepPage6 = Loadable(lazy(() => import("../pages/StepPage6")));
export const StepPage7 = Loadable(lazy(() => import("../pages/StepPage7")));
export const StepPage8 = Loadable(lazy(() => import("../pages/StepPage8")));
