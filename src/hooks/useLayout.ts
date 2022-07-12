import * as React from 'react';
import { LayoutChangeEvent } from 'react-native';

const useLayout = () => {
    const [layout, setLayout] = React.useState({
        x: 0,
        y: 0,
        width: 0,
        height: 0,
    });

    const handleLayout = React.useCallback(
        (event: LayoutChangeEvent) => setLayout(event.nativeEvent.layout),
        [],
    );

    return {
        handleLayout,
        ...layout,
    };
};

export default useLayout;
