// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export type Response = {
  statusCode: number;
  content: string;
};

export interface Spec extends TurboModule {
  GetHttpResponse(uri: string): Promise<Response>;
}

export default TurboModuleRegistry.getEnforcing<Spec>('SimpleHttpModule');
