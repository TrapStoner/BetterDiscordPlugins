/**
 * @name HQ Caller Avatar
 * @author TrapStoner#9526
 * @description Makes low quality avatars in call pop-up high quality.
 * @version 1.2
 * @source https://github.com/TrapStoner/BetterDiscordPlugins/tree/main/HQCallerAvatar
 */

module.exports = meta => {
	const app = document.querySelector('div[class*=appAsidePanelWrapper_]');
	function wrapper(mutation) {
		if (mutation.addedNodes[0] && mutation.addedNodes[0].classList.value.includes("wrapper_") && mutation.addedNodes[0].childNodes[0].classList.value.includes("root_")) {
			const callAvatar = mutation.addedNodes[0].querySelector('div[class*=callAvatarMaskContainer_]');
			callAvatar.querySelector("img").src = callAvatar.querySelector("img").src.replace(/(?:\?size=\d{2,4})?$/, "?size=4096");
		}
	};
	const HQAvatar = mutations => {
		if (mutations.length) {
			mutations.forEach(wrapper);
		}
	};
	const observer = new MutationObserver(HQAvatar);

	return {
		start: () => {
			observer.observe(app, { childList: true });
		},
		stop: () => {
			observer.disconnect();
		}
	}
};