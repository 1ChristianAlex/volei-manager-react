import React from 'react';
import { RoundedOutlinedInputStyle } from './styles';

const RoundedOutlinedInput: React.FC<
  React.ComponentProps<typeof RoundedOutlinedInputStyle>
> = (props) => React.createElement(RoundedOutlinedInputStyle, props);

export default RoundedOutlinedInput;
