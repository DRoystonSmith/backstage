/*
 * Copyright 2021 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Entity } from '@backstage/catalog-model';
import { EntitiesSearchFilter } from '../../catalog/types';
import { CatalogPermissionRule } from '../types';

/**
 * A {@link CatalogPermissionRule} which filters for the presence of an
 * annotation on a given entity.
 * @public
 */
export const hasAnnotation: CatalogPermissionRule = {
  name: 'HAS_ANNOTATION',
  description:
    'Allow entities which are annotated with the specified annotation',
  apply: (resource: Entity, annotation: string) =>
    !!resource.metadata.annotations?.hasOwnProperty(annotation),
  toQuery: (annotation: string): EntitiesSearchFilter => ({
    key: `metadata.annotations.${annotation}`,
  }),
};
