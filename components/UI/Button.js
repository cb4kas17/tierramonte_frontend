import React from 'react';

import styles from './button.module.css';
function Button(props) {
      return (
            <button
                  type={props.type || 'button'}
                  className={`${styles.button} ${props.className}`}
                  onClick={props.onClick}
                  disabled={props.disabled}
            >
                  {props.children}
            </button>
      );
}

export default Button;
