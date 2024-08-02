/**
 * @name CustomCSS Toggle
 * @author TrapStoner#9526
 * @description CTRL + B to toggle CustomCSS
 * @version 1.1
 * @source https://github.com/TrapStoner/BetterDiscordPlugins/tree/main/CustomCSSToggle
 */

module.exports = meta => {
	function toggleCSS(key) {
		if (key.ctrlKey && key.which === 66) {
			window.BdApi.toggleSetting("settings", "customcss", "customcss");
		}
	};

	return {
		start: () => {
			document.addEventListener("keyup", toggleCSS, true);
		},
		stop: () => {
			document.removeEventListener("keyup", toggleCSS, true);
		}
	}
};