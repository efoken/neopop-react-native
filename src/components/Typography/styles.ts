import * as React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { generateTextStyle } from '../../utils';
import { TypographyProps } from './types';

type TypographyStyleType = Pick<
    TypographyProps,
    'color' | 'fontSize' | 'fontType' | 'fontWeight' | 'lineClamp' | 'overflow'
>;

const useStyles = ({
    color,
    fontSize,
    fontType,
    fontWeight,
    lineClamp,
    overflow,
}: TypographyStyleType) =>
    React.useMemo(
        () =>
            StyleSheet.create({
                typographyWrapper: {
                    ...generateTextStyle(fontType, fontSize, fontWeight, color),
                    ...(Platform.OS === 'web' &&
                        (overflow && lineClamp
                            ? {
                                  WebkitBoxOrient: 'vertical',
                                  display: '-webkit-box' as any,
                                  whiteSpace: 'break-spaces',
                              }
                            : {
                                  display: 'block' as any,
                              })),
                },
                paragraphWrapper: {
                    ...generateTextStyle(fontType, fontSize, fontWeight, color),
                    ...(Platform.OS === 'web' &&
                        (overflow && lineClamp
                            ? {
                                  WebkitBoxOrient: 'vertical',
                                  display: '-webkit-box' as any,
                                  whiteSpace: 'break-spaces',
                              }
                            : {
                                  display: 'block' as any,
                              })),
                },
                spanWrapper: {
                    ...generateTextStyle(fontType, fontSize, fontWeight, color),
                    ...(Platform.OS === 'web' &&
                        overflow &&
                        lineClamp && {
                            WebkitBoxOrient: 'vertical',
                            display: '-webkit-box' as any,
                            whiteSpace: 'break-spaces',
                        }),
                },
            }),
        [color, fontSize, fontType, fontWeight, lineClamp, overflow],
    );

export default useStyles;
