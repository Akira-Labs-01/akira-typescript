// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Akira from 'akira';

const client = new Akira({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource sandboxes', () => {
  // Prism tests are disabled
  test.skip('create', async () => {
    const responsePromise = client.sandboxes.create();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('create: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.sandboxes.create(
        {
          env_vars: { foo: 'string' },
          image: 'avmcodes/avm-default-sandbox',
          name: 'my-project',
          resources: {
            cpus: 1,
            memory: 512,
            storage: 10,
          },
          wait_for_ready: true,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Akira.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.sandboxes.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.sandboxes.list({ page: 1, page_size: 20 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Akira.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.sandboxes.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('delete: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.sandboxes.delete(
        'id',
        {
          create_snapshot: true,
          keep_storage: true,
          snapshot_name: 'final-backup',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Akira.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('clone', async () => {
    const responsePromise = client.sandboxes.clone('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('clone: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.sandboxes.clone(
        'id',
        {
          image: 'image',
          name: 'my-cloned-sandbox',
          resources: { cpus: 2, memory: 1024 },
          snapshot_name: 'clone-backup-1',
          wait_for_ready: true,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Akira.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('deleteAll', async () => {
    const responsePromise = client.sandboxes.deleteAll();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('download: required and optional params', async () => {
    const response = await client.sandboxes.download('id', { path: 'path' });
  });

  // Prism tests are disabled
  test.skip('execute: only required params', async () => {
    const responsePromise = client.sandboxes.execute('id', {
      command: 'python -c "print(\'Hello, World!\')"',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('execute: required and optional params', async () => {
    const response = await client.sandboxes.execute('id', {
      command: 'python -c "print(\'Hello, World!\')"',
      env: { foo: 'string' },
      timeout: 5,
      working_dir: 'working_dir',
    });
  });

  // Prism doesn't support application/x-ndjson responses
  test.skip('executeAsync: only required params', async () => {
    const responsePromise = client.sandboxes.executeAsync('id', { command: 'npm run dev' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism doesn't support application/x-ndjson responses
  test.skip('executeAsync: required and optional params', async () => {
    const response = await client.sandboxes.executeAsync('id', {
      command: 'npm run dev',
      env: { foo: 'string' },
      working_dir: 'working_dir',
    });
  });

  // Prism tests are disabled
  test.skip('logs', async () => {
    const responsePromise = client.sandboxes.logs();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('logs: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.sandboxes.logs(
        {
          from: '2019-12-27T18:11:19.117Z',
          limit: 1,
          sandbox_id: 'sandbox_id',
          to: '2019-12-27T18:11:19.117Z',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Akira.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('snapshot', async () => {
    const responsePromise = client.sandboxes.snapshot('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('snapshot: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.sandboxes.snapshot(
        'id',
        { name: 'my-snapshot-backup', quick: false },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Akira.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('status', async () => {
    const responsePromise = client.sandboxes.status('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('status: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.sandboxes.status(
        'id',
        { from: '2019-12-27T18:11:19.117Z', to: '2019-12-27T18:11:19.117Z' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Akira.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('upload: only required params', async () => {
    const responsePromise = client.sandboxes.upload('id', { path: 'path' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('upload: required and optional params', async () => {
    const response = await client.sandboxes.upload('id', {
      path: 'path',
      file: {},
    });
  });
});
