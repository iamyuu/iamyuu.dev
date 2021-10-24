/** @param {string} date */
export function formatDate(date) {
	return new Date(date).toLocaleString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});
}
