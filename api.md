# Sandboxes

Types:

- <code><a href="./src/resources/sandboxes.ts">Sandbox</a></code>
- <code><a href="./src/resources/sandboxes.ts">SandboxCreateResponse</a></code>
- <code><a href="./src/resources/sandboxes.ts">SandboxListResponse</a></code>
- <code><a href="./src/resources/sandboxes.ts">SandboxDeleteResponse</a></code>
- <code><a href="./src/resources/sandboxes.ts">SandboxCloneResponse</a></code>
- <code><a href="./src/resources/sandboxes.ts">SandboxDeleteAllResponse</a></code>
- <code><a href="./src/resources/sandboxes.ts">SandboxExecuteResponse</a></code>
- <code><a href="./src/resources/sandboxes.ts">SandboxExecuteAsyncResponse</a></code>
- <code><a href="./src/resources/sandboxes.ts">SandboxLogsResponse</a></code>
- <code><a href="./src/resources/sandboxes.ts">SandboxSnapshotResponse</a></code>
- <code><a href="./src/resources/sandboxes.ts">SandboxStatusResponse</a></code>
- <code><a href="./src/resources/sandboxes.ts">SandboxUploadResponse</a></code>

Methods:

- <code title="post /v1/sandboxes/create">client.sandboxes.<a href="./src/resources/sandboxes.ts">create</a>({ ...params }) -> SandboxCreateResponse</code>
- <code title="get /v1/sandboxes/list">client.sandboxes.<a href="./src/resources/sandboxes.ts">list</a>({ ...params }) -> SandboxListResponse</code>
- <code title="delete /v1/sandboxes/{id}/delete">client.sandboxes.<a href="./src/resources/sandboxes.ts">delete</a>(id, { ...params }) -> SandboxDeleteResponse</code>
- <code title="post /v1/sandboxes/{id}/clone">client.sandboxes.<a href="./src/resources/sandboxes.ts">clone</a>(id, { ...params }) -> SandboxCloneResponse</code>
- <code title="delete /v1/sandboxes/delete-all">client.sandboxes.<a href="./src/resources/sandboxes.ts">deleteAll</a>() -> SandboxDeleteAllResponse</code>
- <code title="get /v1/sandboxes/{id}/download">client.sandboxes.<a href="./src/resources/sandboxes.ts">download</a>(id, { ...params }) -> Response</code>
- <code title="post /v1/sandboxes/{id}/execute">client.sandboxes.<a href="./src/resources/sandboxes.ts">execute</a>(id, { ...params }) -> SandboxExecuteResponse</code>
- <code title="post /v1/sandboxes/{id}/execute_async">client.sandboxes.<a href="./src/resources/sandboxes.ts">executeAsync</a>(id, { ...params }) -> SandboxExecuteAsyncResponse</code>
- <code title="get /v1/sandboxes/logs">client.sandboxes.<a href="./src/resources/sandboxes.ts">logs</a>({ ...params }) -> SandboxLogsResponse</code>
- <code title="post /v1/sandboxes/{id}/snapshot">client.sandboxes.<a href="./src/resources/sandboxes.ts">snapshot</a>(id, { ...params }) -> SandboxSnapshotResponse</code>
- <code title="get /v1/sandboxes/{id}/status">client.sandboxes.<a href="./src/resources/sandboxes.ts">status</a>(id, { ...params }) -> SandboxStatusResponse</code>
- <code title="post /v1/sandboxes/{id}/upload">client.sandboxes.<a href="./src/resources/sandboxes.ts">upload</a>(id, { ...params }) -> SandboxUploadResponse</code>

# Snapshots

Types:

- <code><a href="./src/resources/snapshots.ts">SnapshotListResponse</a></code>
- <code><a href="./src/resources/snapshots.ts">SnapshotDeleteResponse</a></code>
- <code><a href="./src/resources/snapshots.ts">SnapshotDeleteAllResponse</a></code>
- <code><a href="./src/resources/snapshots.ts">SnapshotRestoreResponse</a></code>

Methods:

- <code title="get /v1/snapshots/list">client.snapshots.<a href="./src/resources/snapshots.ts">list</a>({ ...params }) -> SnapshotListResponse</code>
- <code title="delete /v1/snapshots/{id}">client.snapshots.<a href="./src/resources/snapshots.ts">delete</a>(id) -> SnapshotDeleteResponse</code>
- <code title="delete /v1/snapshots/delete-all">client.snapshots.<a href="./src/resources/snapshots.ts">deleteAll</a>() -> SnapshotDeleteAllResponse</code>
- <code title="post /v1/snapshots/{id}/restore">client.snapshots.<a href="./src/resources/snapshots.ts">restore</a>(id, { ...params }) -> SnapshotRestoreResponse</code>
