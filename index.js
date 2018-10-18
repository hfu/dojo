const config = require('config')
const shapefile = require('shapefile')
const geojsonArea = require('@mapbox/geojson-area')
const schema = require('./schema.js')

for (let [path, modify] of schema) {
  shapefile.open(
    path, 
    path.replace(/shp$/, 'dbf'), 
    { encoding : config.get('encoding') }
  ).then(s => s.read()
      .then(function log(r) {
        if (r.done) return
        console.log(JSON.stringify(modify(r.value)))
        return s.read().then(log)
      }))
    .catch(err => {
      console.error(err.stack)
    })
}

