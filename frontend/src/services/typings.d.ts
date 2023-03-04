declare namespace API {
  interface Product {
    id: number;
    status: number;
    name: string;
  }

  interface ProductList {
    data?: Product[];
    total?: number;
    success: boolean;
  }

  interface PageParams {
    page: number;
    pageSize: number;
    current: number;
  }

}