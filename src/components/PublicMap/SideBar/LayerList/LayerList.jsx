import React from "react";
import LayerLegendItem from './LayerLegendItem/LayerLegendItem';

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
                  <LayerLegendItem name={layer.Name} title={layer.Title} onCheckboxClick={this.props.onCheckboxClick} />
                </li>
            })
          }
        </ul>
      </div>
    );
  }
}

export default LayerList;
