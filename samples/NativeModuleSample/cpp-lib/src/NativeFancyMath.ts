// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
  getConstants: () => {
    E: number;
    Pi: number;
  };
  add(a: number, b: number, callback: (value: number) => void): void;
}

export default TurboModuleRegistry.getEnforcing<Spec>('FancyMath');
