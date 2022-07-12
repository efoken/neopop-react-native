import { StatusBar } from 'expo-status-bar';
import {
    Button,
    Column,
    ElevatedCard,
    Header,
    HorizontalSpacer,
    Row,
    Tag,
    Typography,
} from 'neopop-react-native/components';
import {
    colorGuide,
    colorPalette,
    fontNameSpaces,
    fontVariant,
    getButtonConfig,
    mainColors,
} from 'neopop-react-native/primitives';
import * as React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
});

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar
                // eslint-disable-next-line react/style-prop-object
                style="auto"
            />
            <SafeAreaView>
                <Header
                    heading="pay rent on CRED"
                    description="pay using credit card and get exclusive rewards"
                />
            </SafeAreaView>
            <Typography {...fontVariant.BodyRegular16}>
                Open up App.tsx to start working on your app!
            </Typography>
            <Button colorMode="light" kind="elevated" size="big">
                Test
            </Button>
            <Tag colorConfig={colorGuide.darkComponents.tags.error}>Error (dark)</Tag>
            <ElevatedCard
                backgroundColor="#AE275F"
                edgeColors={{
                    bottom: '#5C1532',
                    right: '#851E49',
                }}
                style={{
                    width: 230,
                }}
            >
                <Column style={{ padding: 20 }}>
                    <Row v="justify">
                        <View>
                            <Typography {...fontNameSpaces.tc12b} color={mainColors.white}>
                                ABCD Bank
                            </Typography>
                            <HorizontalSpacer n={2} />
                            <Typography
                                {...fontNameSpaces.tb11m}
                                color={colorPalette.popWhite[100]}
                                overflow="ellipsis"
                            >
                                XXX 1111
                            </Typography>
                        </View>
                        <Row
                            style={{
                                width: 32,
                                height: 32,
                                borderRadius: 16,
                                borderWidth: 1,
                                borderColor: mainColors.white,
                            }}
                            h="center"
                            v="center"
                        >
                            <View
                                style={{
                                    width: 20,
                                    height: 20,
                                    borderRadius: 10,
                                    backgroundColor: colorPalette.popWhite[300],
                                }}
                            />
                        </Row>
                    </Row>
                    <HorizontalSpacer n={8} />
                    <View style={{ maxWidth: '50%' }}>
                        <Tag
                            colorConfig={{
                                background: mainColors.yellow,
                                color: colorPalette.popWhite[400],
                            }}
                        >
                            Due Today
                        </Tag>
                    </View>
                    <HorizontalSpacer n={2} />
                    <Typography {...fontNameSpaces.th16b} color={mainColors.white}>
                        ₹1000.00
                    </Typography>
                    <HorizontalSpacer n={4} />
                    <Button {...getButtonConfig('blp50p1')} fullWidth>
                        Pay Now
                    </Button>
                </Column>
            </ElevatedCard>
        </View>
    );
}
