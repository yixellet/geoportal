import React from "react";

import styles from './LayerLegendItem.module.css';

class LayerLegendItem extends React.Component {
  render() {
    const {name, title, onCheckboxClick } = this.props;
    return (
      <>
        <input onClick={() => onCheckboxClick(name)} className={styles.checkbox} type="checkbox" id={name} name={name} />
        <label htmlFor={name} className={styles.label}>{title}</label>
        <button className={styles.attributeTable_button} />
      </>
    );
  }
}

export default LayerLegendItem;
