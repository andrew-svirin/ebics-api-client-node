class EbicsApiClient {

  constructor (apiKey, apiHost) {
    this.apiKey = apiKey;
    this.apiHost = apiHost;
  }

  // Group: Connection
  connection = {
    // Create connection.
    create: async (data) => {
      return this._makeRequest('/api/ebics/connections/create', 'POST', data);
    },

    // Update connection.
    update: async (id, data) => {
      return this._makeRequest(`/api/ebics/connections/${id}/update`, 'POST', data);
    },

    // Get connection.
    get: async (id) => {
      return this._makeRequest(`/api/ebics/connections/${id}`, 'GET');
    },

    // List od connections.
    list: async () => {
      return this._makeRequest('/api/ebics/connections', 'GET');
    },

    // Delete connection.
    delete: async (id) => {
      return this._makeRequest(`/api/ebics/connections/${id}`, 'DELETE');
    },
  };

  keyring = {
    // Generate keyring.
    generate: async (data) => {
      return this._makeRequest('/api/ebics/keyring/generate', 'POST', data);
    },

    // Initialize keyring activation.
    init: async (data) => {
      return this._makeRequest('/api/ebics/keyring/init', 'POST', data);
    },

    // Confirm keyring activation.
    confirm: async (data) => {
      return this._makeRequest('/api/ebics/keyring/confirm', 'POST', data);
    },

    // Suspend keyring activation.
    suspend: async (data) => {
      return this._makeRequest('/api/ebics/keyring/suspend', 'POST', data);
    },

    // Get letter for keyring.
    letter: async (data) => {
      return this._makeRequest('/api/ebics/keyring/letter', 'POST', data);
    },

    // Change secret for keyring.
    changeSecret: async (data) => {
      return this._makeRequest('/api/ebics/keyring/change-secret', 'POST', data);
    },
  };

  orderType = {
    // HEV Order type.
    hev: async (data) => {
      return this._makeRequest('/api/ebics/order-types/hev', 'POST', data);
    },

    // INI Order type.
    ini: async (data) => {
      return this._makeRequest('/api/ebics/order-types/ini', 'POST', data);
    },

    // HIA Order type.
    hia: async (data) => {
      return this._makeRequest('/api/ebics/order-types/hia', 'POST', data);
    },

    // HPB Order type.
    hpb: async (data) => {
      return this._makeRequest('/api/ebics/order-types/hpb', 'POST', data);
    },

    // HPD Order type.
    hpd: async (data) => {
      return this._makeRequest('/api/ebics/order-types/hpd', 'POST', data);
    },

    // HKD Order type.
    hkd: async (data) => {
      return this._makeRequest('/api/ebics/order-types/hkd', 'POST', data);
    },

    // HTD Order type.
    htd: async (data) => {
      return this._makeRequest('/api/ebics/order-types/htd', 'POST', data);
    },

    // HAA Order type.
    haa: async (data) => {
      return this._makeRequest('/api/ebics/order-types/haa', 'POST', data);
    },

    // FDL Order type.
    fdl: async (data) => {
      return this._makeRequest('/api/ebics/order-types/fdl', 'POST', data);
    },

    // FUL Order type.
    ful: async (data) => {
      return this._makeRequest('/api/ebics/order-types/ful', 'POST', data);
    },

    // PTK Order type.
    ptk: async (data) => {
      return this._makeRequest('/api/ebics/order-types/ptk', 'POST', data);
    },

    // VMK Order type.
    vmk: async (data) => {
      return this._makeRequest('/api/ebics/order-types/vmk', 'POST', data);
    },

    // STA Order type.
    sta: async (data) => {
      return this._makeRequest('/api/ebics/order-types/sta', 'POST', data);
    },

    // C52 Order type.
    c52: async (data) => {
      return this._makeRequest('/api/ebics/order-types/c52', 'POST', data);
    },

    // C53 Order type.
    c53: async (data) => {
      return this._makeRequest('/api/ebics/order-types/c53', 'POST', data);
    },

    // C54 Order type.
    c54: async (data) => {
      return this._makeRequest('/api/ebics/order-types/c54', 'POST', data);
    },

    // Z52 Order type.
    z52: async (data) => {
      return this._makeRequest('/api/ebics/order-types/z52', 'POST', data);
    },

    // Z53 Order type.
    z53: async (data) => {
      return this._makeRequest('/api/ebics/order-types/z53', 'POST', data);
    },

    // Z54 Order type.
    z54: async (data) => {
      return this._makeRequest('/api/ebics/order-types/z54', 'POST', data);
    },

    // ZSR Order type.
    zsr: async (data) => {
      return this._makeRequest('/api/ebics/order-types/zsr', 'POST', data);
    },

    // XEK Order type.
    xek: async (data) => {
      return this._makeRequest('/api/ebics/order-types/xek', 'POST', data);
    },

    // CCT Order type.
    cct: async (data) => {
      return this._makeRequest('/api/ebics/order-types/cct', 'POST', data);
    },

    // CIP Order type.
    cip: async (data) => {
      return this._makeRequest('/api/ebics/order-types/cip', 'POST', data);
    },

    // XE2 Order type.
    xe2: async (data) => {
      return this._makeRequest('/api/ebics/order-types/xe2', 'POST', data);
    },

    // XE3 Order type.
    xe3: async (data) => {
      return this._makeRequest('/api/ebics/order-types/xe3', 'POST', data);
    },

    // YCT Order type.
    yct: async (data) => {
      return this._makeRequest('/api/ebics/order-types/yct', 'POST', data);
    },

    // CDB Order type.
    cdb: async (data) => {
      return this._makeRequest('/api/ebics/order-types/cdb', 'POST', data);
    },

    // CDD Order type.
    cdd: async (data) => {
      return this._makeRequest('/api/ebics/order-types/cdd', 'POST', data);
    },

    // BTD Order type.
    btd: async (data) => {
      return this._makeRequest('/api/ebics/order-types/btd', 'POST', data);
    },

    // BTU Order type.
    btu: async (data) => {
      return this._makeRequest('/api/ebics/order-types/btu', 'POST', data);
    },
  };

  // Internal method for making requests
  async _makeRequest (endpoint, method, body = null) {
    const options = {
      method,
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Key ' + this.apiKey,
      },
    };

    if (body) {
      const formData = new FormData();
      Object.keys(body).map(e => {
        formData.append(e, body[e]);
      });

      options.body = formData;
    }

    const response = await fetch(`${this.apiHost}${endpoint}`, options);

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${await response.text()}`);
    }

    return response.json();
  }

}

export default EbicsApiClient;