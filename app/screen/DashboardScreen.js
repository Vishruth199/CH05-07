import React from "react" ;
import{ 
    View,
    Text,
    Platform,
    StyleSheet ,
    NativeModules
} from "react-native";
import Animated from 'react-native-reanimated';
const { UIManager } = NativeModules;
// import Header from "../../features/Header.js";
import Button from "../../features/Button.js";
import Constants from 'expo-constants';
// import SideBar from './app/screen/SideBar.js'

export default function DashboardScreen({ navigation }){
return (  
          <View>
          <Button
          mode="contained"
          color="#F8772E"
          onPress={() =>
            navigation.reset({
              index: 0,
              routes: [{ name: "Quiz1" }],
            })
          }
        >
          Quiz
        </Button>
        <Button
                 mode="contained"
                 color="#F8772E"
                 onPress={() =>
                   navigation.reset({
                     index: 0,
                     routes: [{ name: "upload" }],
                   })
                 }
               >
                 Upload 
               </Button>
              <Button
                    mode="contained"
                    color="#F8772E"
                    onPress={() =>
                      navigation.reset({
                        index: 0,
                        routes: [{ name: "qrcodee" }],
                      })
                    }
                  >
                    QR
                  </Button>
                  </View>
        )
    }
const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
    },
})
