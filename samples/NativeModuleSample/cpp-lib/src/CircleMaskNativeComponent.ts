// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import { codegenNativeComponent } from 'react-native';
import type { ViewProps } from 'react-native';

export interface CircleMaskProps extends ViewProps {}

export default codegenNativeComponent<CircleMaskProps>('CircleMask');
