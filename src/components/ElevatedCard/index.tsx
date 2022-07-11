import * as React from 'react';
import { View } from 'react-native';
import useStyles from './styles';
import { CardProps } from './types';

const ElevatedCard: React.FC<CardProps> = ({
    backgroundColor,
    children,
    edgeColors,
    fullWidth,
    style,
    ...props
}) => {
    const styles = useStyles({
        backgroundColor,
        edgeColors,
        fullWidth,
    });

    return (
        <View style={[styles.cardContainer, style]} {...props}>
            <View style={styles.cardFace} {...props}>
                {children}
            </View>
            <View style={[styles.cardEdge, styles.cardEdgeRight]} />
            <View style={[styles.cardEdge, styles.cardEdgeBottom]} />
        </View>
    );
};

export default ElevatedCard;
