/**
 * @name CustomCSS Toggle
 * @author TrapStoner#9526
 * @description CTRL + B to toggle CustomCSS
 * @version 1.0
 * @source https://github.com/TrapStoner/BetterDiscordPlugins/tree/main/CustomCSSToggle
 */

module.exports = meta => {
	function toggleCSS() {
		window.BdApi.toggleSetting("settings", "customcss", "customcss");
	};

	return {
		start: () => {
			document.onkeyup = (key) => {
		if (key.ctrlKey && key.which === 66) toggleCSS();
	}
		},
		stop: () => {
			document.onkeyup = null;
		}
	}
};