import { FontWeight } from '../components/Typography/types';
import { FontNameSpace } from '../types';

export const fontNameSpaces: Record<string, FontNameSpace> = {
    ...[44, 34, 28, 22, 20, 18, 16, 15, 14, 13].reduce(
        (acc: Record<string, object>, fontSize: number) => ({
            ...acc,
            [`th${fontSize}eb`]: {
                fontType: 'heading',
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
                fontType: 'heading',
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
                fontType: 'heading',
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
                fontType: 'body',
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
                fontType: 'body',
                fontSize,
                fontWeight: FontWeight.REGULAR,
            },
        }),
        {},
    ),
    tc12eb: {
        fontType: 'caps',
        fontSize: 12,
        fontWeight: FontWeight.EXTRA_BOLD,
    },
    tc10eb: {
        fontType: 'caps',
        fontSize: 10,
        fontWeight: FontWeight.EXTRA_BOLD,
    },
    tc12b: {
        fontType: 'caps',
        fontSize: 12,
        fontWeight: FontWeight.BOLD,
    },
    tc10b: {
        fontType: 'caps',
        fontSize: 10,
        fontWeight: FontWeight.BOLD,
    },
    tc8b: {
        fontType: 'caps',
        fontSize: 8,
        fontWeight: FontWeight.BOLD,
    },
    tc12sb: {
        fontType: 'caps',
        fontSize: 12,
        fontWeight: FontWeight.SEMI_BOLD,
    },
    tc10sb: {
        fontType: 'caps',
        fontSize: 10,
        fontWeight: FontWeight.SEMI_BOLD,
    },
    ...[36, 34, 32, 24, 22, 20, 18].reduce(
        (acc: Record<string, object>, fontSize: number) => ({
            ...acc,
            [`tsh${fontSize}b`]: {
                fontType: 'serif-heading',
                fontSize,
                fontWeight: FontWeight.BOLD,
            },
        }),
        {},
    ),
};

export const fontVariant: Record<string, FontNameSpace> = {
    HeadingExtraBold44: {
        fontType: 'heading',
        fontSize: 44,
        fontWeight: FontWeight.EXTRA_BOLD,
    },
    HeadingExtraBold34: {
        fontType: 'heading',
        fontSize: 34,
        fontWeight: FontWeight.EXTRA_BOLD,
    },
    HeadingExtraBold28: {
        fontType: 'heading',
        fontSize: 28,
        fontWeight: FontWeight.EXTRA_BOLD,
    },
    HeadingExtraBold22: {
        fontType: 'heading',
        fontSize: 22,
        fontWeight: FontWeight.EXTRA_BOLD,
    },
    HeadingExtraBold20: {
        fontType: 'heading',
        fontSize: 20,
        fontWeight: FontWeight.EXTRA_BOLD,
    },
    HeadingExtraBold18: {
        fontType: 'heading',
        fontSize: 18,
        fontWeight: FontWeight.EXTRA_BOLD,
    },
    HeadingExtraBold16: {
        fontType: 'heading',
        fontSize: 16,
        fontWeight: FontWeight.EXTRA_BOLD,
    },
    HeadingExtraBold15: {
        fontType: 'heading',
        fontSize: 15,
        fontWeight: FontWeight.EXTRA_BOLD,
    },
    HeadingExtraBold14: {
        fontType: 'heading',
        fontSize: 14,
        fontWeight: FontWeight.EXTRA_BOLD,
    },
    HeadingExtraBold13: {
        fontType: 'heading',
        fontSize: 13,
        fontWeight: FontWeight.EXTRA_BOLD,
    },
    HeadingBold34: {
        fontType: 'heading',
        fontSize: 34,
        fontWeight: FontWeight.BOLD,
    },
    HeadingBold28: {
        fontType: 'heading',
        fontSize: 28,
        fontWeight: FontWeight.BOLD,
    },
    HeadingBold22: {
        fontType: 'heading',
        fontSize: 22,
        fontWeight: FontWeight.BOLD,
    },
    HeadingBold20: {
        fontType: 'heading',
        fontSize: 20,
        fontWeight: FontWeight.BOLD,
    },
    HeadingBold18: {
        fontType: 'heading',
        fontSize: 18,
        fontWeight: FontWeight.BOLD,
    },
    HeadingBold16: {
        fontType: 'heading',
        fontSize: 16,
        fontWeight: FontWeight.BOLD,
    },
    HeadingBold14: {
        fontType: 'heading',
        fontSize: 14,
        fontWeight: FontWeight.BOLD,
    },
    HeadingBold13: {
        fontType: 'heading',
        fontSize: 13,
        fontWeight: FontWeight.BOLD,
    },
    HeadingBold11: {
        fontType: 'heading',
        fontSize: 11,
        fontWeight: FontWeight.BOLD,
    },
    HeadingSemiBold22: {
        fontType: 'heading',
        fontSize: 22,
        fontWeight: FontWeight.SEMI_BOLD,
    },
    HeadingSemiBold20: {
        fontType: 'heading',
        fontSize: 20,
        fontWeight: FontWeight.SEMI_BOLD,
    },
    HeadingSemiBold18: {
        fontType: 'heading',
        fontSize: 18,
        fontWeight: FontWeight.SEMI_BOLD,
    },
    HeadingSemiBold16: {
        fontType: 'heading',
        fontSize: 16,
        fontWeight: FontWeight.SEMI_BOLD,
    },
    HeadingSemiBold14: {
        fontType: 'heading',
        fontSize: 14,
        fontWeight: FontWeight.SEMI_BOLD,
    },
    HeadingSemiBold13: {
        fontType: 'heading',
        fontSize: 13,
        fontWeight: FontWeight.SEMI_BOLD,
    },
    HeadingSemiBold12: {
        fontType: 'heading',
        fontSize: 12,
        fontWeight: FontWeight.SEMI_BOLD,
    },
    HeadingSemiBold10: {
        fontType: 'heading',
        fontSize: 10,
        fontWeight: FontWeight.SEMI_BOLD,
    },
    BodyMedium16: {
        fontType: 'body',
        fontSize: 16,
        fontWeight: FontWeight.MEDIUM,
    },
    BodyMedium15: {
        fontType: 'body',
        fontSize: 15,
        fontWeight: FontWeight.MEDIUM,
    },
    BodyMedium14: {
        fontType: 'body',
        fontSize: 14,
        fontWeight: FontWeight.MEDIUM,
    },
    BodyMedium13: {
        fontType: 'body',
        fontSize: 13,
        fontWeight: FontWeight.MEDIUM,
    },
    BodyMedium12: {
        fontType: 'body',
        fontSize: 12,
        fontWeight: FontWeight.MEDIUM,
    },
    BodyMedium11: {
        fontType: 'body',
        fontSize: 11,
        fontWeight: FontWeight.MEDIUM,
    },
    BodyRegular16: {
        fontType: 'body',
        fontSize: 16,
        fontWeight: FontWeight.REGULAR,
    },
    BodyRegular15: {
        fontType: 'body',
        fontSize: 15,
        fontWeight: FontWeight.REGULAR,
    },
    BodyRegular14: {
        fontType: 'body',
        fontSize: 14,
        fontWeight: FontWeight.REGULAR,
    },
    BodyRegular13: {
        fontType: 'body',
        fontSize: 13,
        fontWeight: FontWeight.REGULAR,
    },
    BodyRegular12: {
        fontType: 'body',
        fontSize: 12,
        fontWeight: FontWeight.REGULAR,
    },
    BodyRegular11: {
        fontType: 'body',
        fontSize: 11,
        fontWeight: FontWeight.REGULAR,
    },
    CapsExtraBold12: {
        fontType: 'caps',
        fontSize: 12,
        fontWeight: FontWeight.EXTRA_BOLD,
    },
    CapsExtraBold10: {
        fontType: 'caps',
        fontSize: 10,
        fontWeight: FontWeight.EXTRA_BOLD,
    },
    CapsBold12: {
        fontType: 'caps',
        fontSize: 12,
        fontWeight: FontWeight.BOLD,
    },
    CapsBold10: {
        fontType: 'caps',
        fontSize: 10,
        fontWeight: FontWeight.BOLD,
    },
    CapsBold8: {
        fontType: 'caps',
        fontSize: 8,
        fontWeight: FontWeight.BOLD,
    },
    CapsSemiBold12: {
        fontType: 'caps',
        fontSize: 12,
        fontWeight: FontWeight.SEMI_BOLD,
    },
    CapsSemiBold10: {
        fontType: 'caps',
        fontSize: 10,
        fontWeight: FontWeight.SEMI_BOLD,
    },
    CirkaHeadingBold36: {
        fontType: 'serif-heading',
        fontSize: 36,
        fontWeight: FontWeight.BOLD,
    },
    CirkaHeadingBold34: {
        fontType: 'serif-heading',
        fontSize: 34,
        fontWeight: FontWeight.BOLD,
    },
    CirkaHeadingBold32: {
        fontType: 'serif-heading',
        fontSize: 32,
        fontWeight: FontWeight.BOLD,
    },
    CirkaHeadingBold24: {
        fontType: 'serif-heading',
        fontSize: 24,
        fontWeight: FontWeight.BOLD,
    },
    CirkaHeadingBold22: {
        fontType: 'serif-heading',
        fontSize: 22,
        fontWeight: FontWeight.BOLD,
    },
    CirkaHeadingBold20: {
        fontType: 'serif-heading',
        fontSize: 20,
        fontWeight: FontWeight.BOLD,
    },
    CirkaHeadingBold18: {
        fontType: 'serif-heading',
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
