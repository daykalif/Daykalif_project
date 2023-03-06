1.安装脚手架工具
`cnpm install express-generator -g`

2.上层目录/Users/wangjiaping/Desktop/Daykalif_project 下创建 express 框架
`express backend`

3.`cd backend`

4.`cnpm install`

5.`cnpm install nodemon cross-env --save-dev`

6.修改 package.json
`"dev": "cross-env NODE_ENV=dev nodemon ./bin/www"`

7.`npm run dev`
访问 http://localhost:3000/
