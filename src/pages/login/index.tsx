import { useForm } from "react-hook-form"
import { LoginProps } from "./interfaces"
import { useApp } from "../../hooks/useApp"
import { Button, TextField } from '@mui/material';
import { Send } from '@mui/icons-material';

function Login() {
  const { register, handleSubmit } = useForm()
  const { setValue } = useApp()

  const onSubmit = (dataFromForm: LoginProps) => {
    setValue(dataFromForm as string)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{width: '100%',height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
      <TextField 
        label="Email" 
        variant="filled" 
        color="success" 
        focused  
        {...register("email")} 
        style={{width: 300, padding: 8}}
      />
      <TextField 
        label="Senha" 
        variant="filled" 
        color="success" 
        focused 
        {...register("password")} 
        style={{width: 300, padding: 8}}
      />
      <Button type="submit" variant="contained" endIcon={<Send />}>
        Logar
      </Button>
    </form>
  )
}

export { Login }