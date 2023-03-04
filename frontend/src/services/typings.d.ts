declare namespace API {
  interface Product {
    id: number;
    name: string;
  }

  interface ProductList {
    data?: Product[];
    success: boolean;
  }

  interface PageParams {
    page: number;
    pageSize: number;
    current: number;
  }
}