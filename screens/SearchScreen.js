import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  Dimensions,
  Component,
  Picker,
  Button,
  Alert
} from "react-native";

const { width: WIDTH } = Dimensions.get("window");

export default class SearchScreen extends React.Component {
  constructor(props) {
    super();
    this.state = {
      pickerSelection: "Default Value"
    };
  }

  render() {
    return (
      <ImageBackground
        source={require("./../assets/images/bg-image.jpg")}
        style={styles.backgroundContainer}
      >
        <View style={styles.pickerContainer}>
          <Text style={styles.pickerText}>Select an Activity</Text>
          <Picker
            mode="dropdown"
            selectedValue={this.state.pickerSelection}
            onValueChange={itemValue =>
              this.setState({ pickerSelection: itemValue })
            }
          >
            <Picker.Item label="Restaurants" value="Restaurants" />
            <Picker.Item style={styles.pickerItems} label="Bars" value="Bars" />
            <Picker.Item label="Sporting Events" value="Sporting Events" />
            <Picker.Item label="Artistic" value="Artistic" />
          </Picker>

          <Text style={styles.text}>{this.state.user}</Text>
        </View>
        <View styles={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder={"Keywords"}
            placeholderTextColor={"rgba(0, 0, 0, 0.75)"}
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={{ paddingTop: 35, PassingBotton: 35 }} />
        <View style={styles.pickerContainer}>
          <Text style={styles.pickerText}>Select an Activity</Text>
          <Picker
            mode="dropdown"
            selectedValue={this.state.pickerSelection}
            onValueChange={itemValue =>
              this.setState({ pickerSelection: itemValue })
            }
          >
            <Picker.Item label="Restaurants" value="Restaurants" />
            <Picker.Item style={styles.pickerItems} label="Bars" value="Bars" />
            <Picker.Item label="Sporting Events" value="Sporting Events" />
            <Picker.Item label="Artistic" value="Artistic" />
          </Picker>

          <Text style={styles.text}>{this.state.user}</Text>
        </View>
        <View styles={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder={"Keywords"}
            placeholderTextColor={"rgba(0, 0, 0, 0.75)"}
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={{ paddingTop: 35, PassingBotton: 35 }} />
        <View style={styles.pickerContainer}>
          <Text style={styles.pickerText}>Select an Activity</Text>
          <Picker
            mode="dropdown"
            selectedValue={this.state.pickerSelection}
            onValueChange={itemValue =>
              this.setState({ pickerSelection: itemValue })
            }
          >
            <Picker.Item label="Restaurants" value="Restaurants" />
            <Picker.Item style={styles.pickerItems} label="Bars" value="Bars" />
            <Picker.Item label="Sporting Events" value="Sporting Events" />
            <Picker.Item label="Artistic" value="Artistic" />
          </Picker>

          <Text style={styles.text}>{this.state.user}</Text>
        </View>
        <View styles={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder={"Keywords"}
            placeholderTextColor={"rgba(0, 0, 0, 0.75)"}
            underlineColorAndroid="transparent"
          />
          <Button
            onPress={Alert.alert("Button Pressed!")}
            title="Submit"
            color="rgba(0, 206, 209, 0.7)"
            height="100"
            marginTop="50"
          />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 10,
    fontSize: 16,
    paddingLeft: 15,
    backgroundColor: "rgba(255, 255, 255, 0.75)",
    color: "rgba(255, 255, 255, 0.7)",
    marginHorizontal: 25,
    marginTop: 5,
    marginBottom: 10
  },
  inputContainer: {
    marginTop: 5,
    marginBottom: 10
  },
  pickerText: {
    paddingLeft: 10,
    paddingTop: 5,
    fontWeight: "bold",
    color: "rgba(0, 206, 209, 0.7)",
    borderRadius: 10
  },
  pickerItems: {
    width: WIDTH - 55,
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, 0.75)",
    color: "rgba(255, 255, 255, 0.7)"
  },
  backgroundContainer: {
    flex: 1,
    paddingTop: 100,
    width: null,
    height: null,
    justifyContent: "flex-start",
    alignItems: "center"
  },
  pickerContainer: {
    width: WIDTH - 55,
    paddingLeft: 10,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, 0.75)",
    color: "rgba(255, 255, 255, 0.7)"
  }
});

SearchScreen.navigationOptions = {
  header: null
};
