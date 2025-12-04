**Security Overview & OWASP Top 10 recommendations**

This repository hosts a static Angular SPA served on GitHub Pages. The following items were applied and/or recommended to reduce exposure to OWASP Top 10 risks.

Applied changes (client-side):
- Added a Content Security Policy (CSP) meta tag to `index.html` that restricts `script-src` to `'self'` and allows only trusted font/style origins. This mitigates many XSS attack vectors.
- Moved inline JavaScript into an external file `spa-redirect.js` so CSP can block inline scripts.
- Updated `.gitignore` to avoid committing caches, build artifacts and source maps.
- Added GitHub Action `gitleaks` workflow and a local `scripts/check-secrets.ps1` to detect secrets in commits.

Recommendations & limitations (server/back-end and process):
- Many important HTTP security headers (HSTS, X-Content-Type-Options, X-Frame-Options, Referrer-Policy) must be set by the server. GitHub Pages does not allow custom response headers; consider using Cloudflare in front of Pages or hosting where you can set headers.
- Ensure no secrets or credentials are present in the repository or build artifacts. If you find previously-committed secrets, rotate them immediately and remove them from git history using a tool such as `git filter-repo` or `BFG`.
- Keep dependencies up to date and run automated dependency scanning (e.g., GitHub Dependabot or SCA tools) to mitigate A9 (using vulnerable components).
- Sanitize and validate all user input on the server side. Client-side checks are not sufficient (A1, A3).
- Implement proper authentication and authorization on the backend (A2, A5). The SPA should never rely on client-side access control.
- Add server-side logging and monitoring for suspicious activity (A10).

Quick local checks:
- Run local secrets scan:
  `npm run check-secrets`
- Run dependency scan (enable Dependabot or run `npm audit` and fix alerts).

If you want, I can:
- add an automated dependency scanning workflow, or
- help set up Cloudflare with rewrite rules and response headers for Pages, or
- help remove sensitive data from git history safely.
