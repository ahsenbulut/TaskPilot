'use client'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import {
  BackgroundContainer,
  LoginCard,
  Title,
  FormContainer,
  StyledTextField,
  LoginButton,
  Divider,
  GoogleButton,
  FooterText,
  SignupButton,
  ErrorMessage
} from './_components/StyledComponents'

// Modern tema - daha yumuşak renkler
const theme = createTheme({
  palette: {
    primary: {
      main: '#6366f1', // Modern mor-mavi
      light: '#a5b4fc',
      dark: '#4f46e5',
      contrastText: '#ffffff',
    },
    background: {
      default: '#f8fafc',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  },
  shape: {
    borderRadius: 12,
  },
})

export default function Login() {
  
  const router = useRouter()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  const [error] = useState('')


  const handleRegister = () => {
    console.log(name, email, password, password2)
    //api cevabı beklenecek
    if(password !== password2){
      alert("Şifreler eşleşmiyor")
    }
    else if(password.length < 8 )
      alert("Şifre en az 8 karakter olmalıdır")
    else if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)){
      alert("E-posta geçersiz")
    }
    else{
      alert("Kayıt başarılı")
    }
    //api yanıtı sonrası router.push('/login')
  }

  const handleSignin = () => {
    console.log("signin")
    router.push('/login')
  }

  return (
    <ThemeProvider theme={theme}>
      {/* Arka plan */}
      <BackgroundContainer>
        {/* Ana kart */}
        <LoginCard elevation={24}>
          {/* Logo */}
          <Image 
            src="/images/ankasoft_logo.webp" 
            alt="Ankasoft Logo" 
            width={200}
            height={120}
            style={{
              width: '200px',
              height: 'auto',
              marginBottom: '24px',
              objectFit: 'contain'
            }}
            priority
          />
          
          {/* Başlık */}
          <Title variant="h5">
            Ankasoft Proje Yönetim Sistemi
          </Title>

          {/* Hata mesajı */}
          {error && (
            <ErrorMessage variant="body2">
              {error}
            </ErrorMessage>
          )}

          {/* Form alanları */}
          <FormContainer>
            <StyledTextField 
              label="İsim" 
              variant="outlined"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <StyledTextField 
              label="E-posta" 
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <StyledTextField 
              label="Şifre" 
              type="password"
              variant="outlined"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <StyledTextField 
              label="Şifre Tekrar" 
              type="password"
              variant="outlined"
              fullWidth
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
            />
          </FormContainer>

          {/* Kayıt ol butonu */}
          <LoginButton 
            variant="contained" 
            fullWidth
            size="large"
            onClick={handleRegister}
          >
            Kayıt Ol
          </LoginButton>

          {/* Ayırıcı */}
          <Divider variant="body2">
            <span>veya</span>
          </Divider>

          {/* Google butonu */}
          <GoogleButton 
            variant="outlined" 
            fullWidth
            size="large"
          >
            🚀 Google ile Kayıt Ol
          </GoogleButton>

          {/* Üye ol linki */}
          <FooterText variant="body2">
            Hesabınız var mı?{' '}
            <SignupButton 
              variant="text"
              onClick={handleSignin}
            >
              Giriş Yap
            </SignupButton>
          </FooterText>
        </LoginCard>
      </BackgroundContainer>
    </ThemeProvider>
  );
}
