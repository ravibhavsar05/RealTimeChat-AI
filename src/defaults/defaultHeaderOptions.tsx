import React from 'react';
import {HeaderButtonProps} from '@react-navigation/elements';
import HeaderBackButton from '@xyz/components/HeaderBackButton';
import {colors} from '@xyz/style-guide';

/**
 * XYZ default header options
 */

const defaultHeaderOptions = {
  headerLeft: (props: HeaderButtonProps) => <HeaderBackButton />,
  
  title: null,
  headerStyle: {
    borderWidth: 0,
    shadowRadius: 0,
    shadowOffset: {
      height: 0,
    },
    elevation: 0,
  },
};

export default defaultHeaderOptions;
