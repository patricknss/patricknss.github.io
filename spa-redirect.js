/* SPA redirect helper moved out of inline script to respect CSP
   It rewrites legacy query-based paths to normal paths used by the SPA. */
(function(l) {
    try {
        if (l.search && l.search[1] === '/' ) {
            var decoded = l.search.slice(1).split('&').map(function(s) {
                return s.replace(/~and~/g, '&');
            }).join('?');
            window.history.replaceState(null, null,
                l.pathname.slice(0, -1) + decoded + l.hash
            );
        }
    } catch (e) {
        // swallow errors to avoid breaking page load
        console.error('spa-redirect error', e);
    }
})(window.location);
