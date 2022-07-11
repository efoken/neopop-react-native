import { ImageSourcePropType, StyleProp, ViewStyle } from 'react-native';
import type { FontNameSpace } from '../../types';

export type TagColorModes = 'dark' | 'light';

export type TagTypes = 'warning' | 'error' | 'success' | 'info';

export interface TagColorConfig {
    background?: string;
    color: string;
}

export interface TagProps {
    children: React.ReactNode;
    colorConfig: TagColorConfig;
    colorMode?: TagColorModes;
    icon?: ImageSourcePropType;
    noContainer?: boolean;
    style?: StyleProp<ViewStyle>;
    textStyle?: FontNameSpace;
    type?: TagTypes;
}
