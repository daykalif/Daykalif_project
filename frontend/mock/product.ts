import { Request, Response } from 'express';

function getProductList(req: Request, res: Response) {
  const productList: API.Product[] = [];
  for (let i = 1; i < 20; i++) {
    productList.push({
      id: i,
      name: 'product - ' + i
    });
  }
  res.json({
    data: productList,
    success: true,
  });
}

export default {
  '/api/product/list': getProductList,      // 访问 http://localhost:8000/api/product/list
}