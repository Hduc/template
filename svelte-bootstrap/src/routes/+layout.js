export const load = ({ url }) => {
	const path = url.pathname;
	const hideNavbar = path.includes('/auth') || path.includes('/dashboard');

	return {
		hideNavbar
	};
};
