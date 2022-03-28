# favorite-restaurant
環境建置與需求 (prerequisites)：  
nvm version: 1.1.9  
node.js version: v16.14.2  
express version: v4.16.4  

安裝與執行步驟 (installation and execution)：  
1.開啟terminal，下載本專案至本機電腦  
2.輸入 $ cd favorite-restaurant 進入專案資料夾  
3.確認是否有事先安裝好nvm，如果還沒的話請先點擊連結下載安裝 https://github.com/coreybutler/nvm-windows/releases  
4.輸入 $ nvm install 14.16.0 安裝node.js，再輸入 $ nvm use 14.16.0 確認要使用的版本  
5.輸入 $ npm install express@4.16.4 安裝express  
6.輸入 $ npm install -g nodemon 安裝nodemon  
7.輸入 $ nodemon app.js 當terminal顯示 Express is running on http://localhost:3000 代表啟動成功  
8.將 http://localhost:3000 複製到瀏覽器上，即可開始使用  

功能描述 (features)：  
1.包含八間不同種類的台北餐廳相關資訊  
2.可以從搜尋欄位中搜尋符合關鍵字的餐廳  
3.點擊首頁中的餐廳列表，可以查看更詳細的餐廳資訊  
