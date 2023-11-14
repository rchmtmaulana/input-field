'use client'
import { useState } from 'react'

import Image from 'next/image'
import './globals.css'

export default function Home() {

  
  const [nama, setNama] = useState('Nama Anda Disini')
  const [inputNamaBaru, setInputNamaBaru] = useState('')

  function handlerGantiNama() {
    setNama(inputNamaBaru)
  }

  function inputHandler(value) {
    setInputNamaBaru(value)
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
          ></input>
        <div className="cta-banner-wrapper">
          {/* tombol cta */}
            <button className='cta-button'
              onClick={() => {
                handlerGantiNama();
              }}>
              Ganti
            </button>
        </div>
      </div>
    </div>
  )
}
