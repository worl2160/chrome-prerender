# chrome-prerender
使用prerender套件進行SSR模擬

## Step 1
```
npm run install
```
## Step 2
use following command to install chrome-statble (SUSE)
```
zypper ar http://dl.google.com/linux/chrome/rpm/stable/x86_64 Google-Chrome
zypper ref
wget https://dl.google.com/linux/linux_signing_key.pub
rpm --import linux_signing_key.pub
zypper in google-chrome-stable
```
## Step 3
change your chrome executable location in index.js

## Step 4
use nginx (proxy server) to rewrite request

i use sub folder `/vm` to rewrite to chrome-vm service which bind on 8000 port

/vm/ -> /, /vm/a.html -> /a.html
```
location /vm {
  rewrite ^/vm/(.*)$ /$scheme://$host/$1? break;
  proxy_pass http://127.0.0.1:8000;
}
```
reload proxy service

## Step 5
`npm run start`

## last
do not forget to change `<noscript>` content to `window.location.href='/vm/'`
