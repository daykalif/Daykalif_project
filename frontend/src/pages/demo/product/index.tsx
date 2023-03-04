import { PageContainer } from '@ant-design/pro-layout';
import ProTable, { ProColumns } from '@ant-design/pro-table';

const Product = () => {
  const columns: ProColumns<API.Product>[] = [
    {
      title: 'ID',
      dataIndex: 'id',
      hideInSearch: true,
      tooltip: 'id要唯一',
    }, {
      title: '产品名称',
      dataIndex: 'name',
    }
  ];

  return (
    <div>
      <PageContainer>
        <ProTable<API.Product, API.PageParams>
          columns={columns}
        />
      </PageContainer>
    </div>
  );
}

export default Product;