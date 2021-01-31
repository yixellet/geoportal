import ImageLayer from 'ol/layer/Image';
import ImageWMS from 'ol/source/ImageWMS';

class WMSLayer {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  getWMSLayer(layerName) {
    const layer = new ImageLayer({
      source: new ImageWMS({
        url: this.baseUrl,
        params: {'LAYERS': layerName},
        ratio: 1,
        serverType: 'qgis'
      })
    });
    return layer;
  }
}

export default WMSLayer;
