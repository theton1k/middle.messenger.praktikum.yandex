enum METHODS {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

function queryStringify(url: string, data?: XMLHttpRequestBodyInit) {
  // Можно делать трансформацию GET-параметров в отдельной функции
  const searchParams = data
    ? Object.entries(data).reduce(
        (acc, [k, v], id) => `${acc}${id === 0 ? '' : '&'}${k}=${v}`,
        '?'
      )
    : '';

  return url + searchParams;
}

type TOptions = {
  data?: XMLHttpRequestBodyInit;
  method?: METHODS;
  headers?: Record<string, string>;
  timeout?: number;
};

type TNamedOptions = Omit<TOptions, 'method'>;

type TNamedRequest = {
  url: string;
  options?: TNamedOptions;
};

class HTTPTransport {
  get = ({ url, options = {} }: TNamedRequest) => {
    const newUrl = queryStringify(url, options.data);

    return this.request(newUrl, { ...options, method: METHODS.GET });
  };
  post = ({ url, options = {} }: TNamedRequest) => {
    return this.request(url, { ...options, method: METHODS.POST });
  };
  put = ({ url, options = {} }: TNamedRequest) => {
    return this.request(url, { ...options, method: METHODS.PUT });
  };
  delete = ({ url, options = {} }: TNamedRequest) => {
    return this.request(url, { ...options, method: METHODS.DELETE });
  };

  request = (url: string, options: TOptions) => {
    return new Promise((res, rej) => {
      const xhr = new XMLHttpRequest();

      const { data, method = METHODS.GET, headers, timeout = 5000 } = options;
      xhr.open(method, url, true);

      xhr.timeout = timeout;

      xhr.onload = function () {
        res(xhr);
      };

      if (headers) {
        Object.entries(headers).forEach(([key, value]) => {
          xhr.setRequestHeader(key, value);
        });
      }

      const handleError = () => {
        return rej(new Error());
      };

      xhr.onabort = handleError;
      xhr.onerror = handleError;
      xhr.ontimeout = handleError;

      if (method === METHODS.GET || !data) {
        xhr.send();
      } else {
        xhr.send(data);
      }
    });
  };
}
const api = new HTTPTransport();
export default api;
