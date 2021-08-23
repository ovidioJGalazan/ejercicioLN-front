import {useState, useEffect} from "react";

import {SectionSlider} from "../components/SectionSlider";
import { HeroSlider } from '../components/HeroSlider';

import "../scss/Home.scss";

const slides = [
    "https://picsum.photos/1000/500",
    "https://picsum.photos/1000/450",
    "https://picsum.photos/1000/550",
  ]
  
export interface DataCuentas {
    name: string,
    image: string,
    nearestLocation?: number,
    crmid: string,
    benefits?: {
      black: number | null,
      premium: number | null,
      classic: number | null,
    },
  }

const Home = () => {

  const API = "https://immense-tor-32802.herokuapp.com/api"
  // const API = "http://localhost:3001/api"


const [dataCuentas1, setDataCuentas1] = useState<DataCuentas[]>([]);
const [dataCuentas2, setDataCuentas2] = useState<DataCuentas[]>([]);

useEffect(() => {
    const fetchData1 = async () => {
      try{
        const res = await fetch(`${API}/cuentas?filterBy=tags&filterValue=Turismo en Buenos Aires&orderBy=nearby&page=1&qty=4&cleanType=beneficio`, {
          method: "GET",
        })
        const response = await res.json();
        // console.log("Respuesta: ", response);
        setDataCuentas1(response.data); 
      }catch(err){
        console.log("There was an error: ", err)
      }
    }
    const fetchData2 = async () => {
      try{
        const res = await fetch(`${API}/cuentas?filterBy=haveVoucher&filterValue=true&orderBy=desc&page=1&qty=4&cleanType=codigo`, {
          method: "GET",
        })
        const response = await res.json();
        // console.log("Respuesta: ", response);
        setDataCuentas2(response.data); 
      }catch(err){
        console.log("There was an error: ", err)
      }
    }
    fetchData1();  
    fetchData2();  
  }, []); // eslint-disable-line

    return(
        <>
            <HeroSlider slides={slides}/>
            <SectionSlider title="Turismo en Buenos Aires" cardType="beneficio" carouselData={ dataCuentas1 } />
            <SectionSlider title="Códigos de descuento" 
            subtitle="¿Sos socio de Club LA NACION? Descargá tu código y disfrutá beneficios exclusivos en tus marcas favoritas"
            cardType="codigo" carouselData={ dataCuentas2 } 
            style={{backgroundColor: "lightgrey"}}/>
        </>
    )
}

export default Home;