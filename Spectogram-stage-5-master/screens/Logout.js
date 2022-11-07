const { View, Button } = require("react-native");

render() {
    if (!this.StaticRange.fontsLoaded) {
        return <AppLoading />;
        
    } else {
        return (
            <View
            style={{
                flex:1,
                justifyContent: "center",
                alignItems "center"

            }}>
            <Buttontitle="Sign in with Google"
            onPress={() => this.signInWithGoogleAsync()}></Button>
            </View>

        )
    }
}