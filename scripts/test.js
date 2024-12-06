import EbicsApiClient from '../src/index.js';

const client = new EbicsApiClient(process.env.API_KEY, process.env.API_HOST);

client.connection.create({
  host_url: process.env.HOST_URL,
  host_id: process.env.HOST_ID,
  partner_id: process.env.PARTNER_ID,
  user_id: process.env.USER_ID,
  keyring_op: 'NOT_STORE',
  name: 'My Connection',
}).then((response) => console.log('create-connection', response))
  .catch((error) => console.error('Error:', error));
