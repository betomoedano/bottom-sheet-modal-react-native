import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import {
  Button,
  Pressable,
  StyleSheet,
  Switch,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { useRef, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

export default function App() {
  const [darkmode, setDarkmode] = useState(false);
  const [device, setDevice] = useState(false);
  const { width } = useWindowDimensions();
  const [theme, setTheme] = useState("dim");
  const [isOpen, setIsOpen] = useState(false);

  const bottomSheetModalRef = useRef(null);

  const snapPoints = ["25%", "48%", "75%"];

  function handlePresentModal() {
    bottomSheetModalRef.current?.present();
    setTimeout(() => {
      setIsOpen(true);
    }, 100);
  }

  return (
    <BottomSheetModalProvider>
      <View
        style={[
          styles.container,
          { backgroundColor: isOpen ? "gray" : "white" },
        ]}
      >
        <Button title="Present Modal" onPress={handlePresentModal} />
        <StatusBar style="auto" />
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          backgroundStyle={{ borderRadius: 50 }}
          onDismiss={() => setIsOpen(false)}
        >
          <View style={styles.contentContainer}>
            <Text style={[styles.title, { marginBottom: 20 }]}>Dark mode</Text>
            <View style={styles.row}>
              <Text style={styles.subtitle}>Dark mode</Text>
              <Switch
                value={darkmode}
                onChange={() => setDarkmode(!darkmode)}
              />
            </View>
            <View style={styles.row}>
              <Text style={styles.subtitle}>Use device settings</Text>
              <Switch value={device} onChange={() => setDevice(!device)} />
            </View>
            <Text style={styles.description}>
              Set Dark mode to use the Light or Dark selection located in your
              device Display and Brightness settings.
            </Text>
            <View
              style={{
                width: width,
                borderBottomWidth: StyleSheet.hairlineWidth,
                borderBottomColor: "gray",
                marginVertical: 30,
              }}
            />
            <Text style={[styles.title, { width: "100%" }]}>Theme</Text>
            <Pressable style={styles.row} onPress={() => setTheme("dim")}>
              <Text style={styles.subtitle}>Dim</Text>
              {theme === "dim" ? (
                <AntDesign name="checkcircle" size={24} color="#4A98E9" />
              ) : (
                <Entypo name="circle" size={24} color="#56636F" />
              )}
            </Pressable>
            <Pressable style={styles.row} onPress={() => setTheme("lightsOut")}>
              <Text style={styles.subtitle}>Lights out</Text>
              {theme === "lightsOut" ? (
                <AntDesign name="checkcircle" size={24} color="#4A98E9" />
              ) : (
                <Entypo name="circle" size={24} color="#56636F" />
              )}
            </Pressable>
          </View>
        </BottomSheetModal>
      </View>
    </BottomSheetModalProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 15,
  },
  row: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  title: {
    fontWeight: "900",
    letterSpacing: 0.5,
    fontSize: 16,
  },
  subtitle: {
    color: "#101318",
    fontSize: 14,
    fontWeight: "bold",
  },
  description: {
    color: "#56636F",
    fontSize: 13,
    fontWeight: "normal",
    width: "100%",
  },
});
