import TextField from '@mui/material/TextField';
import styled from '@mui/material/styles/styled';

const RoundedOutlinedInputStyle = styled(TextField)`
  border-radius: 28px;
  height: 48px;

  .MuiInputBase-root {
    border-radius: 28px;
    height: 48px;
  }

  .MuiFormLabel-root:not(.MuiInputLabel-shrink) {
    transform: translate(14px, 14px) scale(1);
  }
`;

export { RoundedOutlinedInputStyle };
