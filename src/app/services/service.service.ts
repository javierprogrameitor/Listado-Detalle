import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }

    pokemon?: any;

    getPokemon() {
        return this.pokemon
    }

    setPokemon(pokemon: any) {
        this.pokemon = pokemon
    }    


  public http = inject(HttpClient);
  listaDePokemons = [
      {
          "name": "MUSTANG",     
          "number": "001",
          "image_url": "https://c.wallhere.com/photos/8b/6f/2014_Ford_Mustang_NFS_Hero_Car_netcarshow_netcar_car_images_car_photo-398813.jpg!d",
          "description" : "Coche de importación totalmente adecuado para salidas nocturnas exitosas",
          "valor" : "50.500€"
      },
      {
          "name": "DODGE",      
          "number": "002",
          "image_url": "https://professor-falken.com/wp-content/uploads/2016/11/coche-deportivo-carreras-delantera-rojo-en-blanco-y-negro-Fondos-de-Pantalla-HD-professor-falken.com_.jpg",
          "description" : "Coche Vintage una nueva experiencia al volante para aquellos no pudieron ser libres en épocas doradas",
          "valor" : "60.000€"
      },

      {  "name": "MERCEDES",       
          "number": "003",
          "image_url": "https://th.bing.com/th/id/OIP.vwG5L6_Yf-vC5S1BQhJq1QHaEK?rs=1&pid=ImgDetMain",
          "description" : "Mercedes Benz, deportivo y sin arrugas, perfecto para  ser inreconocible",
          "valor" : "150.000€"
      },
      {
          "name": "BUGATI",     
          "number": "004",
          "image_url": "https://www.holycarstv.com/wp-content/uploads/2020/08/mejores-coches-deportivos-2021.jpg",
          "description" : "Sport, puertas abatibles y asientos cómodos, para un giro en Torinno ",
          "valor" : "106.000€"
      },
      {
          "name": "BENTLEY",       
          "number": "65.000",
          "image_url": "https://th.bing.com/th/id/R.5379a3cda6abd63c65bb45f14332ee72?rik=uXqb9NIGRerV3g&riu=http%3a%2f%2fwww.listadecarros.com%2fwp-content%2fuploads%2f2015%2f03%2f233.jpg&ehk=WRZIA8JJAmMuLmVTsiQ4uRtJp9p%2fkQq7mqi2L4ULx2s%3d&risl=&pid=ImgRaw&r=0",
          "description" : "Coupé clasico y monocolor, se le puede pedir más a una joya?...",
          "valor" : "160.600€"
      },
      {
          "name": "FORD",        
          "number": "006",
          "image_url": "https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2015/01/386617-coches-tunear-ford-mustang.jpg",
          "description" : "Performance, robusto y con un sonido que pone la piel de gallina",
          "valor" : "80.290€"
      },
      {
          "name": "AUDI",       
          "number": "007",
          "image_url": "https://s3.caradvice.com.au/wp-content/uploads/2017/07/Audi-Sport-R8-TT-Performance-Parts-A178270_large.jpg",
          "description" : "Sport, Sport y Sort, son sus signos de identidad, además de su gran diseño",
          "valor" : "94.500€"
      },
      {
          "name": "TESLA",         
          "number": "008",
          "image_url": "https://e1.pxfuel.com/desktop-wallpaper/393/364/desktop-wallpaper-white-tesla-model-3-tesla-model-3-inside.jpg",
          "description" : "Electric, coche famoso en la peli que se estrellan 200 sin control en la autopista, bajo un mundo Jackeado",
          "valor" : "62.000€"
      },
      {
          "name": "JAGUAR",
          "number": "009",
          "image_url": "https://th.bing.com/th/id/OIP._c0bErTvcniGRRTGWTxQFgHaEK?rs=1&pid=ImgDetMain",
          "description" : "Classic, coupé y con el emblema mas bonito que nunca jamás se le a dado a un vehículo",
          "valor" : "48.500€"
      },
      {
          "name": "BMW",
          "number": "010",
          "image_url": "https://wallup.net/wp-content/uploads/2016/01/191046-BMW-luxury_cars-car.jpg",
          "description" : "Sport, con caracter y tecnología de última generación Europea",
          "valor" : "183.500€"
      },
      {
          "name": "RANGE-ROVER",        
          "number": "011",
          "image_url": "https://s-i.huffpost.com/gen/1480203/images/o-LAND-ROVER-facebook.jpg",
          "description" : "Suv-4x4, para los que buscan amplitud, elegancía y sentirse como Carlos III",
          "valor" : "67.500€"
      },
      {
          "name": "JEEP",
          "number": "012",
          "image_url": "https://www.comparaonline.com.co/blog-statics/co/uploads/2020/03/Jeep-es-considerada-por-ANDEMOS-una-marca-de-lujo.-1024x683.jpg",
          "description" : "Suv- 4x4, Americano, gran espacio y potencia, motor de gasolina y gran consumo",
          "valor" : "103.900€"
      }
    ]
}