#!/bin/bash

# Create Webpack
npm run build

# Create Apache server request handling
# Fixes https://stackoverflow.com/questions/27928372/react-router-urls-dont-work-when-refreshing-or-writing-manually
echo \
"<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
" > build/.htaccess


# Modify security headers
echo \
"
# Opt out of FLoC 
<IfModule mod_headers.c>
  Header always set Permissions-Policy: interest-cohort=()
</IfModule>

# X-Content-Type-Options
<IfModule mod_headers.c>
  Header always set X-Content-Type-Options: nosniff
</IfModule>

# X-Frame-Options
<IfModule mod_headers.c>
  Header always set X-Frame-Options: SAMEORIGIN
</IfModule>

# Referrer-Policy
<IfModule mod_headers.c>
  Header always set Referrer-Policy: no-referrer
</IfModule>
" >> build/.htaccess


# Sync build to server
rsync -a --delete build/ parkkennypark_kennypark@ssh.phx.nearlyfreespeech.net:/home/public \
  && echo "Build synced successfully"
