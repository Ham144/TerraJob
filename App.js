import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Login from './App/Screens/LoginScreen/Login';
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";


export default function App() {
  return (
    <ClerkProvider publishableKey='pk_test_bmVhcmJ5LWtpbmdmaXNoLTk2LmNsZXJrLmFjY291bnRzLmRldiQ'>
      <View style={styles.container} >
        <SignedIn>
          <Text>You are Signed in</Text>
        </SignedIn>
        <SignedOut>
          <Login />
        </SignedOut>
      </View>
    </ClerkProvider>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2dcdc",
    alignItems: 'center',
    justifyContent: 'center',
  },
});
