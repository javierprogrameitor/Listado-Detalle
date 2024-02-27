import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Chart } from 'chart.js/auto';
import { Pokemon } from '../interfaces/pokemon.interface';
import { PokemonService } from '../services/service.service';
import { initFlowbite } from 'flowbite';


@Component({
  selector: 'app-desc',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './desc.component.html',
 
})
export class DescComponent implements OnInit {

  constructor() {}

  private servicePokemon = inject(PokemonService);

  listaPokemon = this.servicePokemon.listaDePokemons;
  pokemon?: any;

 
  listaDePokemons = [
    {
        "name": "MUSTANG",     
        "number": "001",
        "image_url": "https://c.wallhere.com/photos/8b/6f/2014_Ford_Mustang_NFS_Hero_Car_netcarshow_netcar_car_images_car_photo-398813.jpg!d",
        "description" : "movie",
        "valor" : "50"
    },
    {
        "name": "DODGE",      
        "number": "002",
        "image_url": "https://professor-falken.com/wp-content/uploads/2016/11/coche-deportivo-carreras-delantera-rojo-en-blanco-y-negro-Fondos-de-Pantalla-HD-professor-falken.com_.jpg",
        "description" : "fire",
        "valor" : "130"
    },

    {  "name": "MERCEDES",       
        "number": "003",
        "image_url": "https://th.bing.com/th/id/OIP.vwG5L6_Yf-vC5S1BQhJq1QHaEK?rs=1&pid=ImgDetMain",
        "description" : "flying",
        "valor" : "150"
    },
    {
        "name": "BUGATI",     
        "number": "004",
        "image_url": "https://www.holycarstv.com/wp-content/uploads/2020/08/mejores-coches-deportivos-2021.jpg",
        "description" : "air",
        "valor" : "106"
    },
    {
        "name": "BENTLEY",       
        "number": "005",
        "image_url": "https://th.bing.com/th/id/R.5379a3cda6abd63c65bb45f14332ee72?rik=uXqb9NIGRerV3g&riu=http%3a%2f%2fwww.listadecarros.com%2fwp-content%2fuploads%2f2015%2f03%2f233.jpg&ehk=WRZIA8JJAmMuLmVTsiQ4uRtJp9p%2fkQq7mqi2L4ULx2s%3d&risl=&pid=ImgRaw&r=0",
        "description" : "evolution",
        "valor" : "16"
    },
    {
        "name": "FORD",        
        "number": "006",
        "image_url": "https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2015/01/386617-coches-tunear-ford-mustang.jpg",
        "description" : "Dig",
        "valor" : "15"
    },
    {
        "name": "AUDI",       
        "number": "007",
        "image_url": "https://s3.caradvice.com.au/wp-content/uploads/2017/07/Audi-Sport-R8-TT-Performance-Parts-A178270_large.jpg",
        "description" : "flying",
        "valor" : "20"
    },
    {
        "name": "TESLA",         
        "number": "008",
        "image_url": "https://e1.pxfuel.com/desktop-wallpaper/393/364/desktop-wallpaper-white-tesla-model-3-tesla-model-3-inside.jpg",
        "description" : "rotaer",
        "valor" : "60"
    },
    {
        "name": "JAGUAR",
        "number": "009",
        "image_url": "https://th.bing.com/th/id/OIP._c0bErTvcniGRRTGWTxQFgHaEK?rs=1&pid=ImgDetMain",
        "description" : "funch",
        "valor" : "20"
    },
    {
        "name": "BMW",
        "number": "010",
        "image_url": "https://wallup.net/wp-content/uploads/2016/01/191046-BMW-luxury_cars-car.jpg",
        "description" : "skipe",
        "valor" : "180"
    },
    {
        "name": "RANGE-ROVER",        
        "number": "011",
        "image_url": "https://s-i.huffpost.com/gen/1480203/images/o-LAND-ROVER-facebook.jpg",
        "description" : "lenth",
        "valor" : "60"
    },
    {
        "name": "JEEP",
        "number": "012",
        "image_url": "https://www.comparaonline.com.co/blog-statics/co/uploads/2020/03/Jeep-es-considerada-por-ANDEMOS-una-marca-de-lujo.-1024x683.jpg",
        "description" : "matrix",
        "valor" : "103"
    }
  ]
 

  ngOnInit(): void {
    this.crearGrafico();
    this.pokemon = this.servicePokemon.getPokemon();
    initFlowbite();
  }

  

  crearGrafico(): void {
    const ctx = document.getElementById('myChart') as HTMLCanvasElement;
    const valores = this.listaDePokemons.map(pokemon => pokemon.valor);
    const nombres = this.listaDePokemons.map(pokemon => pokemon.name);

    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: nombres,
        datasets: [{
          label: 'Valor del coche',
          data: valores,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }


}
