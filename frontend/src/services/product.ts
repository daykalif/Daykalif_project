import { request } from "umi";

export async function getProductList(params: { current?: number, pageSize?: number }) {
  return request<API.ProductList>('/api/product/list', { method: 'GET', params });
}