import React from 'react'
import { useState, useEffect } from 'react'
import { userAuthentication } from '../../hooks/userAuthentication'

const Register = () => {
const [displayName, setDisplayName] = useState('')
const [email, setEmail] = useState('')
const [senha, setSenha] = useState('')
const [confirmaSenha, setConfirmaSenha] = useState('')
const [erro, setErro] = useState('')

const { createUser, error: authError, loading } = userAuthentication()

const handlerSubmit = async (e) => {
  e.preventDefault()
  setError('')
  const user = {
    displayName,
    email,
    senha
  }

  if(senha != confirmedSenha){
    setError("As senhas precisam ser iguais!")
  }

  const res = await createUser(user)

  console.log(res)
}

useEffect(() => {
  if(authError){
    setError(authError)
  }
}, [authError])
  return (
    <div>
      <h1>Cadastro de LifeDevelopers</h1>
      <form onSubmit={handlerSubmit}>
        <label>
          <span>Nome:</span>
          <input 
          type="text" 
          name="displayName" 
          required
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          placeholder="Digite seu nome de usuário" 
          />
        </label>
        <label>
          <span>E-mail:</span>
          <input 
          type="email" 
          name="emailUsuario" 
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Entre com seu e-mail" 
          />
        </label>
        <label>
          <span>Senha:</span>
          <input 
          type="password" 
          name="senha" 
          placeholder="Entre com uma senha segura" 
          required
          value={senha}
          onChange={(e) => setSenha(e.target.value)} 
          />
        </label>
        <label>
          <span>Confirmação:</span>
          <input 
          type="password" 
          name="confirmaSenha" 
          required 
          value={confirmaSenha}
          onChange={(e) => setConfirmaSenha(e.target.value)} 
          placeholder="Confirme sua senha" 
          />
        </label>
        <button className='btn'>Cadastrar</button>
      </form>
    </div>
  )
}

export default Register