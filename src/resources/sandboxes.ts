// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { multipartFormRequestOptions } from '../internal/uploads';
import { JSONLDecoder } from '../internal/decoders/jsonl';
import { path } from '../internal/utils/path';

export class Sandboxes extends APIResource {
  /**
   * @example
   * ```ts
   * const sandbox = await client.sandboxes.create();
   * ```
   */
  create(
    body: SandboxCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SandboxCreateResponse> {
    return this._client.post('/v1/sandboxes/create', { body, ...options });
  }

  /**
   * @example
   * ```ts
   * const sandboxes = await client.sandboxes.list();
   * ```
   */
  list(
    query: SandboxListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SandboxListResponse> {
    return this._client.get('/v1/sandboxes/list', { query, ...options });
  }

  /**
   * @example
   * ```ts
   * const sandbox = await client.sandboxes.delete('id');
   * ```
   */
  delete(
    id: string,
    body: SandboxDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SandboxDeleteResponse> {
    return this._client.delete(path`/v1/sandboxes/${id}/delete`, { body, ...options });
  }

  /**
   * @example
   * ```ts
   * const response = await client.sandboxes.clone('id');
   * ```
   */
  clone(
    id: string,
    body: SandboxCloneParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SandboxCloneResponse> {
    return this._client.post(path`/v1/sandboxes/${id}/clone`, { body, ...options });
  }

  /**
   * @example
   * ```ts
   * const response = await client.sandboxes.deleteAll();
   * ```
   */
  deleteAll(options?: RequestOptions): APIPromise<SandboxDeleteAllResponse> {
    return this._client.delete('/v1/sandboxes/delete-all', options);
  }

  /**
   * @example
   * ```ts
   * const response = await client.sandboxes.download('id', {
   *   path: 'path',
   * });
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  download(id: string, query: SandboxDownloadParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.get(path`/v1/sandboxes/${id}/download`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'application/octet-stream' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * @example
   * ```ts
   * const response = await client.sandboxes.execute('id', {
   *   command: 'python -c "print(\'Hello, World!\')"',
   * });
   * ```
   */
  execute(
    id: string,
    body: SandboxExecuteParams,
    options?: RequestOptions,
  ): APIPromise<SandboxExecuteResponse> {
    return this._client.post(path`/v1/sandboxes/${id}/execute`, { body, ...options });
  }

  /**
   * Execute command with streaming output.
   *
   * Executes a long-running command in a sandbox and streams stdout/stderr in
   * real-time.
   *
   * **Response Format**: NDJSON (Newline Delimited JSON) - each line is a JSON
   * object.
   *
   * **Streaming Behavior**:
   *
   * - Output chunks are sent as they're produced by the command
   * - When the command completes, a final chunk with `exit_code` is sent
   *
   * **Client Disconnection**:
   *
   * - When the client closes the connection, the running process is automatically
   *   terminated
   *
   * **Example Client Code**:
   *
   * ```typescript
   * const response = await fetch(url, {
   *   method: "POST",
   *   body: JSON.stringify({ command: "npm run dev" }),
   * });
   * const reader = response.body.getReader();
   * const decoder = new TextDecoder();
   *
   * while (true) {
   *   const { done, value } = await reader.read();
   *   if (done) break;
   *   const lines = decoder.decode(value).split("\n").filter(Boolean);
   *   for (const line of lines) {
   *     const { stdout, stderr, exit_code } = JSON.parse(line);
   *     if (stdout) process.stdout.write(stdout);
   *     if (stderr) process.stderr.write(stderr);
   *   }
   * }
   * ```
   *
   * @example
   * ```ts
   * const response = await client.sandboxes.executeAsync('id', {
   *   command: 'npm run dev',
   * });
   * ```
   */
  executeAsync(
    id: string,
    body: SandboxExecuteAsyncParams,
    options?: RequestOptions,
  ): APIPromise<JSONLDecoder<SandboxExecuteAsyncResponse>> {
    return this._client
      .post(path`/v1/sandboxes/${id}/execute_async`, {
        body,
        ...options,
        headers: buildHeaders([{ Accept: 'application/x-ndjson' }, options?.headers]),
        stream: true,
        __binaryResponse: true,
      })
      ._thenUnwrap((_, props) => JSONLDecoder.fromResponse(props.response, props.controller)) as APIPromise<
      JSONLDecoder<SandboxExecuteAsyncResponse>
    >;
  }

  /**
   * @example
   * ```ts
   * const response = await client.sandboxes.logs();
   * ```
   */
  logs(
    query: SandboxLogsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SandboxLogsResponse> {
    return this._client.get('/v1/sandboxes/logs', { query, ...options });
  }

  /**
   * @example
   * ```ts
   * const response = await client.sandboxes.snapshot('id');
   * ```
   */
  snapshot(
    id: string,
    body: SandboxSnapshotParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SandboxSnapshotResponse> {
    return this._client.post(path`/v1/sandboxes/${id}/snapshot`, { body, ...options });
  }

  /**
   * @example
   * ```ts
   * const response = await client.sandboxes.status('id');
   * ```
   */
  status(
    id: string,
    query: SandboxStatusParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SandboxStatusResponse> {
    return this._client.get(path`/v1/sandboxes/${id}/status`, { query, ...options });
  }

  /**
   * @example
   * ```ts
   * const response = await client.sandboxes.upload('id', {
   *   path: 'path',
   * });
   * ```
   */
  upload(id: string, body: SandboxUploadParams, options?: RequestOptions): APIPromise<SandboxUploadResponse> {
    return this._client.post(
      path`/v1/sandboxes/${id}/upload`,
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }
}

export interface Sandbox {
  /**
   * Sandbox ID
   */
  id: string;

  /**
   * CPU count
   */
  cpu: number;

  /**
   * Creation timestamp
   */
  created_at: string;

  /**
   * Disk size in GB
   */
  disk_size: number;

  /**
   * Memory size in MB
   */
  memory: number;

  /**
   * Sandbox name
   */
  name: string;

  /**
   * Sandbox status
   */
  status: string;
}

export interface SandboxCreateResponse extends Sandbox {
  /**
   * Sandbox ID
   */
  id: string;

  /**
   * CPU count (API units, minimum 1)
   */
  cpu: number;

  /**
   * Creation timestamp
   */
  created_at: string;

  /**
   * Memory size in MiB
   */
  memory: number;

  /**
   * Sandbox name
   */
  name: string;

  /**
   * Sandbox status
   */
  status: string;

  /**
   * Storage size in GB
   */
  storage: number;
}

export interface SandboxListResponse {
  /**
   * Array of sandboxes
   */
  data: Array<Sandbox>;

  /**
   * Pagination metadata
   */
  pagination: SandboxListResponse.Pagination;
}

export namespace SandboxListResponse {
  /**
   * Pagination metadata
   */
  export interface Pagination {
    /**
     * Current page number
     */
    page: number;

    /**
     * Number of items per page
     */
    page_size: number;

    /**
     * Total number of items
     */
    total_items: number;

    /**
     * Total number of pages
     */
    total_pages: number;
  }
}

export interface SandboxDeleteResponse {
  id: string;

  message: string;

  /**
   * Whether snapshot was created
   */
  snapshot_created?: boolean;

  /**
   * Name of created snapshot
   */
  snapshot_name?: string;

  /**
   * Whether storage was deleted
   */
  storage_deleted?: boolean;

  /**
   * Name of deleted storage
   */
  storage_name?: string;
}

export interface SandboxCloneResponse {
  sandbox: SandboxCloneResponse.Sandbox;

  snapshot: SandboxCloneResponse.Snapshot;
}

export namespace SandboxCloneResponse {
  export interface Sandbox {
    /**
     * Sandbox ID
     */
    id: string;

    /**
     * CPU count (API units)
     */
    cpu: number;

    /**
     * Creation timestamp
     */
    created_at: string;

    /**
     * Memory size in MiB
     */
    memory: number;

    /**
     * Sandbox name
     */
    name: string;

    /**
     * Sandbox status
     */
    status: string;

    /**
     * Storage size in GB
     */
    storage: number;
  }

  export interface Snapshot {
    /**
     * Snapshot ID (Kubernetes UID)
     */
    id: string;

    /**
     * Snapshot consistency level
     */
    consistency: 'application' | 'crash';

    /**
     * Creation timestamp
     */
    created_at: string;

    /**
     * Snapshot name
     */
    name: string;

    /**
     * Source sandbox ID
     */
    source_sandbox_id: string;

    /**
     * Source sandbox name
     */
    source_sandbox_name: string;

    /**
     * Snapshot status
     */
    status: 'creating' | 'ready' | 'error';
  }
}

export interface SandboxDeleteAllResponse {
  /**
   * Number of sandboxes deleted
   */
  deleted_count: number;

  /**
   * Array of deleted sandbox IDs
   */
  deleted_ids: Array<string>;

  /**
   * Success message
   */
  message: string;

  /**
   * Array of deletion errors, if any
   */
  errors?: Array<SandboxDeleteAllResponse.Error>;

  /**
   * Number of storage volumes deleted
   */
  storage_deleted_count?: number;
}

export namespace SandboxDeleteAllResponse {
  export interface Error {
    /**
     * Sandbox ID that failed to delete
     */
    id: string;

    /**
     * Error message
     */
    error: string;
  }
}

export interface SandboxExecuteResponse {
  /**
   * Execution ID
   */
  id: string;

  /**
   * Execution completion timestamp
   */
  completed_at: string;

  /**
   * Execution start timestamp
   */
  created_at: string;

  /**
   * Execution time in milliseconds
   */
  execution_time_ms: number;

  /**
   * Exit code
   */
  exit_code: number;

  /**
   * Execution status
   */
  status: 'running' | 'completed' | 'timeout' | 'error';

  /**
   * Standard error output
   */
  stderr: string;

  /**
   * Standard output
   */
  stdout: string;
}

export interface SandboxExecuteAsyncResponse {
  /**
   * Error message if execution failed
   */
  error?: string;

  /**
   * Exit code (sent in final chunk when command completes)
   */
  exit_code?: number;

  /**
   * Standard error chunk
   */
  stderr?: string;

  /**
   * Standard output chunk
   */
  stdout?: string;
}

export interface SandboxLogsResponse {
  /**
   * Execution logs
   */
  logs: Array<SandboxLogsResponse.Log>;

  /**
   * Total number of logs returned
   */
  total: number;
}

export namespace SandboxLogsResponse {
  export interface Log {
    /**
     * Command that was executed
     */
    command: string;

    /**
     * Execution duration in milliseconds
     */
    execution_time_ms: number;

    /**
     * Exit code of the command
     */
    exit_code: number;

    /**
     * Request ID for correlation
     */
    request_id: string;

    /**
     * Sandbox ID where command was executed
     */
    sandbox_id: string;

    /**
     * Source of the log entry - 'sync' for tRPC execute, 'stream' for REST streaming
     */
    source: 'sync' | 'stream';

    /**
     * Execution status
     */
    status: 'completed' | 'timeout' | 'error';

    /**
     * Execution timestamp (ISO 8601)
     */
    timestamp: string;

    /**
     * Unique execution ID (only present for sync execution)
     */
    execution_id?: string;

    /**
     * Standard error (only present for sync execution, may be truncated)
     */
    stderr?: string;

    /**
     * Whether stderr was truncated
     */
    stderr_truncated?: boolean;

    /**
     * Standard output (only present for sync execution, may be truncated)
     */
    stdout?: string;

    /**
     * Whether stdout was truncated
     */
    stdout_truncated?: boolean;

    /**
     * Working directory
     */
    working_dir?: string;
  }
}

export interface SandboxSnapshotResponse {
  /**
   * Snapshot ID (Kubernetes UID)
   */
  id: string;

  /**
   * Snapshot consistency level
   */
  consistency: 'application' | 'crash';

  /**
   * Creation timestamp
   */
  created_at: string;

  /**
   * Snapshot name
   */
  name: string;

  /**
   * Source sandbox ID
   */
  source_sandbox_id: string;

  /**
   * Source sandbox name
   */
  source_sandbox_name: string;

  /**
   * Snapshot status
   */
  status: 'creating' | 'ready' | 'error';
}

export interface SandboxStatusResponse {
  /**
   * Sandbox name
   */
  sandbox_name: string;

  /**
   * Response timestamp (ISO 8601)
   */
  timestamp: string;

  /**
   * Current resource usage
   */
  current?: SandboxStatusResponse.Current;

  /**
   * Historical usage data
   */
  history?: Array<SandboxStatusResponse.History>;
}

export namespace SandboxStatusResponse {
  /**
   * Current resource usage
   */
  export interface Current {
    /**
     * CPU usage percentage (0-100)
     */
    cpu_percent: number;

    /**
     * Current memory usage in megabytes
     */
    memory_mb: number;

    /**
     * Memory usage percentage (0-100)
     */
    memory_percent: number;
  }

  export interface History {
    /**
     * CPU usage percentage (0-100)
     */
    cpu_percent: number;

    /**
     * Memory usage in megabytes
     */
    memory_mb: number;

    /**
     * Sample timestamp (ISO 8601)
     */
    timestamp: string;
  }
}

export interface SandboxUploadResponse {
  /**
   * Success message
   */
  message: string;

  /**
   * Destination path where file was uploaded
   */
  path: string;

  /**
   * File size in bytes
   */
  size: number;
}

export interface SandboxCreateParams {
  /**
   * Environment variables
   */
  env_vars?: { [key: string]: string };

  /**
   * Docker image name (e.g., avmcodes/avm-default-sandbox)
   */
  image?: string;

  /**
   * Custom sandbox name (auto-generated as sandbox-{user_id}-{timestamp} if not
   * provided)
   */
  name?: string;

  resources?: SandboxCreateParams.Resources;

  /**
   * Wait for sandbox to be ready before returning
   */
  wait_for_ready?: boolean;
}

export namespace SandboxCreateParams {
  export interface Resources {
    /**
     * Number of CPUs (minimum: 1, 1 CPU = 0.25 Kubernetes vCPU)
     */
    cpus?: number;

    /**
     * Memory size in MiB
     */
    memory?: number;

    /**
     * Storage size in GB
     */
    storage?: number;
  }
}

export interface SandboxListParams {
  /**
   * Page number
   */
  page?: number;

  /**
   * Page size
   */
  page_size?: number;
}

export interface SandboxDeleteParams {
  /**
   * Create snapshot before deleting storage
   */
  create_snapshot?: boolean;

  /**
   * @deprecated This option is ignored. Storage is always deleted.
   */
  keep_storage?: boolean;

  /**
   * Custom name for the snapshot
   */
  snapshot_name?: string;
}

export interface SandboxCloneParams {
  /**
   * Docker image override
   */
  image?: string;

  /**
   * Name for the cloned sandbox (auto-generated as
   * {source-sandbox-name}-clone-{timestamp} if not provided)
   */
  name?: string;

  /**
   * Resource overrides for cloned sandbox (storage inherited from source)
   */
  resources?: SandboxCloneParams.Resources;

  /**
   * Custom name for intermediate snapshot (auto-generated if not provided)
   */
  snapshot_name?: string;

  /**
   * Wait for sandbox to be ready
   */
  wait_for_ready?: boolean;
}

export namespace SandboxCloneParams {
  /**
   * Resource overrides for cloned sandbox (storage inherited from source)
   */
  export interface Resources {
    /**
     * Number of CPUs (minimum: 1)
     */
    cpus?: number;

    /**
     * Memory size in MiB
     */
    memory?: number;
  }
}

export interface SandboxDownloadParams {
  /**
   * File path in sandbox (e.g., /data/myfile.txt)
   */
  path: string;
}

export interface SandboxExecuteParams {
  /**
   * Command to execute (full CLI command, supports shell features like redirection,
   * pipes, etc.)
   */
  command: string;

  /**
   * Environment variables
   */
  env?: { [key: string]: string };

  /**
   * Execution timeout in seconds
   */
  timeout?: number;

  /**
   * Working directory for execution
   */
  working_dir?: string;
}

export interface SandboxExecuteAsyncParams {
  /**
   * Command to execute (full CLI command, supports shell features like redirection,
   * pipes, etc.)
   */
  command: string;

  /**
   * Environment variables to set for the command
   */
  env?: { [key: string]: string };

  /**
   * Working directory for execution
   */
  working_dir?: string;
}

export interface SandboxLogsParams {
  /**
   * Start time (ISO 8601). Default: 1 hour ago
   */
  from?: string;

  /**
   * Maximum number of logs to return (1-1000). Default: 100
   */
  limit?: number;

  /**
   * Filter to specific sandbox ID
   */
  sandbox_id?: string;

  /**
   * End time (ISO 8601). Default: now
   */
  to?: string;
}

export interface SandboxSnapshotParams {
  /**
   * Custom snapshot name (auto-generated if not provided)
   */
  name?: string;

  /**
   * Quick mode: fsfreeze only (faster but crash-consistent)
   */
  quick?: boolean;
}

export interface SandboxStatusParams {
  /**
   * Start time for historical data (ISO 8601)
   */
  from?: string;

  /**
   * End time for historical data (ISO 8601)
   */
  to?: string;
}

export interface SandboxUploadParams {
  /**
   * Destination path in sandbox (e.g., /data/myfile.txt)
   */
  path: string;

  /**
   * File to upload (binary data)
   */
  file?: unknown;
}

export declare namespace Sandboxes {
  export {
    type Sandbox as Sandbox,
    type SandboxCreateResponse as SandboxCreateResponse,
    type SandboxListResponse as SandboxListResponse,
    type SandboxDeleteResponse as SandboxDeleteResponse,
    type SandboxCloneResponse as SandboxCloneResponse,
    type SandboxDeleteAllResponse as SandboxDeleteAllResponse,
    type SandboxExecuteResponse as SandboxExecuteResponse,
    type SandboxExecuteAsyncResponse as SandboxExecuteAsyncResponse,
    type SandboxLogsResponse as SandboxLogsResponse,
    type SandboxSnapshotResponse as SandboxSnapshotResponse,
    type SandboxStatusResponse as SandboxStatusResponse,
    type SandboxUploadResponse as SandboxUploadResponse,
    type SandboxCreateParams as SandboxCreateParams,
    type SandboxListParams as SandboxListParams,
    type SandboxDeleteParams as SandboxDeleteParams,
    type SandboxCloneParams as SandboxCloneParams,
    type SandboxDownloadParams as SandboxDownloadParams,
    type SandboxExecuteParams as SandboxExecuteParams,
    type SandboxExecuteAsyncParams as SandboxExecuteAsyncParams,
    type SandboxLogsParams as SandboxLogsParams,
    type SandboxSnapshotParams as SandboxSnapshotParams,
    type SandboxStatusParams as SandboxStatusParams,
    type SandboxUploadParams as SandboxUploadParams,
  };
}
