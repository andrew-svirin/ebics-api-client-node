class EbicsApiClient {

  constructor(apiKey, apiHost) {
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

  // Internal method for making requests
  async _makeRequest(endpoint, method, body = null) {
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