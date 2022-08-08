import React from 'react';

interface IProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  color?: string;
  bgColor?: string;
}

export const Button: React.FunctionComponent<IProps> = (props) => {
  const { children, color, bgColor, style } = props;
  let _style: React.CSSProperties = style || {};
  if (bgColor) {
    _style.backgroundColor = bgColor;
  }
  if (color) {
    _style.color = color;
  }
  return (
    <button style={_style} {...props}>
      {children}
    </button>
  );
};
