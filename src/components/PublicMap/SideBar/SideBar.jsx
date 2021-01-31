import React from "react";

import OpenButton from './OpenButton/OpenButton';
import LayerList from './LayerList/LayerList';
import logo from '../../../images/logo.svg';

import styles from './SideBar.module.css';

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true,
    }
    this.handleOpenOrClose = this.handleOpenOrClose.bind(this);
  }

  getYear() {
    let today = new Date();
    return today.getFullYear();
  }

  handleOpenOrClose() {
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen,
    })
  }

  render() {
    const { isOpen } = this.state;
    return (
      <div className={isOpen ? styles.container : `${styles.container} ${styles.container_closed}`}>
        <OpenButton onButtonClick={this.handleOpenOrClose} isOpen={isOpen} />
        <LayerList onCheckboxClick={this.props.onCheckboxClick} layers={this.props.layers} />
        <div className={styles.developer_info}>
          <a href='http://nigic.ru' target='_blank' rel="noreferrer noopener" className={styles.link}>
            <img className={styles.logo} alt='Логотип ЦПАПР' src={logo} />
            <p className={styles.cpapr_name}>Государственное автономное учреждение Астраханской области<br /> 
            "Центр пространственной аналитики и промышленного развития",<br />{this.getYear()}</p>
          </a>
        </div>
      </div>
    );
  }
}

export default SideBar;
