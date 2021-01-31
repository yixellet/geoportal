import React from "react";

import styles from './OpenButton.module.css';

class OpenButton extends React.Component {
  render() {
    const { isOpen, onButtonClick } = this.props;
    return (
      <div className={styles.container}>
        <button onClick={onButtonClick} className={styles.button} /> 
        <span className={styles.tip}>{isOpen ? 'Закрыть панель инструментов' : 'Открыть панель инструментов'}</span>
      </div>
    );
  }
}

export default OpenButton;
