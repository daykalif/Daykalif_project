import { useAccess, Access } from 'umi';
import { Button } from '@arco-design/web-react';
import { Sankey } from '@daykalif/g2plot-sankey/lib/plots/sankey';
import { useEffect, useState } from 'react';


// 全路径数据
export const PATH_DATA = [
  { path: '首次打开|你好|aa', value: 20 },
  { path: '首次打开|你好|', value: 5 },
  { path: '结果页|你好|借呗', value: 12 },
  { path: '结果页|你好|扫一扫|再见页', value: 10 },
  { path: '首次打开|首页 UV|', value: 8 },
  { path: '其他来源|首页 UV|', value: 17 },
  { path: '首次打开|首页 UV|扫一扫|再见页', value: 4 },
  { path: '首次打开|首页 UV|扫一扫|结束页', value: 9 },
];

export const ALIPAY_DATA = [
  {
    source: '首次打开',
    target: '你好',
    value: 25,
  },
  {
    source: '结果页',
    target: '你好',
    value: 22,
  },
  {
    source: '首次打开',
    target: '首页 UV',
    value: 21,
  },
  {
    source: '其他来源',
    target: '首页 UV',
    value: 17,
  },
  {
    source: '你好',
    target: '理财',
    value: 20,
  },
  {
    source: '你好',
    target: '借呗',
    value: 17,
  },
  {
    source: '你好',
    target: '扫一扫',
    value: 10,
  },
  {
    source: '首页 UV',
    target: '扫一扫',
    value: 13,
  },
  {
    source: '扫一扫',
    target: '再见页',
    value: 14,
  },
  {
    source: '扫一扫',
    target: '结束页',
    value: 9,
  },
  {
    source: '首页 UV',
    target: '流向',
    value: 25,
  },
];


export default function IndexPage() {
  const [visible, setVisible] = useState<boolean>(false);
  const access = useAccess();

  useEffect(() => {
    if (!visible) {
      return;
    }
    const sankey = new Sankey('container', {
      height: 500,
      data: ALIPAY_DATA,
      sourceField: 'source',
      targetField: 'target',
      weightField: 'value',
      nodeWidth: 32,
      // 可选，不加默认为true，设为false全路径不生效
      // showFullPath: false,
      fullPathData: PATH_DATA,
      lossFieldValue: 'Loss',
      nodeSort: (a, b) => {
        if (b.name.indexOf('Loss') > -1) {
          return -1;
        }
        return 1;
      },
      linkSort: (a, b) => {
        if (b.target.name.indexOf('Loss') > -1) {
          return -1;
        }
        return 1;
      },
    });

    sankey.render();
  }, [visible]);


  return (
    <Access
      accessible={!!access.isEditor}
      fallback={<div>sankey没有访问权限</div>}
    >
      <>
        <Button type='primary' onClick={() => setVisible(true)}>展示sankey</Button>
        <div id='container'></div>
      </>
    </Access>
  );
}
