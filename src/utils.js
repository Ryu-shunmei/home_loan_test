export const isShow34 = () => {
	step1 = localStorage.getItem("stepData01", null);
	if (step1 === null) {
		return true;
	}
	if (JSON.parse(step1).HeaderData1__pairLoanPresence === 1) {
		return true;
	} else if (JSON.parse(step1).HeaderData1__IncomeAdditionType1 === 1) {
		return true;
	} else {
		return false;
	}
};
