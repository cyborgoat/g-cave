npm run build
pm2 delete all
pm2 start "npm run start" --name "gisland"