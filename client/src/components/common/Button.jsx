import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

export default function Button({
  children,
  to,
  href,
  variant = 'primary', // 'primary', 'secondary', 'outline', 'glow', 'ghost'
  size = 'md', // 'sm', 'md', 'lg'
  icon: Icon,
  iconPosition = 'right',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  ...props
}) {
  const buttonClass = `cyber-btn cyber-btn-${variant} cyber-btn-${size} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="cyber-btn-icon left" size={size === 'sm' ? 14 : size === 'lg' ? 20 : 16} />}
      <span className="cyber-btn-text">{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="cyber-btn-icon right" size={size === 'sm' ? 14 : size === 'lg' ? 20 : 16} />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={buttonClass} onClick={onClick} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={buttonClass} onClick={onClick} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={buttonClass} onClick={onClick} disabled={disabled} {...props}>
      {content}
    </button>
  );
}
