import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, StatusBar, View, SafeAreaView, Platform, PanResponder } from 'react-native';
import CurrentPrice from './src/components/Home/CurrentPrice'
import HistoryGraphic from './src/components/Home/HistoryGraphic'
import QuotationList from './src/components/Home/QuotationsList';


//passar o 0 a esquerda nas datas
function addZero(number){
  if(number <=9){
    return "0" + number
  }
  return number
}

//parametros para as datas na api
function url(qtdDays){
  const date = new Date();
  const listLastDays = qtdDays;
  //passar o ano, mes e dia
  //add zero, para passar o 0 antes dos meses
  //passar o +1 devido os parametros da array que começam com 0
  //subtrair a quantidade de dias para as listas
  const end_date =
  `${date.getFullYear()}-${addZero(date.getMonth()+1)}-${addZero(date.getDate())}`;
  date.setDate(date.getDate() - listLastDays);
  const start_date = `${date.getFullYear()}-${addZero(date.getMonth()+1)}-${addZero(date.getDate())}`;
  return `https://api.coindesk.com/v1/bpi/historical/close.json?start=${start_date}&end=${end_date}`;;
}

//chamada da api 'faturamento'
async function getListCoins(url){
  let response = await fetch(url);
  let returnApi = await response.json()
  let selectListQuotations = returnApi.bpi
  //usar o map para gerar um novo array, com uma nova lista de dados personalizada
  //object.keys retorna um array cujo os  elementos são strings
  const queryCoinList = Object.keys(selectListQuotations).map((key)=>{
    return {
      data: key.split("-").reverse().join("/"),
      valor: selectListQuotations[key].toFixed(2)
    }
  });
  let data = queryCoinList.reverse();
  return data;
  //reverse para pegar o dia anterior
}


async function getPriceCoinsGraphic(url){
  let responseG = await fetch(url);
  let returnApiG = await responseG.json()
  let selectListQuotationsG = returnApiG.bpi
  const queryCoinListG = Object.keys(selectListQuotationsG).map((key)=>{
    return selectListQuotationsG[key].toFixed(2);
  });
  let dataG = queryCoinListG;
  return dataG;
}



export default function App() {
  const [coinsList, setCoinsList] = useState({});
  const [coinsGraphicList, setCoinsGraphicList] = useState([0]);
  const [days, setDays] = useState(30);
  const [updateData, setUpdateData] = useState(true);
  const [price, setPrice] = useState()

  //função para atualização dos dias

  function updateDay(number){
    setDays(number);
    setUpdateData(true)
  }

  function priceCotation(){
    setPrice(coinsGraphicList.pop())
  }
  //.pop para pegar o ultimo item de uma array

  useEffect(() =>{
    getListCoins(url(days)).then((data)=>{
      setCoinsList(data)
    });

    getPriceCoinsGraphic(url(days)).then((dataG) =>{
      setCoinsGraphicList(dataG)
    });
    priceCotation()
    if(updateData){
      setUpdateData(false)
      //setando como false para o useEffect não ficar em loop
    }
  },[updateData]);




  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
      backgroundColor="#232323"
      barStyle="light-content"
      />
      <CurrentPrice lastCotation={price}/>
      <HistoryGraphic infoDataGraphic={coinsGraphicList}/>
      <QuotationList filterDay={updateDay} listTransactions={coinsList}/>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#232323',
    alignItems: 'center',
    paddingTop: Platform.OS === "android" ? 40: 0,
    justifyContent: 'center',
  },
});
