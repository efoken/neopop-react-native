import { GestureResponderEvent } from 'react-native';
import type { FontNameSpace } from '../../types';

export interface BackProps {
    color?: string;
    /**
     * back header heading
     */
    heading?: string;
    /**
     * onPress handler on back button
     */
    onPress?: (event: GestureResponderEvent) => void;
    rightElement?: React.ReactNode;
    textStyle?: FontNameSpace;
}
