import { styled } from '@mui/material/styles';
import { Box, Paper, Typography, Button, TextField } from '@mui/material';

// Arka plan container
export const BackgroundContainer = styled(Box)({
  minHeight: '100vh',
  background: 'linear-gradient(135deg,rgb(240, 135, 74) 0%,rgb(108, 55, 160) 100%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 16,
});

// Ana kart
export const LoginCard = styled(Paper)({
  padding: 32,
  borderRadius: 24,
  backgroundColor: 'white',
  width: '100%',
  maxWidth: 400,
  textAlign: 'center',
});

// Başlık
export const Title = styled(Typography)({
  fontWeight: 600,
  marginBottom: 24,
  color: '#1e293b',
});

// Form container
export const FormContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
  marginBottom: 24,
});

// Styled TextField
export const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    borderRadius: 16,
  },
});

// Giriş butonu
export const LoginButton = styled(Button)({
  padding: 12,
  marginBottom: 16,
  borderRadius: 16,
  textTransform: 'none',
  fontSize: '1.1rem',
  fontWeight: 600,
});

// Ayırıcı
export const Divider = styled(Typography)({
  color: '#64748b',
  margin: '20px 0',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: '#e2e8f0',
    zIndex: 1,
  },
  '& span': {
    backgroundColor: 'white',
    padding: '0 15px',
    position: 'relative',
    zIndex: 2,
  },
});

// Google butonu
export const GoogleButton = styled(Button)({
  padding: 12,
  marginBottom: 24,
  borderRadius: 16,
  textTransform: 'none',
  fontSize: '1rem',
  fontWeight: 500,
  borderColor: '#e2e8f0',
  color: '#475569',
  '&:hover': {
    borderColor: '#cbd5e1',
    backgroundColor: '#f8fafc',
  },
});

// Footer text
export const FooterText = styled(Typography)({
  color: '#64748b',
});

// Üye ol butonu
export const SignupButton = styled(Button)({
  textTransform: 'none',
  fontWeight: 600,
  padding: 0,
  minWidth: 'auto',
});

// Hata mesajı
export const ErrorMessage = styled(Typography)({
  color: '#ef4444',
  marginBottom: 16,
  padding: 12,
  backgroundColor: '#fef2f2',
  borderRadius: 8,
  border: '1px solid #fecaca',
}); 