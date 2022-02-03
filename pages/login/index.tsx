import React, { useState } from 'react'
import { Grid, Paper, TextField, Button } from '@material-ui/core'
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log(email, password)
    if (email === 'clientela@clientela.com' && password === '123456') {
      alert('Logado')
    }
  }

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: '100vh' }}
    >
      <Paper elevation={10} style={{ padding: 20, width: 350, margin: "20px auto" }}>
        <Grid justifyContent='center'>
          <h2 style={{ textAlign: 'center' }}>Fazer Login</h2>
        </Grid>
        <TextField
          label='E-mail'
          placeholder='Digite seu e-mail'
          fullWidth
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label='Senha'
          placeholder='Digite sua senha'
          type='password'
          fullWidth
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type='submit' color='primary' variant="contained" style={{ margin: '15px 0' }} fullWidth onClick={handleLogin}>Fazer Login</Button>
      </Paper>
    </Grid>
  )
}

export default Login