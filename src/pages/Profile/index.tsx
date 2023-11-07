import { StatusBar, Image } from "react-native";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Styles from "./style";
import { useNavigation } from "@react-navigation/native";

export default function EditProfile() {
  const navigation = useNavigation();

  return (
    <View style={Styles.container}>
      <Image
        source={require("../../images/personIcon.png")} // You should replace this with the actual source of the profile photo
        style={Styles.profileImage}
      />
      <Text style={Styles.containerHeader}>
        <Text style={Styles.message}>Edit Your Profile</Text>
      </Text>
      <ScrollView style={Styles.containerform}>
        <Text style={Styles.label}>Full Name</Text>
        <TextInput placeholder="Your full name" style={Styles.input} />
        <Text style={Styles.label}>Username</Text>
        <TextInput placeholder="Your username" style={Styles.input} />
        <Text style={Styles.label}>Email</Text>
        <TextInput placeholder="Your email" style={Styles.input} />
        <Text style={Styles.label}>New Password</Text>
        <TextInput placeholder="Enter new password" style={Styles.input} />
        <Text style={Styles.label}>Confirm New Password</Text>
        <TextInput placeholder="Confirm new password" style={Styles.input} />
        <TouchableOpacity style={Styles.button}>
          <Text style={Styles.buttonText}>Save Changes</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={Styles.buttonRegister}
          onPress={() => navigation.navigate("Welcome" as never)}
        >
          <Text style={Styles.registerText}>Back to Welcome</Text>
        </TouchableOpacity>
      </ScrollView>
      <StatusBar/>
    </View>
  );
}
