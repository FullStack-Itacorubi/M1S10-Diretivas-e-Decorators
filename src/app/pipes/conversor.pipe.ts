import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'conversor'
})
export class ConversorPipe implements PipeTransform {

  transform(value: number){ //método utilizado ao chamar o pipe
    console.log("value: ", value); //Valor enviado pelo html - {{ "value" | pipe }}
    if(value >= 60000){
      return value/60000+ "min";  
    }

    return value/1000+ "s";
  }
}
