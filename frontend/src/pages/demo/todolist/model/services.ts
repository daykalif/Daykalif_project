
import request from "umi-request";

export function getTodoListData() {     // 创建services方法，从mock/接口中获取数据
  return request.get('/api/todo_list')
    .then(function (response) {
      console.log(response);
      return response;
    }).catch(function (error) {
      console.error(error);
    })
}