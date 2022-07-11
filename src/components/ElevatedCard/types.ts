import { StyleProp, ViewStyle } from 'react-native';

interface EdgeColors {
    bottom: string;
    right: string;
}

export interface CardProps {
    /**
     * card background color
     */
    backgroundColor?: string;
    children: React.ReactNode;
    /**
     * color configs of right & bottom plunk
     */
    edgeColors?: EdgeColors;
    /**
     * if true, card takes full-width of the container
     */
    fullWidth?: boolean;
    /**
     * inline css styles
     */
    style?: StyleProp<ViewStyle>;
}
