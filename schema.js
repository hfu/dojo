module.exports = [
  [
    'src/全国農耕地土壌図/全国農耕地HP.shp',
    (f) => {
      f.properties.code = f.properties['統群コード']
      f.tippecanoe = {
        layer: 'dojo',
        minzoom: 12,
        maxzoom: 12
      } 
      return f
    }
  ],
  [
    'src/全国農耕地土壌図/全国農耕地HP.shp',
    (f) => {
      f.properties.code = f.properties['統群コード']
      for (const k of Object.keys(f.properties)) {
        if (k !== 'code') delete f.properties[k]
      }
      f.tippecanoe = {
        layer: 'dojo',
        minzoom: 11,
        maxzoom: 11
      }
      return f
    }
  ],
  [
    'src/%E5%85%A8%E5%9B%BD_20/全国_20.shp',
    (f) => {
      f.properties.code = f.properties['SSerGrCD']
      f.tippecanoe = {
        layer: 'dojo',
        minzoom: 10,
        maxzoom: 10
      }
      return f
    }
  ] /*,
  [
    'src/%E5%85%A8%E5%9B%BD_20/全国_20.shp',
    (f) => {
      f.properties.code = f.properties['SSerGrCD']
      for (const k of Object.keys(f.properties)) {
        if (k !== 'code') delete f.properties[k]
      }
      f.tippecanoe = {
        layer: 'dojo',
        minzoom: 9,
        maxzoom: 9 
      }
      return f
    }
  ] */
]
