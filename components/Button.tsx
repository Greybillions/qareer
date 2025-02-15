import React from 'react';

const Button = ({
  className,
  type = 'button',
  href,
  onClick,
  children,
  disabled,
}: {
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
}) => {
  const classes = `relative z-10 px-4 py-2 bg-color-5 text-n-2 rounded-md text-n-8 button hover:opacity-[0.85] transition-all ${className}`;

  //rendering button
  const renderBtn = () => (
    <button
      className={classes}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );

  //rendering link
  const renderLink = () => (
    <a className={classes} href={href}>
      {children}
    </a>
  );

  return href ? renderLink() : renderBtn();
};

export default Button;
