import { FontType, FontWeight } from '../components/Typography/types';
import { FontNameSpace } from '../types';

export const fontNameSpaces: Record<string, FontNameSpace> = {
    ...[44, 34, 28, 22, 20, 18, 16, 15, 14, 13].reduce(
        (acc: Record<string, object>, fontSize: number) => ({
            ...acc,
            [`th${fontSize}eb`]: {
                fontType: FontType.HEADING,
                fontSize,
                fontWeight: FontWeight.EXTRA_BOLD,
            },
        }),
        {},
    ),
    ...[34, 28, 22, 20, 18, 16, 14, 13, 11].reduce(
        (acc: Record<string, object>, fontSize: number) => ({
            ...acc,
            [`th${fontSize}b`]: {
                fontType: FontType.HEADING,
                fontSize,
                fontWeight: FontWeight.BOLD,
            },
        }),
        {},
    ),
    ...[22, 20, 18, 16, 14, 13, 12, 10].reduce(
        (acc: Record<string, object>, fontSize: number) => ({
            ...acc,
            [`th${fontSize}sb`]: {
                fontType: FontType.HEADING,
                fontSize,
                fontWeight: FontWeight.SEMI_BOLD,
            },
        }),
        {},
    ),
    ...[16, 15, 14, 13, 12, 11].reduce(
        (acc: Record<string, object>, fontSize: number) => ({
            ...acc,
            [`tb${fontSize}m`]: {
                fontType: FontType.BODY,
                fontSize,
                fontWeight: FontWeight.MEDIUM,
            },
        }),
        {},
    ),
    ...[16, 15, 14, 13, 12, 11].reduce(
        (acc: Record<string, object>, fontSize: number) => ({
            ...acc,
            [`tb${fontSize}r`]: {
                fontType: FontType.BODY,
                fontSize,
                fontWeight: FontWeight.REGULAR,
            },
        }),
        {},
    ),
    tc12eb: {
        fontType: FontType.CAPS,
        fontSize: 12,
        fontWeight: FontWeight.EXTRA_BOLD,
    },
    tc10eb: {
        fontType: FontType.CAPS,
        fontSize: 10,
        fontWeight: FontWeight.EXTRA_BOLD,
    },
    tc12b: {
        fontType: FontType.CAPS,
        fontSize: 12,
        fontWeight: FontWeight.BOLD,
    },
    tc10b: {
        fontType: FontType.CAPS,
        fontSize: 10,
        fontWeight: FontWeight.BOLD,
    },
    tc8b: {
        fontType: FontType.CAPS,
        fontSize: 8,
        fontWeight: FontWeight.BOLD,
    },
    tc12sb: {
        fontType: FontType.CAPS,
        fontSize: 12,
        fontWeight: FontWeight.SEMI_BOLD,
    },
    tc10sb: {
        fontType: FontType.CAPS,
        fontSize: 10,
        fontWeight: FontWeight.SEMI_BOLD,
    },
    ...[36, 34, 32, 24, 22, 20, 18].reduce(
        (acc: Record<string, object>, fontSize: number) => ({
            ...acc,
            [`tsh${fontSize}b`]: {
                fontType: FontType.SERIF_HEADING,
                fontSize,
                fontWeight: FontWeight.BOLD,
            },
        }),
        {},
    ),
};

export const fontVariant: Record<string, FontNameSpace> = {
    HeadingExtraBold44: {
        fontType: FontType.HEADING,
        fontSize: 44,
        fontWeight: FontWeight.EXTRA_BOLD,
    },
    HeadingExtraBold34: {
        fontType: FontType.HEADING,
        fontSize: 34,
        fontWeight: FontWeight.EXTRA_BOLD,
    },
    HeadingExtraBold28: {
        fontType: FontType.HEADING,
        fontSize: 28,
        fontWeight: FontWeight.EXTRA_BOLD,
    },
    HeadingExtraBold22: {
        fontType: FontType.HEADING,
        fontSize: 22,
        fontWeight: FontWeight.EXTRA_BOLD,
    },
    HeadingExtraBold20: {
        fontType: FontType.HEADING,
        fontSize: 20,
        fontWeight: FontWeight.EXTRA_BOLD,
    },
    HeadingExtraBold18: {
        fontType: FontType.HEADING,
        fontSize: 18,
        fontWeight: FontWeight.EXTRA_BOLD,
    },
    HeadingExtraBold16: {
        fontType: FontType.HEADING,
        fontSize: 16,
        fontWeight: FontWeight.EXTRA_BOLD,
    },
    HeadingExtraBold15: {
        fontType: FontType.HEADING,
        fontSize: 15,
        fontWeight: FontWeight.EXTRA_BOLD,
    },
    HeadingExtraBold14: {
        fontType: FontType.HEADING,
        fontSize: 14,
        fontWeight: FontWeight.EXTRA_BOLD,
    },
    HeadingExtraBold13: {
        fontType: FontType.HEADING,
        fontSize: 13,
        fontWeight: FontWeight.EXTRA_BOLD,
    },
    HeadingBold34: {
        fontType: FontType.HEADING,
        fontSize: 34,
        fontWeight: FontWeight.BOLD,
    },
    HeadingBold28: {
        fontType: FontType.HEADING,
        fontSize: 28,
        fontWeight: FontWeight.BOLD,
    },
    HeadingBold22: {
        fontType: FontType.HEADING,
        fontSize: 22,
        fontWeight: FontWeight.BOLD,
    },
    HeadingBold20: {
        fontType: FontType.HEADING,
        fontSize: 20,
        fontWeight: FontWeight.BOLD,
    },
    HeadingBold18: {
        fontType: FontType.HEADING,
        fontSize: 18,
        fontWeight: FontWeight.BOLD,
    },
    HeadingBold16: {
        fontType: FontType.HEADING,
        fontSize: 16,
        fontWeight: FontWeight.BOLD,
    },
    HeadingBold14: {
        fontType: FontType.HEADING,
        fontSize: 14,
        fontWeight: FontWeight.BOLD,
    },
    HeadingBold13: {
        fontType: FontType.HEADING,
        fontSize: 13,
        fontWeight: FontWeight.BOLD,
    },
    HeadingBold11: {
        fontType: FontType.HEADING,
        fontSize: 11,
        fontWeight: FontWeight.BOLD,
    },
    HeadingSemiBold22: {
        fontType: FontType.HEADING,
        fontSize: 22,
        fontWeight: FontWeight.SEMI_BOLD,
    },
    HeadingSemiBold20: {
        fontType: FontType.HEADING,
        fontSize: 20,
        fontWeight: FontWeight.SEMI_BOLD,
    },
    HeadingSemiBold18: {
        fontType: FontType.HEADING,
        fontSize: 18,
        fontWeight: FontWeight.SEMI_BOLD,
    },
    HeadingSemiBold16: {
        fontType: FontType.HEADING,
        fontSize: 16,
        fontWeight: FontWeight.SEMI_BOLD,
    },
    HeadingSemiBold14: {
        fontType: FontType.HEADING,
        fontSize: 14,
        fontWeight: FontWeight.SEMI_BOLD,
    },
    HeadingSemiBold13: {
        fontType: FontType.HEADING,
        fontSize: 13,
        fontWeight: FontWeight.SEMI_BOLD,
    },
    HeadingSemiBold12: {
        fontType: FontType.HEADING,
        fontSize: 12,
        fontWeight: FontWeight.SEMI_BOLD,
    },
    HeadingSemiBold10: {
        fontType: FontType.HEADING,
        fontSize: 10,
        fontWeight: FontWeight.SEMI_BOLD,
    },
    BodyMedium16: {
        fontType: FontType.BODY,
        fontSize: 16,
        fontWeight: FontWeight.MEDIUM,
    },
    BodyMedium15: {
        fontType: FontType.BODY,
        fontSize: 15,
        fontWeight: FontWeight.MEDIUM,
    },
    BodyMedium14: {
        fontType: FontType.BODY,
        fontSize: 14,
        fontWeight: FontWeight.MEDIUM,
    },
    BodyMedium13: {
        fontType: FontType.BODY,
        fontSize: 13,
        fontWeight: FontWeight.MEDIUM,
    },
    BodyMedium12: {
        fontType: FontType.BODY,
        fontSize: 12,
        fontWeight: FontWeight.MEDIUM,
    },
    BodyMedium11: {
        fontType: FontType.BODY,
        fontSize: 11,
        fontWeight: FontWeight.MEDIUM,
    },
    BodyRegular16: {
        fontType: FontType.BODY,
        fontSize: 16,
        fontWeight: FontWeight.REGULAR,
    },
    BodyRegular15: {
        fontType: FontType.BODY,
        fontSize: 15,
        fontWeight: FontWeight.REGULAR,
    },
    BodyRegular14: {
        fontType: FontType.BODY,
        fontSize: 14,
        fontWeight: FontWeight.REGULAR,
    },
    BodyRegular13: {
        fontType: FontType.BODY,
        fontSize: 13,
        fontWeight: FontWeight.REGULAR,
    },
    BodyRegular12: {
        fontType: FontType.BODY,
        fontSize: 12,
        fontWeight: FontWeight.REGULAR,
    },
    BodyRegular11: {
        fontType: FontType.BODY,
        fontSize: 11,
        fontWeight: FontWeight.REGULAR,
    },
    CapsExtraBold12: {
        fontType: FontType.CAPS,
        fontSize: 12,
        fontWeight: FontWeight.EXTRA_BOLD,
    },
    CapsExtraBold10: {
        fontType: FontType.CAPS,
        fontSize: 10,
        fontWeight: FontWeight.EXTRA_BOLD,
    },
    CapsBold12: {
        fontType: FontType.CAPS,
        fontSize: 12,
        fontWeight: FontWeight.BOLD,
    },
    CapsBold10: {
        fontType: FontType.CAPS,
        fontSize: 10,
        fontWeight: FontWeight.BOLD,
    },
    CapsBold8: {
        fontType: FontType.CAPS,
        fontSize: 8,
        fontWeight: FontWeight.BOLD,
    },
    CapsSemiBold12: {
        fontType: FontType.CAPS,
        fontSize: 12,
        fontWeight: FontWeight.SEMI_BOLD,
    },
    CapsSemiBold10: {
        fontType: FontType.CAPS,
        fontSize: 10,
        fontWeight: FontWeight.SEMI_BOLD,
    },
    CirkaHeadingBold36: {
        fontType: FontType.SERIF_HEADING,
        fontSize: 36,
        fontWeight: FontWeight.BOLD,
    },
    CirkaHeadingBold34: {
        fontType: FontType.SERIF_HEADING,
        fontSize: 34,
        fontWeight: FontWeight.BOLD,
    },
    CirkaHeadingBold32: {
        fontType: FontType.SERIF_HEADING,
        fontSize: 32,
        fontWeight: FontWeight.BOLD,
    },
    CirkaHeadingBold24: {
        fontType: FontType.SERIF_HEADING,
        fontSize: 24,
        fontWeight: FontWeight.BOLD,
    },
    CirkaHeadingBold22: {
        fontType: FontType.SERIF_HEADING,
        fontSize: 22,
        fontWeight: FontWeight.BOLD,
    },
    CirkaHeadingBold20: {
        fontType: FontType.SERIF_HEADING,
        fontSize: 20,
        fontWeight: FontWeight.BOLD,
    },
    CirkaHeadingBold18: {
        fontType: FontType.SERIF_HEADING,
        fontSize: 18,
        fontWeight: FontWeight.BOLD,
    },
};

export const typographyGuide = {
    back: {
        heading: fontVariant.HeadingSemiBold14,
    },
    header: {
        heading: fontVariant.CirkaHeadingBold24,
        description: fontVariant.BodyMedium14,
    },
    containerCard: {
        heading: fontVariant.HeadingBold14,
        description: fontVariant.BodyMedium13,
    },
    bottomSheet: {},
    tags: {
        containerText: fontVariant.CapsBold8,
        noContainerText: fontVariant.CapsBold10,
    },
    searchBar: {
        input: fontVariant.HeadingSemiBold13,
    },
    buttons: {
        big: fontVariant.HeadingBold14,
        medium: fontVariant.HeadingBold13,
        small: fontVariant.HeadingBold11,
    },
    checkbox: {},
    toast: {
        heading: fontVariant.HeadingSemiBold13,
        description: fontVariant.BodyRegular11,
    },
    inputFields: {
        label: fontVariant.CapsBold8,
        text: fontVariant.HeadingBold22,
    },
};
