'use client'

import '@app/diary/diary.css';
import { useEffect, useState } from 'react'
import axios from 'axios';

export default function Diary(){
    const [judul, setJudul] = useState([])
    const [isi, setIsi] = useState([])

    const endpointAPI ='https://65561d1e84b36e3a431f12bb.mockapi.io/banner-pmw23'

    async function getDiary (){
        try{
            const res = await axios.get(endpointAPI)
            const data = res.data

            const judul = data.map((item)=>(item.judul))
            setJudul(judul)

            const isi = data.map((item)=>(item.isi))
            setIsi(isi)
        }
        catch(error){
            console.log("error fetching data: ${error}")
        }
    }

    useEffect(()=>{
        getDiary();
    }, [])

    return(
        <>
        {judul.length>0 ? (
            <ul>
                {judul.map((item, idx)=>(
                    <li>
                        <div className="diary-container">
                            <h1>{judul[idx]}</h1>
                            <p className="p-diary">{isi[idx]}</p>
                        </div>
                    </li>
                ))}
            </ul>
        ):
        (
            "LOADING API"
        )}
        
        </>
    )
}