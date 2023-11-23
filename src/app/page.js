'use client'
import { useState } from 'react'

import Image from 'next/image'
import '@style/home.css'

export default function Home() {

  
  const [nama, setNama] = useState('Nama Anda Disini')
  const [inputNamaBaru, setInputNamaBaru] = useState('')
  const [empty, setEmpty] = useState(true)

  function handlerGantiNama() {
    setNama(inputNamaBaru)
  }

  function inputHandler(value) {
    setInputNamaBaru(value)
    setEmpty(value.trim() === '')
  }

  function tombolEnter(e) {
    if (e.code == "Enter") handlerGantiNama()
  }

  let content;
  if (empty) {
    content = (
      <button className="cta-active">
        <p>Disabled</p>
      </button>
    );
  } else {
    content = (
      <button className="cta" onClick={() => {
        handlerGantiNama();
      }}>
      <p>ganti</p>
    </button>
    );
  }

  return (
    <div className='body'>
      <div className="banner-container">
        {/* kartunya */}
        <div className="header-banner-wrapper">
          {/* foto profil dan nama */}
          <div className="profile-header-banner">
            {/* foto profil */}
            <Image
              src="/assets/Logo-Unhas.png"
              alt="Universitas Hasanuddin"
              fill
              objectFit='contain'
            />
          </div>
          <div className="content-header-banner">
            {/* nama dan kawan2 */}
            <h1>{nama}</h1>
            <div className="bio-nim-header-banner">
            {/* NIM dan BIO */}
            <p style={{marginBottom: '8px'}}>Universitas Hasanuddin</p>
            <p>Teknik Informatika</p>
          </div>
          </div>
        </div>
        <input className='input-field'
          placeholder='Masukkan Nama Anda'
          onInput={(value) => inputHandler(value.target.value)}
          onKeyDown={(value) => {tombolEnter(value)}}
          ></input>
        <div className="cta-banner-wrapper">
          {/* tombol cta */}
          {content}
        </div>
      </div>
    </div>
  )
}
