import { GestureResponderEvent } from 'react-native';
import type { FontNameSpace } from '../../types';

export interface BackProps {
    color?: string;
    heading?: string;
    onPress?: (event: GestureResponderEvent) => void;
    rightElement?: React.ReactNode;
    textStyle?: FontNameSpace;
}
