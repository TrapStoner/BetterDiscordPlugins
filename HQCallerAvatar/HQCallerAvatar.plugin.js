/**
 * @name HQ Caller Avatar
 * @author TrapStoner#9526
 * @description Makes low quality avatars in call pop-up high quality.
 * @version 1.0
 * @source https://raw.githubusercontent.com/TrapStoner/BetterDiscordPlugins/master/HQCallerAvatar/HQCallerAvatar.plugin.js
 */

module.exports = meta => {
	const app = document.querySelector('div[class*=app-]>div[class*=app-]');
	function wrapper(mutation) {
		if (mutation.addedNodes[0] && mutation.addedNodes[0].className == 'wrapper-3X0c60') {
			const callAvatar = mutation.addedNodes[0].querySelector('div[class*=callAvatarMaskContainer-]');
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