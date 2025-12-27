import React from 'react';

type DivProps = React.HTMLAttributes<HTMLDivElement>;

export function Card(props: DivProps) {
  const { className = '', ...rest } = props;
  return <div className={`ui-card ${className}`} {...rest} />;
}

export function CardContent(props: DivProps) {
  const { className = '', ...rest } = props;
  return <div className={`ui-card-content ${className}`} {...rest} />;
}


