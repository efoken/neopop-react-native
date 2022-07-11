import { TagColorModes, TagTypes } from '../components/Tag/types';
import { colorGuide } from './colors';

export const getTagColors = (type: TagTypes, mode: TagColorModes) => {
    const colors =
        mode === 'dark' ? colorGuide.darkComponents.tags : colorGuide.lightComponents.tags;

    switch (type) {
        case 'success':
            return colors.success;
        case 'error':
            return colors.error;
        case 'warning':
            return colors.warning;
        default:
            return colors.error;
    }
};
