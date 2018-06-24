import { Injectable } from '@angular/core';
import {
  DefaultHttpUrlGenerator,
  EntityHttpResourceUrls,
  HttpResourceUrls,
  normalizeRoot,
  Pluralizer
} from 'ngrx-data';

@Injectable()
export class JsonUrlGenerator extends DefaultHttpUrlGenerator {
  private pluralizer2: Pluralizer;
  /**
   * Known single-entity and collection resource URLs for HTTP calls.
   * Generator methods returns these resource URLs for a given entity type name.
   * If the resources for an entity type name are not know, it generates
   * and caches a resource name for future use
   */
  protected knownHttpResourceUrls: EntityHttpResourceUrls = {};

  constructor(pluralizer: Pluralizer) {
    super(pluralizer);
    this.pluralizer2 = pluralizer;
  }

  /**
   * Get or generate the entity and collection resource URLs for the given entity type name
   * @param entityName {string} Name of the entity type, e.g, 'Hero'
   * @param root {string} Root path to the resource, e.g., 'some-api`
   */
  protected getResourceUrls(
    entityName: string,
    root: string
  ): HttpResourceUrls {
    let resourceUrls = this.knownHttpResourceUrls[entityName];
    if (!resourceUrls) {
      const nRoot = normalizeRoot(root);
      resourceUrls = {
        entityResourceUrl: `${nRoot}/${entityName}.json`.toLowerCase(),
        collectionResourceUrl: `${nRoot}/${this.pluralizer2.pluralize(
          entityName
        )}.json`.toLowerCase()
      };
      this.registerHttpResourceUrls({ [entityName]: resourceUrls });
    }
    return resourceUrls;
  }
}
