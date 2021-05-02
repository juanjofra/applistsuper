 import React from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';

 const App = () => {
  

   return (
     <SafeAreaView style={styles.sectionContainer}>
       <Text style={styles.sectionTitle}>Lista</Text>
       <ScrollView
         contentInsetAdjustmentBehavior="automatic">
       
       </ScrollView>
     </SafeAreaView>
   );
 };

 const styles = StyleSheet.create({
   sectionContainer: {
     paddingHorizontal: 24,
     backgroundColor: "blue",
     flex: 1,
   },
   sectionTitle: {
    marginTop: 32,
     color: "hsl(234, 39%, 85%)",
     fontSize: 24,
     fontWeight: '600',
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
   },
   highlight: {
     fontWeight: '700',
   },
 });

 export default App;
