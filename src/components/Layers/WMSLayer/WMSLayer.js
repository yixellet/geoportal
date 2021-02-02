import ImageLayer from 'ol/layer/Image';
import ImageWMS from 'ol/source/ImageWMS';

class WMSLayer {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    this.visibility = true;
  }

  getWMSLayer(layerName) {
    const layer = new ImageLayer({
      source: new ImageWMS({
        url: this.baseUrl,
        params: {'LAYERS': layerName},
        ratio: 1,
        serverType: 'qgis'
      }),
      visible: this.visibility,
    });
    return layer;
  }

  setLayerVisibility() {
    this.visibility = !this.visibility
  }
}

export default WMSLayer;
