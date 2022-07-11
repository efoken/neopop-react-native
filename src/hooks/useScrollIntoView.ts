import * as React from 'react';
import { Platform } from 'react-native';

interface UseScrollIntoViewOptions {
    ref?: React.MutableRefObject<any>;
    scrollIntoView?: ScrollIntoViewOptions | boolean;
}

const useScrollIntoView = ({ ref, scrollIntoView = false }: UseScrollIntoViewOptions) => {
    React.useEffect(() => {
        if (Platform.OS === 'web') {
            if (scrollIntoView instanceof Object) {
                ref?.current?.scrollIntoView(scrollIntoView);
            } else {
                ref?.current?.scrollIntoView();
            }
        }
    }, [ref, scrollIntoView]);
};

export default useScrollIntoView;
