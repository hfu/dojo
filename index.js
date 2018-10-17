const config = require('config')
const shapefile = require('shapefile')
const geojsonArea = require('@mapbox/geojson-area')
const F = 19

const dump = (f) => {
  f.properties.code = f.properties['統群コード']
  f.tippecanoe = {
    layer: 'dojo',
    minzoom: 12,
    maxzoom: 12
  }
  console.log(JSON.stringify(f))

  f.tippecanoe.minzoom = Math.floor(
    F - Math.log2(geojsonArea.geometry(f.geometry)) / 2
  )
  if (f.tippecanoe.minzoom < 7) f.tippecanoe.minzoom = 7
  f.tippecanoe.maxzoom = 11
  if (f.tippecanoe.minzoom > 11) f.tippecanoe.minzoom = 11
  for (const key of Object.keys(f.properties)) {
    if (key !== 'code') {
      delete f.properties[key]
    }
  }
  console.log(JSON.stringify(f))
}

for (const source of config.get('sources')) {
  shapefile.open(
    source, 
    source.replace(/shp$/, 'dbf'), 
    { encoding : config.get('encoding') }
  ).then(s => s.read()
      .then(function log(r) {
        if (r.done) return
        dump(r.value)
        return s.read().then(log)
      }))
    .catch(err => {
      console.error(err.stack)
    })
}

