import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet,ImageBackground, Text, View, ActivityIndicator, Dimensions} from 'react-native';

import LanguageSelection from "./screens/LanguageSelection";
import WarningE  from './screens/WarningE';
import HomePage from './screens/HomePage';
import UniMessage from './screens/UniMessage';
import TodayChallenge from './screens/TodayChallenge';
import SelfAwareness from './screens/SelfAwareness';
import Zodiac from './screens/Zodiac';
import Footer from './components/Footer';
import Header from './components/Header';
import PersonalityTest from './screens/PersonalityTest';
import SelfEsteemTest from './screens/SelfEsteemTest';
import IntrovertExtrovert from './screens/IntrovertExtrovert';
//import ZodiacMonth from './screens/ZodiacMonth';

const ScrHeight = Dimensions.get('window').height;
const ScrWidth = Dimensions.get('window').width;

export default function App() {
  const [ScreenName, setScreenName] = useState();
  const [LanguageName, setLanguageName] = useState("");
  const [ScreenNum, setScreenNum] = useState (0);
  const [theSectionName, setTheSectionName] = useState(0);

  const LanguageNameHandler = (selectedLanguage) =>{
    setLanguageName (selectedLanguage);
  }

  const ScreenNumberHandler = (theScreenNum) => {
    setScreenNum (theScreenNum);
  }

  const SectionNameHandler = (theSectionName) => {
    setTheSectionName (theSectionName)
  }

  // let content = < LanguageSelection onLanguageName = {LanguageNameHandler} onScreenNum = {ScreenNumberHandler}/>
  // if(LanguageName === "English" && ScreenNum === 1){
  //   content = <WarningE onLanguageName = {LanguageNameHandler} onScreenNum = {ScreenNumberHandler}/>
  // } else if (LanguageName === "English" && ScreenNum === 2){
  //   content = <HomePage onLanguageName = {LanguageNameHandler} onScreenNum = {ScreenNumberHandler} onSectionName={SectionNameHandler}/>
  // }else if (LanguageName === "English" && ScreenNum === 3){
  //   content = <UniMessage onLanguageName = {LanguageNameHandler} onScreenNum = {ScreenNumberHandler}/>
  // }else if (LanguageName === "English" && ScreenNum === 4){
  //   content = <TodayChalleng onLanguageName = {LanguageNameHandler} onScreenNum = {ScreenNumberHandler}/>
  // }else if (LanguageName === "English" && ScreenNum === 5){
  //   content = <SelfAwareness onLanguageName = {LanguageNameHandler} onScreenNum = {ScreenNumberHandler}/>
  // }else if (LanguageName === "English" && ScreenNum === 6){
  //   content = <Zodiac onLanguageName = {LanguageNameHandler} onScreenNum = {ScreenNumberHandler}/>
  // }else if (LanguageName === "English" && ScreenNum === 7){
  //   content = <PersonalityTest onLanguageName = {LanguageNameHandler} onScreenNum = {ScreenNumberHandler}/>
  // }else if (LanguageName === "English" && ScreenNum === 8){
  //   content = <SelfEsteemTest onLanguageName = {LanguageNameHandler} onScreenNum = {ScreenNumberHandler}/>
  // }else if (LanguageName === "English" && ScreenNum === 9){
  //   content = <IntrovertExtrovert onLanguageName = {LanguageNameHandler} onScreenNum = {ScreenNumberHandler}/>
  // }

  
  let content = <HomePage onLanguageName = {LanguageNameHandler} onScreenNum = {ScreenNumberHandler} onSectionName={SectionNameHandler}/>
  if (LanguageName === "English" && ScreenNum === 3){
    content = <UniMessage onLanguageName = {LanguageNameHandler} onScreenNum = {ScreenNumberHandler}/>
  }else if (LanguageName === "English" && ScreenNum === 4){
    content = <TodayChallenge onLanguageName = {LanguageNameHandler} onScreenNum = {ScreenNumberHandler}/>
  }else if (LanguageName === "English" && ScreenNum === 5){
    content = <SelfAwareness onLanguageName = {LanguageNameHandler} onScreenNum = {ScreenNumberHandler}/>
  }else if (LanguageName === "English" && ScreenNum === 6){
    content = <Zodiac onLanguageName = {LanguageNameHandler} onScreenNum = {ScreenNumberHandler}/>
  }else if (LanguageName === "English" && ScreenNum === 7){
    content = <PersonalityTest onLanguageName = {LanguageNameHandler} onScreenNum = {ScreenNumberHandler}/>
  }else if (LanguageName === "English" && ScreenNum === 8){
    content = <SelfEsteemTest onLanguageName = {LanguageNameHandler} onScreenNum = {ScreenNumberHandler}/>
  }else if (LanguageName === "English" && ScreenNum === 9){
    content = <IntrovertExtrovert onLanguageName = {LanguageNameHandler} onScreenNum = {ScreenNumberHandler}/>
  }

  let footer;
  if (ScreenNum > 2){
    footer = <Footer onLanguageName = {LanguageNameHandler} onScreenNum = {ScreenNumberHandler} theSectionName = {theSectionName}/>
  }

  let header;
  if (ScreenNum > 1){
    header = <Header onLanguageName = {LanguageNameHandler} onScreenNum = {ScreenNumberHandler}/>
  }

  return (
    
    <View style={styles.container}>
      
      <View style={styles.header}>{header}</View>
      <View style={styles.content}>{content}</View>
      <View style={styles.footer}>{footer}</View>
      
      {/* <Text style={styles.LN}>{LanguageName}</Text> 
      <Text style={styles.SN}>{ScreenNum}</Text> */}
       
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height:'ScrHeight/5'
  },
  content:{
    height: ScrHeight * 0.80,
  },
  footer:{
    height: ScrHeight * 0.10,
    width: ScrWidth * 0.80,
  },
  header:{
    height: ScrHeight * 0.10,
    width: ScrWidth * 0.80,
  },
  LN:{
    alignItems: 'center',
    justifyContent: 'center',
    padding:'10px',
    marginBottom:'5%'
  },
  SN:{
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:'20%'
  }
});
