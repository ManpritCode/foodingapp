import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,ScrollView} from 'react-native';
import ButtonBar from './Components/ButtonBar';
import HeaderTab from './Components/headerTab';
import OffersBar from './Components/OffersBar';
import SearchBar from './Components/Searchbar';
import Categories from './Components/categories';
import Green from './Components/green';
import RestuarantItems from './Components/restorentItems';
export default function App() {
  return (
    <>
   
   <HeaderTab />
   <SearchBar />
   <ButtonBar />
   <ScrollView style={{
    backgroundColor:"white",
    marginTop:"10",
    }}>
   <OffersBar />  
    <Categories />
    <Green />
    <RestuarantItems/>
    <RestuarantItems/>
    <RestuarantItems/>
   </ScrollView>

   </>
  );
}

