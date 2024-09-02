// import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import React from "react";
// import { colors } from "../utils/colors";
// import { fonts } from "../utils/fonts";
// import { useNavigation } from "@react-navigation/native";

// const HomeScreen = () => {
//   const navigation = useNavigation();

//   const handleLogin = () => {
//     navigation.navigate("Login");
//   };

//   const handleSignup = () => {
//     navigation.navigate("Signup");
//   };
//   return (
//     <View style={styles.container}>
//       <Image source={require("../assests/logo.png")} style={styles.logo} />
//       <Image source={require("../assests/man.png")} style={styles.bannerImage} />
//       <Text style={styles.title}>Lorem ipsum dolor.</Text>
//       <Text style={styles.subTitle}>
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//         tempor incididunt ut labore et dolore 
//       </Text>
//       <View style={styles.buttonContainer}>
//         <TouchableOpacity
//           style={[
//             styles.loginButtonWrapper,
//             { backgroundColor: colors.primary },
//           ]}
//           onPress={handleLogin}
//         >
//           <Text style={styles.loginButtonText}>Login</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[styles.loginButtonWrapper,
//             // {
//             //   color:colors.gray
//             // }
//           ]
//            }
//           onPress={handleSignup}
//         >
//           <Text style={styles.signupButtonText}>Sign-up</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default HomeScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: colors.white,
//     alignItems: "center",
//   },
//   logo: {
//     height: 40,
//     width: 140,
//     marginVertical: 30,
//   },
//   bannerImage: {
//     marginVertical: 20,
//     height: 190,
//     width: 200,
//   },
//   title: {
//     fontSize: 40,
//     fontFamily: fonts.SemiBold,
//     paddingHorizontal: 20,
//     textAlign: "center",
//     color: colors.primary,
//     marginTop: 40,
//   },
//   subTitle: {
//     fontSize: 18,
//     paddingHorizontal: 20,
//     textAlign: "center",
//     color: colors.secondary,
//     fontFamily: fonts.Medium,
//     marginVertical: 20,
//   },
//   buttonContainer: {
//     marginTop: 20,
//     flexDirection: "row",
//     borderWidth: 2,
//     borderColor: colors.primary,
//     width: "80%",
//     height: 60,
//     borderRadius: 100,
//   },
//   loginButtonWrapper: {
//     justifyContent: "center",
//     alignItems: "center",
//     width: "50%",
//     borderRadius: 98,
//   },
//   loginButtonText: {
//     color: colors.white,
//     fontSize: 18,
//     fontFamily: fonts.SemiBold,
//   },
//   signupButtonText: {
//     fontSize: 18,
//     fontFamily: fonts.SemiBold,
//   },
// });
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { colors } from "../utils/colors";
import { fonts } from "../utils/fonts";

// Define the navigation types
type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
};

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleLogin = () => {
    navigation.navigate("Login");
  };

  const handleSignup = () => {
    navigation.navigate("Signup");
  };

  return (
    <View style={styles.container}>
      {/* <Image source={require("../assests/logo.png")} style={styles.logo} /> */}
      <Text style={styles.logo}>TaskLyst</Text>
      <Image source={require("../assests/man.png")} style={styles.bannerImage} />
      <Text style={styles.title}>Lorem ipsum dolor.</Text>
      <Text style={styles.subTitle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.loginButtonWrapper, { backgroundColor: colors.primary }]}
          onPress={handleLogin}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.loginButtonWrapper,
            // { color: colors.gray }
          ]}
          onPress={handleSignup}
        >
          <Text style={styles.signupButtonText}>Sign-up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
  },
  logo: {
    // height: 40,
    // width: 140,
    fontSize: 30,
    color:colors.primary,
    marginVertical: 35,
  },
  bannerImage: {
    marginVertical: 20,
    height: 200,
    width: 180,
  },
  title: {
    fontSize: 40,
    fontFamily: fonts.SemiBold,
    paddingHorizontal: 20,
    textAlign: "center",
    color: colors.primary,
    marginTop: 40,
  },
  subTitle: {
    fontSize: 18,
    paddingHorizontal: 20,
    textAlign: "center",
    color: colors.secondary,
    fontFamily: fonts.Medium,
    marginVertical: 20,
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: "row",
    borderWidth: 2,
    borderColor: colors.primary,
    width: "80%",
    height: 60,
    borderRadius: 100,
  },
  loginButtonWrapper: {
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    borderRadius: 98,
  },
  loginButtonText: {
    color: colors.white,
    fontSize: 18,
    fontFamily: fonts.SemiBold,
  },
  signupButtonText: {
    fontSize: 18,
    color:colors.primary,
    fontFamily: fonts.SemiBold,
  },
});
