window.alert("Ejercicio 8 Switch");
var option = parseInt(prompt("Operadores Aritméticos\n"+"\n 0.Salir"+"\n1.Suma"+"\n2.Resta"+"\n3.Multiplicación"+"\n4.División"+"\n5.resto"+"\nOperadores Relacionales" +"\n6.Menor que..." +"\n7.Mayor que ..."));
 var mayor=numero1>numero2;
 var salir=0;	
 while(option!=8 & option!=0){
	 option = parseInt(prompt("La opción no es valida ingrese nuevamente una opcion"+
	 						 "\nOperadores Aritméticos\n"+
	 						 "\n 0.Salir"+
	 						 "\n1.Suma"+
	 						 "\n2.Resta"+
	 						 "\n3.Multiplicación"+
	 						 "\n4.División"+
	 						 "\n5.resto"+
	 						 "\nOperadores Relacionales"+
	 						 "\n6.Menor que..." +
	 						 "\n7.Mayor que ..."));
 		
	if(option>0 && option<=7){
		var numero1 = parseInt(prompt("Ingrese número: "));
		var numero2 = parseInt(prompt("Ingrese número: "));
		
		switch(option){
			case 1:
				var suma= numero1+numero2;
				document.write("La Suma de: " + numero1 + "+" + numero2 +" es: "+(suma)+"\n");
			break;
			case 2:
				var resta= numero1-numero2;
				document.write("La resta de: "+numero1 + "-" + numero2 +" es: "+ (resta)+"\n");
			break;
			case 3:
				var multiplicación= numero1*numero2;
				document.write("La multiplicación de: "+numero1 + "x"+ numero2 +" es: "+(multiplicación)+"\n");
			break;
			case 4:
				var división= numero1/numero2;
				document.write("La división de: "+numero1 + "/"+ numero2 +" es: "+(división)+"\n");
			break;
			case 5:
				var resto= numero1%numero2;
				document.write("La resto de: "+numero1 + " % "+ numero2 +" es: "+(resto)+"\n");
			break;
			case 6:
				var menor=numero1<numero2;
				document.write("El número "+ numero1+" es menor que el número "+ numero2 +" es: "+(menor)+"\n");
			break;
			case 7:
				var mayor=numero1>numero2;
				document.write("El número "+ numero1+" es mayor que el número "+ numero2 +" es: "+(mayor)+"\n");
			break;
			default:
				document.write("\nEsta opción no existe\n");
			break;		
		}
	}
	 else if (option==0){
			document.write("\nHa salido del Ejercicio\n");
	}
}

