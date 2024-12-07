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

| Method                     | Description                                                                                  |
|----------------------------|----------------------------------------------------------------------------------------------|
| client.orderType.hev(data) | Order type methods to download or upload files to/from the Bank.                             |
| client.orderType.ini(data) | Send to the bank public signature of electronic signature.                                   |
| client.orderType.ini(data) | Send to the bank public signatures of authentication and encryption.                         |
| client.orderType.hpb(data) | Download the Bank public signatures of authentication and encryption.                        |
| client.orderType.hpd(data) | Download the bank server parameters.                                                         |
| client.orderType.hkd(data) | Download customer`s customer and subscriber information.                                     |
| client.orderType.htd(data) | Download subscriber`s customer and subscriber information.                                   |
| client.orderType.haa(data) | Download Bank available order types.                                                         |
| client.orderType.fdl(data) | Download the files from the bank.                                                            |
| client.orderType.ful(data) | Upload the files to the bank.                                                                |
| client.orderType.ptk(data) | Download transaction status.                                                                 |
| client.orderType.vmk(data) | Download the interim transaction report in SWIFT format (MT942).                             |
| client.orderType.sta(data) | Download the bank account statement.                                                         |
| client.orderType.c52(data) | Download the bank account report in Camt.052 format.                                         |
| client.orderType.c53(data) | Download the bank account statement in Camt.053 format.                                      |
| client.orderType.c54(data) | Download Debit Credit Notification (DTI).                                                    |
| client.orderType.z52(data) | Download the bank account report in Camt.052 format (i.e Switzerland financial services).    |
| client.orderType.z53(data) | Download the bank account statement in Camt.053 format (i.e Switzerland financial services). |
| client.orderType.z54(data) | Download the bank account statement in Camt.054 format (i.e available in Switzerland).       |
| client.orderType.zsr(data) | Download Order/Payment Status report.                                                        |
| client.orderType.xek(data) | Download account information as PDF-file.                                                    |
| client.orderType.cct(data) | Upload initiation of the credit transfer per Single Euro Payments Area.                      |
| client.orderType.cip(data) | Upload initiation of the instant credit transfer per Single Euro Payments Area.              |
| client.orderType.xe2(data) | Upload initiation of the Swiss credit transfer (i.e available in Switzerland).               |
| client.orderType.xe3(data) | Upload SEPA Direct Debit Initiation, CH definitions, CORE (i.e available in Switzerland).    |
| client.orderType.yct(data) | Upload Credit transfer CGI (SEPA & non SEPA).                                                |
| client.orderType.cdb(data) | Upload initiation of the direct debit transaction for business.                              |
| client.orderType.cdd(data) | Upload initiation of the direct debit transaction.                                           |
| client.orderType.btd(data) | Download request files of any BTF structure.                                                 |
| client.orderType.btu(data) | Upload the files to the bank.                                                                |

* ## Access Logs

Tracked access logs to Bank for Connections

* ## Fetched files

Fetched files by run Scheduler Jobs
