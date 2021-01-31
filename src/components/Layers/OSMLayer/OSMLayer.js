import Tile from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

const OSMLayer = new Tile({
  source: new OSM()
});

export default OSMLayer;
