import { GestureResponderEvent } from 'react-native';
import type { FontNameSpace } from '../../types';

export interface HeaderProps {
    color?: string;
    /**
     * text-description of the heading
     */
    description?: string;
    /**
     * text-content of the heading
     */
    heading?: string;
    /**
     * onPress handler on back button
     */
    onBackPress?: (event: GestureResponderEvent) => void;
    textStyle?: {
        description: FontNameSpace;
        heading: FontNameSpace;
    };
}
