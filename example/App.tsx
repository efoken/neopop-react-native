import { StatusBar } from 'expo-status-bar';
import { Button, Header, Tag, Typography } from 'neopop-react-native/components';
import { colorGuide, fontVariant } from 'neopop-react-native/primitives';
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
            <SafeAreaView>
                <Header
                    heading="pay rent on CRED"
                    description="pay using credit card and get exclusive rewards"
                />
            </SafeAreaView>
            <Typography {...fontVariant.BodyRegular16}>
                Open up App.tsx to start working on your app!
            </Typography>
            <Button>Test</Button>
            <Tag colorConfig={colorGuide.darkComponents.tags.error}>Error (dark)</Tag>
            <StatusBar
                // eslint-disable-next-line react/style-prop-object
                style="auto"
            />
        </View>
    );
}
