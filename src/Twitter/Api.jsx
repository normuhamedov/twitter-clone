import axios from "axios";
import Home from './ApiKey';
import  './Api.css';
import { useState,useEffect } from "react";
const url='https://api.spaceflightnewsapi.net/v3/articles';
const Api = () => {
    const [data,setData]=useState([])
    const [searchTitle  ] = useState('')
    
    const fetchData= async()=>{
const response=await axios.get(url)
setData(response.data);
    }
    useEffect(()=>{
        fetchData()
    },[])
    const filteredData = data.filter((value) => (value.title.toLowerCase().includes(searchTitle.toLowerCase()))).map((news) => (
        <Home key={news.id} id={news.id} data={news.publishedAt} title={news.title} img={news.imageUrl} summary={news.summary} />
    ));
  return (
    <div className="con-m">
{filteredData
}
    </div>
  )
}

export default Api;