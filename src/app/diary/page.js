'use client'

import '@app/diary/diary.css';
import { useEffect, useState } from 'react'
import axios from 'axios';
import Link from 'next/link';

export default function Diary(){
    const [judul, setJudul] = useState([])
    const [isi, setIsi] = useState([])
    const [isData, setIsData] = useState([])
    const [tulisJudul, setTulisJudul] = useState('')
    const [tulisIsi, setTulisIsi] = useState('')

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

    async function postDiary() {
        try {
            const res = await axios.post(endpointAPI, {
                judul: tulisJudul,
                isi: tulisIsi,
            })
            setIsData([...isData, res.data])

            setTulisJudul('')
            setTulisIsi('')
            getDiary()
        } catch(error) {
            alert("failed to POST API" + error)
        }
    }

    function handlerInputJudul (event) {
      event.preventDefault();
      setTulisJudul(event.target.value)
  
    }
    function handlerInputIsi (event) {
      event.preventDefault();
      setTulisIsi(event.target.value)
  
    }
    function handlerSubmit (event) {
      postDiary();
      setTulisJudul('');
      setTulisIsi('');
    }
    function enterButton(e) {
      if (e.key == "Enter") {
        handlerSubmit();
      }
    }

    useEffect(()=>{
        getDiary();
    }, [])

    return(
        <>
        <div className='cta-container'>
            <input
                name='input-judul'
                type='text'
                placeholder='Masukkan Judul Diary'
                onChange={handlerInputJudul}
                onKeyDown={(value) => {
                    enterButton(value)
                }}
                value={tulisJudul}
            />
            <input
                name='input-isi'
                type='text'
                placeholder='Masukkan Isi Diary'
                onChange={handlerInputIsi}
                onKeyDown={(value) => {
                    enterButton(value)
                }}
                value={tulisIsi}
            />
            {tulisJudul && tulisIsi ? (
                <button className='cta' onClick={postDiary}>
                    <p>Submit</p>
                </button>
            ) : (
                <button className='active'>
                    <p>disabled</p>
                </button>
            )}
        </div>
        {isData ? judul.length>0 ? (
            <ul>
                {judul.map((item, idx) => (
                    <Link href={`/diary/${item}/${isi[idx]}`}>
                    <li key={idx}>
                        <div className={`diary-container ${idx === judul.length - 1? 'last-item' : ''}`}>
                            <h1>{judul[idx]}</h1>
                            <p className="p-diary">{isi[idx]}</p>
                        </div>
                    </li>
                    </Link>
                ))}
            </ul>
        ):(
            "LOADING API"
        ) : (
            "nothing API to show"
        )
        }
        
        </>
    )
}