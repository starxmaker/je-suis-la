const Point=ol.geom.Point
const Feature=ol.Feature
const Icon=ol.style.Icon
const Style=ol.style.Style
const VectorSource=ol.source.Vector
const VectorLayer=ol.layer.Vector
const TileLayer=ol.layer.Tile
const Source=ol.source
const Map=ol.Map
const Project=ol.proj
const View=ol.View
const Overlay=ol.Overlay

class JeSuisLa{
    constructor(target, latitude,longitude, zoom, description, style){
        document.getElementById(target).innerHTML=""
        //default values for non required params
        const acercamiento=zoom? zoom : 17
        const estilo=style? style: {
            height: "20em",
            width: "100%"
        }
        //change style according to requirements
        Object.assign(document.querySelector('#'+target).style, estilo)
        //pointer configuration
        const position=[longitude,latitude]
        const point = new Point(Project.fromLonLat(position))
        const iconFeature= new Feature({geometry: point})
        const icon = new Icon({
            anchor: [0.5, 40],
            anchorXUnits: 'fraction',
            anchorYUnits: 'pixels',
            src: 'https://cdn.jsdelivr.net/gh/starxmaker/je-suis-la@main/pointer.png'
        })
        const iconStyle= new Style({
            image: icon,
            text: new ol.style.Text({
                font: '2em Calibri,sans-serif',
                fill: new ol.style.Fill({ color: '#000' }),
                stroke: new ol.style.Stroke({
                  color: '#fff', width: 4
                }),
                offsetY: 20,
                text: description? description : ""
            })
        })
        iconFeature.setStyle(iconStyle);
        const vectorSource = new VectorSource({
            features: [iconFeature]
        }); 
        var vectorLayer = new VectorLayer({
            source: vectorSource,
        });
        //map configuration
        var rasterLayer = new TileLayer({
            source: new Source.OSM()
        });
        map = new Map({
            target: target,
            layers: [
              rasterLayer, vectorLayer
            ],
            view: new View({
              center: Project.fromLonLat(position),
              zoom: acercamiento
            })
        });
        
    }
}




