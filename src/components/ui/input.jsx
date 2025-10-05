import React from 'react';

export default function Input(props) {
  const { className = '', ...rest } = props;
  return <input {...rest} className={className} />;
}
