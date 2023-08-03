import React from 'react';
import { RoundedBtn } from './styles';

const RoundedButton: React.FC<React.ComponentProps<typeof RoundedBtn>> = (
  props
) => React.createElement(RoundedBtn, props, props.children);

export default RoundedButton;
