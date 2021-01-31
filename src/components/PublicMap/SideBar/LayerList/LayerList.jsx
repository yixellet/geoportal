import React from "react";

import styles from './LayerList.module.css';

class LayerList extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <h3 className={styles.title}>Слои карты</h3>
        <ul className={styles.list}>
          {
            this.props.layers.map((layer, index) => {
              return <li key={index}>
                  <input onClick={() => this.props.onCheckboxClick(layer.Name)} type="checkbox" id={layer.Name} name={layer.Name} />
                  <label htmlFor={layer.Name}>{layer.Title}</label>
                </li>
            })
          }
        </ul>
      </div>
    );
  }
}

export default LayerList;
