import { useState } from 'react';
import './login.css'
import {auth} from '../../services/firebaseconnection'
import {useNavigate} from 'react-router-dom'

import {signInWithEmailAndPassword} from 'firebase/auth'

import {Logo} from '../../Components/Logo'

import {Input} from '../../Components/Logo/input'



export default function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate()

  function handleLogin(e){
    e.preventDefault();

    if(email == '' || password == ''){
        alert('preencha todos os campos');
        return;
    }

    signInWithEmailAndPassword(auth,email, password)
    .then(()=>{
       navigate("/admin", {replace:true})
    })
    .catch((e)=>{
        console.log("erro ao logar " + e)
    })

  }

    return (
      <div className="login-container">
        <Logo />
        <form className="form" onSubmit={handleLogin}>
          <Input
            type="email"
            placeholder="digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            type="password"
            placeholder="*****"
            autoComplete="on"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Acessar</button>
        </form>
      </div>
    );
}