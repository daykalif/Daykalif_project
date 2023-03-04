import { getProductList } from '@/services/product';
import { PageContainer } from '@ant-design/pro-layout';
import ProDescriptions from '@ant-design/pro-descriptions';
import ProTable, { ProColumns } from '@ant-design/pro-table';
import { Drawer } from 'antd';
import { useState } from 'react';

const Product = () => {
  const [isShowDetail, setIsShowDetail] = useState(false);
  const [product, setProduct] = useState({} as API.Product);

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
      width: 200,
      valueType: 'option',
      render: (text, record: API.Product, _, action) => [
        <a
          key="editable"
          onClick={() => {
            action?.startEditable(record.id);
          }}
        >
          编辑
        </a>,
        <a
          key="detail"
          onClick={() => {
            setProduct(record);
            setIsShowDetail(true);
          }}
        >
          详情
        </a>
      ]
    },
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
        {JSON.stringify(isShowDetail)}
        <Drawer
          visible={isShowDetail}
          onClose={() => {
            setIsShowDetail(false);
          }}
        >
          {
            isShowDetail && (
              <ProDescriptions<API.Product>
                column={1}
                columns={columns.filter((i) => i.valueType !== 'option')}
                request={async () => {
                  console.log(product);

                  return Promise.resolve({
                    data: product,
                  });
                }}
              />
            )
          }
        </Drawer>
      </PageContainer>
    </div>
  );
}

export default Product;