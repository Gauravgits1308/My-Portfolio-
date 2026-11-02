/**
 * Synchronous theme initialization script to prevent flash of unstyled/incorrect theme.
 * Runs in <head> before page rendering and DOM painting.
 */
export const themeInitScript = `(function() {
  try {
    var stored = localStorage.getItem('portfolio-theme');
    var theme = 'dark';
    if (stored === 'light') {
      theme = 'light';
    } else if (stored === 'system') {
      var m = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');
      theme = m && m.matches ? 'dark' : 'light';
    } else if (stored === 'dark') {
      theme = 'dark';
    } else {
      theme = 'dark';
    }
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.style.colorScheme = theme;
  } catch (e) {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.documentElement.style.colorScheme = 'dark';
  }
})();`;
