import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import Api from './utils/QGIS_Api';
import { QGIS_SERVER_URL } from './utils/constants';
import OSMLayer from './components/Layers/OSMLayer/OSMLayer';
import WMSLayer from './components/Layers/WMSLayer/WMSLayer';

const api = new Api(QGIS_SERVER_URL);
const wmsLayer = new WMSLayer(QGIS_SERVER_URL);

ReactDOM.render(
  <React.StrictMode>
    <App api={api} OSMLayer={OSMLayer} WMSLayer={wmsLayer} />
  </React.StrictMode>,
  document.getElementById('root')
);
