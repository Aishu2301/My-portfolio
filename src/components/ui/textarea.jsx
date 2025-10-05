import React from 'react';

export default function Textarea(props) {
  const { className = '', ...rest } = props;
  return <textarea {...rest} className={className} />;
}
