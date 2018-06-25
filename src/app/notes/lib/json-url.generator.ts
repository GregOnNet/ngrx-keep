import { Injectable } from '@angular/core';
import {
  DefaultHttpUrlGenerator,
  HttpResourceUrls,
  normalizeRoot,
  Pluralizer
} from 'ngrx-data';

@Injectable()
export class JsonUrlGenerator extends DefaultHttpUrlGenerator {
  private pl: Pluralizer;

  constructor(pluralizer: Pluralizer) {
    super(pluralizer);
    this.pl = pluralizer;
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
        collectionResourceUrl: `${nRoot}/${this.pl.pluralize(
          entityName
        )}.json`.toLowerCase()
      };
      this.registerHttpResourceUrls({ [entityName]: resourceUrls });
    }
    return resourceUrls;
  }
}
