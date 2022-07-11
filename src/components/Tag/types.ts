import { ImageSourcePropType, StyleProp, ViewStyle } from 'react-native';
import type { FontNameSpace } from '../../types';

export type TagColorModes = 'dark' | 'light';

export type TagTypes = 'warning' | 'error' | 'success' | 'info';

export interface TagColorConfig {
    background?: string;
    color: string;
}

export interface TagProps {
    /**
     * tag keyword
     */
    children: React.ReactNode;
    /**
     * tag color config
     */
    colorConfig: TagColorConfig;
    /**
     * dark or light
     */
    colorMode?: TagColorModes;
    /**
     * tag with icon source
     */
    icon?: ImageSourcePropType;
    /**
     * tag without container
     */
    noContainer?: boolean;
    style?: StyleProp<ViewStyle>;
    /**
     * can be used for passing font style
     */
    textStyle?: FontNameSpace;
    type?: TagTypes;
}
