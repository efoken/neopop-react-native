import { GestureResponderEvent } from 'react-native';
import type { FontNameSpace } from '../../types';

export interface HeaderProps {
    color?: string;
    description?: string;
    heading?: string;
    onBackPress: (event: GestureResponderEvent) => void;
    textStyle?: {
        description: FontNameSpace;
        heading: FontNameSpace;
    };
}
