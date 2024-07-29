/**
 * @name LinkAvatar
 * @author TrapStoner#9526
 * @description Lets you open a user's avatar in the browser.
 * @version 1.0
 * @source https://github.com/TrapStoner/BetterDiscordPlugins/tree/main/LinkAvatar
 */

module.exports = meta => {
	function LinkAvatar({target}) {
		if (target.parentElement.classList.value.includes("avatar_") && target.parentElement.parentElement.classList.value.includes("headerInner_")) {
			window.open(target.firstChild.querySelector("img").src.replace(/\?.*$/, "?quality=lossless&size=4096"));
		}
	};

	return {
		start: () => {
			document.addEventListener("click", LinkAvatar, true);
		},
		stop: () => {
			document.removeEventListener("click", LinkAvatar, true);
		}
	}
};