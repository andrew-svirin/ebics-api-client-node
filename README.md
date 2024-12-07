# EBICS API Client (nodeJs module)

<img src="./doc/ebics-api-client-logo.png" height="100" align="left" style="padding-right:20px; padding-bottom: 20px;">

NodeJS module to utilize EBICS API Client application.  
EBICS API Client - https://sites.google.com/view/ebics-api-client  
EBICS Client can be deployed as a standalone service on a webserver or within a Docker container and provides:

<br clear="left" />

- :100: Support for EBICS Integration
- :white_check_mark: RESTful API to operate with orders, connections, keyrings, access logs, fetched files
- :white_check_mark: Extended Access Policy
- :white_check_mark: Execute order transactions directly from the App
- :white_check_mark: Manage Connections and Monitor access logs
- :white_check_mark: Scheduler Jobs, Fetched files secure storage

<br clear="left"/>

# Usage

```js

import EbicsApiClient from '../src/index.js';

const client = new EbicsApiClient(process.env.API_KEY, process.env.API_HOST);

```

# Methods

* ## Connections

Connections between client application and bank server.

| Method                             | Description                             |
|------------------------------------|-----------------------------------------|
| client.connection.create(data)     | Create new connection to the Bank.      |
| client.connection.update(id, data) | Update existing connection to the Bank. |
| client.connection.get(id)          | One connection to the Bank.             |
| client.connection.list()           | List of all connections to the Bank.    |
| client.connection.delete(id)       | Delete a connection to the Bank.        |

* ## Keyrings

Keyring with sensitive keys to perform order types methods.

| Method                            | Description                                                                                |
|-----------------------------------|--------------------------------------------------------------------------------------------|
| client.keyring.generate(data)     | Generate new keyring and encrypt by secret<br/> (Requires before INI and HIA order types). |
| client.keyring.init(data)         | Initialize keyring (Only before Bank activated connection).                                |
| client.keyring.confirm(data)      | Confirm keyring (Only after Bank activated connection).                                    |
| client.keyring.suspend(data)      | Deactivate keyring (SPR order type).                                                       |
| client.keyring.letter(data)       | Letter should be sent to Bank for Keyring activation.                                      |
| client.keyring.changeSecret(data) | Change secret for existing Keyring.                                                        |

* ## Order Types

Order type methods to download or upload files to/from the Bank.

* ## Access Logs

Tracked access logs to Bank for Connections

* ## Fetched files

Fetched files by run Scheduler Jobs
