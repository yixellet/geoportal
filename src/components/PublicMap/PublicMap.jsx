import React from "react";
import Map from 'ol/Map';
import View from 'ol/View';
import WMSCapabilities from 'ol/format/WMSCapabilities';

import SideBar from './SideBar/SideBar';

import styles from './PublicMap.module.css';

class PublicMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchedWMSLayers: [],
      readyForAddingToMapLayers: [],
      visibleLayers: [this.props.OSMLayer]
    };
    this.map = new Map({
      view: new View({
        center: [5251342, 5979943],
        zoom: 8,
      }),
      layers: this.state.visibleLayers,
      controls: []
    });
    this.mapContainer = React.createRef();
    this.parser = new WMSCapabilities();
    this.handleSetLayerVisible = this.handleSetLayerVisible.bind(this);
  }

  componentDidMount() {
    this.map.setTarget(this.mapContainer.current);
    this.props.api.getWMSCapabilities()
      .then((text) => {
        const result = this.parser.read(text);
        const layerList = result.Capability.Layer.Layer;
        this.setState({
          fetchedWMSLayers: layerList
        });
        const tempLayerList = [];
        layerList.forEach((layer) => {
          const newWMSLayer = this.props.WMSLayer.getWMSLayer(layer.Name);
          tempLayerList.push({name: layer.Name, layer: newWMSLayer})
        });
        this.setState({
          readyForAddingToMapLayers: tempLayerList
        })
      })
  }

  handleSetLayerVisible(layerName) {
    console.log(this.state.readyForAddingToMapLayers)
    const layerForShowing = this.state.readyForAddingToMapLayers.find((layer) => {
      return layer.name === layerName;
    })
    this.map.addLayer(layerForShowing.layer)
  }

  render() {
    return (
      <div ref={this.mapContainer} className={styles.map}>
        <SideBar onCheckboxClick={this.handleSetLayerVisible} layers={this.state.fetchedWMSLayers} />
      </div>
    );
  }
}

export default PublicMap;
