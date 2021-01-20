import React from "react";
import OlMap from "ol/Map";
import OlView from "ol/View";
import OlLayerTile from "ol/layer/Tile";
import OlSourceOSM from "ol/source/OSM";

import styles from './Map.module.css';

class PublicMap extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      center: [5232213, 5991003],
      zoom: 8
    };

    this.olmap = new OlMap({
      target: null,
      layers: [
        new OlLayerTile({
          source: new OlSourceOSM()
        })
      ],
      view: new OlView({
        center: this.state.center,
        zoom: this.state.zoom
      })
    });
  }

  updateMap() {
    this.olmap.getView().setCenter(this.state.center);
    this.olmap.getView().setZoom(this.state.zoom);
  }

  componentDidMount() {
    this.olmap.setTarget("map");

    this.olmap.on("moveend", () => {
      let center = this.olmap.getView().getCenter();
      let zoom = this.olmap.getView().getZoom();
      this.setState({ center, zoom });
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    let center = this.olmap.getView().getCenter();
    let zoom = this.olmap.getView().getZoom();
    if (center === nextState.center && zoom === nextState.zoom) {
      return false
    };
    localStorage.setItem('center', center);
    localStorage.setItem('zoom', zoom);
    return true;
  }

  render() {
    this.updateMap();
    return (
      <div id="map" className={styles.map}>
      </div>
    );
  }
}

export default PublicMap;
