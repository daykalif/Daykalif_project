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
    },
    {
      title: '操作',
      key: 'option',
      width: 150,
      valueType: 'option',
      render: (text, record: API.Product, _, action) => [
        <a
          key="editable"
          onClick={() => {
            action?.startEditable(record.id);
          }}
        >
          编辑
        </a>
      ]
    }
  ];

  return (
    <div>
      <PageContainer>
        <ProTable<API.Product, API.PageParams>
          columns={columns}
          rowKey='id'
          request={getProductList}
          pagination={{
            pageSize: 10,
            onChange: (page) => console.log(page),
          }}
          editable={{
            onSave: (key, row: API.Product) => {
              console.log(key, row, 'onSave');
              return Promise.resolve();
            },
            onDelete: (key, row: API.Product) => {
              console.log(key, row, 'onDelete');
              return Promise.resolve();
            },
          }}
        />
      </PageContainer>
    </div>
  );
}

export default Product;