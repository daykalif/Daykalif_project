import { getProductList } from '@/services/product';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable, { ProColumns } from '@ant-design/pro-table';

const Product = () => {
  const columns: ProColumns<API.Product>[] = [
    {
      title: 'ID',
      dataIndex: 'id',
      hideInSearch: true,
      tooltip: 'id要唯一',
    },
    {
      title: '产品名称',
      dataIndex: 'name',
    },
    {
      title: '状态',
      dataIndex: 'status',
      valueEnum: {
        0: {
          text: '正常',
          status: 'Default',
        },
        1: {
          text: '热销',
          status: 'Success',
          disabled: true,
        },
        2: {
          text: '缺货',
          status: 'Error',
        },
      },
    }
  ];

  return (
    <div>
      <PageContainer>
        <ProTable<API.Product, API.PageParams>
          columns={columns}
          request={getProductList}
          pagination={{
            pageSize: 10,
            onChange: (page) => console.log(page),
          }}
        />
      </PageContainer>
    </div>
  );
}

export default Product;