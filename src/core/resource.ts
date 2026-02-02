// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Akira } from '../client';

export abstract class APIResource {
  protected _client: Akira;

  constructor(client: Akira) {
    this._client = client;
  }
}
