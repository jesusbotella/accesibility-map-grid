const map = new mapboxgl.Map({
  container: 'map',
  style: carto.basemaps.voyager,
  center: [0, 0],
  zoom: 1,
  scrollZoom: false
});

export default map;
