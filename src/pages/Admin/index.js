import { useState } from 'react'
import './admin.css'
import {Logo} from '../../Components/Logo'
import {Input} from '../../Components/Logo/input'
import {MdAddLink} from 'react-icons/md'
import {FiTrash2} from 'react-icons/fi'

import {db} from '../../services/firebaseconnection'

import{
  addDoc,
  collection,
  onSnapshot,
  query,
  orderBy,
  doc,
  deleteDoc
} from  'firebase/firestore'

import {toast} from "react-toastify";



import {Header } from '../../Components/Header'
import { async } from '@firebase/util'

export default function Admin(){
    const [nameInput, setNameInput] = useState("")
    const [urlInput, setUrlInput] = useState("")
    const [backgroundColorInput, setBackgrounndColorInput] = useState("#F1F1F1")
    const [textColorinput, setTextColorInput] = useState("#121212")

  async function handleRegister(e){
    e.preventDeafult(); 
    if(nameInput ==='' || urlInput === ''){
       toast.warn("preencha todos os campos")
      return;
    }

    addDoc(collection(db, "links", {
      name: nameInput,
      url: urlInput,
      bg: backgroundColorInput,
      color: textColorinput,
      created: new Date(),
    }))
    .then(()=>{
      setNameInput("")
      setNameInput("")
      console.log('deu bom')

    })

    .catch((error)=>{
      console.log('erro ao registrar' + error)
      toast.error("ops, deu algum erro ao salvar o link")
    })
  }

    return (
      <div className="admin-container">
        <Header />
        <Logo />

        <form className="form" onSubmit={handleRegister}>
          <label className="label">Nome do link</label>
          <Input
            placeholder="nome do link"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
          />

          <label className="label">URL do link</label>
          <Input
            type="url"
            placeholder="Url do link"
            value={urlInput}
            onChange={(e) => setUrlInput(e.target.value)}
          />

          <section className="container-colors">
            <div>
              <label className="label-right">Fundo do link</label>
              <input
                type="color"
                value={backgroundColorInput}
                onChange={(e) => setBackgrounndColorInput(e.target.value)}
              />
            </div>
            <div>
              <label className="label-right">cor do link</label>
              <input
                type="color"
                value={textColorinput}
                onChange={(e) => setTextColorInput(e.target.value)}
              />
            </div>
          </section>

          {nameInput !== "" && (
            <div className="preview">
              <label className="label">Veja como está ficando</label>
              <article
                className="list"
                style={{marginBottom: 8, marginTop: 8, backgroundColor: backgroundColorInput }}
              >
                <p style={{ color: textColorinput }}>{nameInput}</p>
              </article>
            </div>
          )}

          <button className="btn-register" type="submit">
            Cadastrar <MdAddLink size={24} color="#FFF" />
          </button>
        </form>

        <h2 className="title">Meus links</h2>
        <article
          className="list animate-pop"
          style={{ backgroundColor: "#000", color: "red" }}
        >
          <p className="text">WhatsApp</p>
          <div>
            <button className="btn-delete">
              <FiTrash2 size={18} color="#FFF" />
            </button>
          </div>
        </article>
      </div>
    );
}