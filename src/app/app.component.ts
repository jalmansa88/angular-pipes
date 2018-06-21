import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = "Fernando";
  
  nombre2 = "sHu_mOrEnItoH rEshHuLoN";

  array = [0,1,2,3,4,5,6,7,8,9];
  PI = Math.PI;
  a = 0.234;
  salario = 1234.5;
  jedi = {
    nombre: "DarthVader",
    clave: "Anakin",
    edad: "35",
    direccion: {
      planeta: "Mustafar",
      residencia: "Castillo"
    }
  };
  valorDePromesa = new Promise((onSuccess, onError) => {
    setTimeout( () => onSuccess('ha dado exito'), 3500);
  });

  fecha = new Date();

  video = "KhzGSHNhnbI";

  password = "PassW0rdSuPerSeGuroh*";
  activar = true;
}
