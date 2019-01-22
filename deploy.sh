git add *
git commit -m "update in VScode"
git push

npm run build

cat ../servePasswd > passwd
scp -r ./dist/*  root@207.148.79.119:/www/wwwroot/www.xerrors.fun/
send $passwd