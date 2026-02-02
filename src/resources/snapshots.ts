// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Snapshots extends APIResource {
  /**
   * @example
   * ```ts
   * const snapshots = await client.snapshots.list();
   * ```
   */
  list(
    query: SnapshotListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SnapshotListResponse> {
    return this._client.get('/v1/snapshots/list', { query, ...options });
  }

  /**
   * @example
   * ```ts
   * const snapshot = await client.snapshots.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<SnapshotDeleteResponse> {
    return this._client.delete(path`/v1/snapshots/${id}`, options);
  }

  /**
   * @example
   * ```ts
   * const response = await client.snapshots.deleteAll();
   * ```
   */
  deleteAll(options?: RequestOptions): APIPromise<SnapshotDeleteAllResponse> {
    return this._client.delete('/v1/snapshots/delete-all', options);
  }

  /**
   * @example
   * ```ts
   * const response = await client.snapshots.restore('id', {
   *   name: 'restored-project',
   * });
   * ```
   */
  restore(
    id: string,
    body: SnapshotRestoreParams,
    options?: RequestOptions,
  ): APIPromise<SnapshotRestoreResponse> {
    return this._client.post(path`/v1/snapshots/${id}/restore`, { body, ...options });
  }
}

export interface SnapshotListResponse {
  /**
   * Array of snapshots
   */
  data: Array<SnapshotListResponse.Data>;

  /**
   * Pagination metadata
   */
  pagination: SnapshotListResponse.Pagination;
}

export namespace SnapshotListResponse {
  export interface Data {
    /**
     * Snapshot ID (Kubernetes UID)
     */
    id: string;

    /**
     * Creation timestamp
     */
    created_at: string;

    /**
     * Snapshot name
     */
    name: string;

    /**
     * Snapshot status
     */
    status: 'creating' | 'ready' | 'error' | 'pending_deletion';

    /**
     * PVCs that depend on this snapshot (clones). Snapshot cannot be deleted until
     * these are removed.
     */
    depends_on?: Array<string>;

    /**
     * Restore size
     */
    size?: string;
  }

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

export interface SnapshotDeleteResponse {
  /**
   * Whether deletion is deferred (always true for API)
   */
  deferred: boolean;

  /**
   * Deletion status message
   */
  message: string;

  /**
   * Snapshot name
   */
  name: string;
}

export interface SnapshotDeleteAllResponse {
  /**
   * Number of snapshots marked for deletion
   */
  deleted_count: number;

  /**
   * Array of snapshot IDs marked for deletion
   */
  deleted_ids: Array<string>;

  /**
   * Success message
   */
  message: string;

  /**
   * Array of deletion errors, if any
   */
  errors?: Array<SnapshotDeleteAllResponse.Error>;
}

export namespace SnapshotDeleteAllResponse {
  export interface Error {
    /**
     * Snapshot ID that failed to mark for deletion
     */
    id: string;

    /**
     * Error message
     */
    error: string;
  }
}

export interface SnapshotRestoreResponse {
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

  /**
   * ID of the attached storage volume
   */
  storage_id?: string;

  /**
   * Name of the attached storage volume
   */
  storage_name?: string;
}

export interface SnapshotListParams {
  /**
   * Page number
   */
  page?: number;

  /**
   * Page size
   */
  page_size?: number;
}

export interface SnapshotRestoreParams {
  /**
   * Name for the restored sandbox
   */
  name: string;

  /**
   * Docker image override
   */
  image?: string;

  /**
   * Resource overrides for restored sandbox
   */
  resources?: SnapshotRestoreParams.Resources;

  /**
   * Wait for sandbox to be ready
   */
  wait_for_ready?: boolean;
}

export namespace SnapshotRestoreParams {
  /**
   * Resource overrides for restored sandbox
   */
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
     * Storage size (must be >= snapshot size)
     */
    storage?: string;
  }
}

export declare namespace Snapshots {
  export {
    type SnapshotListResponse as SnapshotListResponse,
    type SnapshotDeleteResponse as SnapshotDeleteResponse,
    type SnapshotDeleteAllResponse as SnapshotDeleteAllResponse,
    type SnapshotRestoreResponse as SnapshotRestoreResponse,
    type SnapshotListParams as SnapshotListParams,
    type SnapshotRestoreParams as SnapshotRestoreParams,
  };
}
