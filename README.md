# dojo

## source data
[縮尺20万分の１土壌図](https://soil-inventory.dc.affrc.go.jp/download20.html) and [縮尺5万分の１農耕地包括土壌図](https://soil-inventory.dc.affrc.go.jp/download5.html)

## data license
[CC BY 4.0](http://creativecommons.org/licenses/by/4.0/) by 農業・食品産業技術総合研究機構農業環境変動研究センター

## how the mbtiles is built
```console
$ git clone git@github.com:hfu/dojo
$ cd dojo
$ mkdir src
$ (download the zip file and extract the shepfile)
$ npm install
$ node index.js > dojo.ndjson
$ tippecanoe -f -o dojo.mbtiles --maximum-tile-bytes=131071 --base-zoom=12 --simplification=2 --drop-smallest-as-needed --minimum-zoom=10 --maximum-zoom=12 --name=縮尺20万分の1土壌図・縮尺5万分の1農耕地包括土壌図 --attribution=農業・食品産業技術総合研究機構農業環境変動研究センター dojo.ndjson
```
