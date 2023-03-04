import { Request, Response } from "umi";
import mockjs from 'mockjs';

export default {
  // 支持值为 Object 和 Array
  'GET /api/users': { users: [1, 2] },    // 访问 http://localhost:8000/api/users

  // GET 可忽略
  '/api/users/1': { id: 1 },

  // 支持自定义函数，API 参考 express@4
  'POST /api/users/create': (req: Request, res: Response) => {    // 访问 http://127.0.0.1:8000/api/users/create
    // 添加跨域请求头
    res.setHeader('Access-Control-Allow-Origin', '*');
    const data = mockjs.mock({
      'list|100': [{ name: '@city', 'value|1-100': 50, 'type|0-2': 1 }],
    })
    res.json(data);
  },

  // delete
  'delete /api/user/:id': (req: Request, res: Response) => {    // 访问 http://127.0.0.1:8000/api/user/1
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json({
      code: 200
    })
  },

  // put
  'put /api/user/:id': (req: Request, res: Response) => {    // 访问 http://127.0.0.1:8000/api/user/1
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json({
      code: 500
    })
  },

  // 模拟登录
  'POST /api/users/login': (req: Request, res: Response) => {
    // 添加跨域请求头
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (Math.random() > 0.5) {
      res.json({ code: 0 });
    } else {
      res.json({ code: 1 });
    }
  },
}