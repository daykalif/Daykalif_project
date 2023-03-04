import { Request, Response } from 'express';

function getProductList(req: Request, res: Response) {
  const productList: API.Product[] = [];
  for (let i = 1; i < 100; i++) {
    productList.push({
      id: i,
      status: i % 3,
      name: 'product - ' + i
    });
  }
  res.json({
    data: productList,
    success: true,
    total: productList?.length,
    pageSize: 20,
    current: 1,
  });
}

export default {
  '/api/product/list': getProductList,      // 访问 http://localhost:8000/api/product/list
}