import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {
  CenterContainer,
  ForgotPasswordLink,
  LogoImage,
  LogoTitle,
  ScreenContainer,
} from './styles';
import RoundedButton from '../../components/Button';
import Grid from '@mui/material/Grid';
import RoundedOutlinedInput from '../../components/Input/RoundedInput';

const LoginScreen = () => {
  return (
    <CenterContainer>
      <ScreenContainer>
        <Grid container direction="column" spacing={3}>
          <Grid item>
            <Grid container direction={'column'} spacing={4}>
              <Grid item>
                <LogoImage src="/Logo.png" />
              </Grid>
              <Grid item>
                <LogoTitle>Voleizin</LogoTitle>
              </Grid>
            </Grid>
          </Grid>

          <Grid item>
            <Grid container direction={'column'} spacing={3}>
              <Grid item>
                <RoundedOutlinedInput
                  id="user-login"
                  fullWidth
                  label="Usuário"
                />
              </Grid>
              <Grid item>
                <RoundedOutlinedInput
                  id="input-password"
                  fullWidth
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          edge="end"
                        >
                          {/* {showPassword ? <VisibilityOff /> : <Visibility />} */}
                          <VisibilityOff />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  label="Password"
                />
                <ForgotPasswordLink>Esqueci minha senha</ForgotPasswordLink>
              </Grid>
            </Grid>
          </Grid>

          <Grid item>
            <Grid container direction={'column'} spacing={3}>
              <Grid item>
                <RoundedButton fullWidth variant="contained">
                  Entrar
                </RoundedButton>
              </Grid>
              <Grid item>
                <RoundedButton fullWidth variant="outlined" color="primary">
                  Cadastrar
                </RoundedButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </ScreenContainer>
    </CenterContainer>
  );
};

export default LoginScreen;
