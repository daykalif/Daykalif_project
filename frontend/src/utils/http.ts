import { extend } from "umi-request";

const request = extend({
  prefix: '/api',
  timeout: 1000,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

const http = {
  get(url: string, params?: object) {
    return request
      .get(url, {
        params: params
      })
      .then((response) => {
        console.log(response);
        return response;
      }).catch((error) => {
        console.error(error);
      })
  },
}

export default http;