class Api {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  getWMSCapabilities() {
    return fetch(`${this.baseUrl}?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities`, {
      method: 'GET'
    })
      .then((res) => {
        return res.text();
      })
  };
};

export default Api;