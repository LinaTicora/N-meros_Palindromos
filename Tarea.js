function palindromo() {
    var x,y,cont1=0,base=2,salida=0,entrada,valor=0;  //y = longitud del numero
    var par,val1,valf,cont,condicion=0,condicion1=0;
    var mod = new Array();
    var div = new Array();
    //   <>
    let valor1 = document.getElementById('valor1');
    valor = valor1.value;	
    for(var a=2;a<11;a++){ 
     div[0] = valor / base;
     div[0] = Math.trunc(div[0]);
     mod[0] = valor % base;
     cont1++;
     if(div[0]<base){
     salida=1;
     }
     while(salida==0){
           div[cont1] = div[cont1-1] / base;
         div[cont1] = Math.trunc(div[cont1]);
         mod[cont1] = div[cont1-1] % base;
         if(div[cont1]<base){
             salida=1;
         }
         cont1++;
    }
    mod[cont1] = div[cont1-1];
    mod.reverse();
    entrada = mod.join('');
    document.write("/"+entrada+"/");
    
    var mod = new Array();
    var div = new Array();
    cont1=0;
    salida=0;
    //Evalua si es palindromo
    x = entrada;
    y = x.length;
    par = y % 2;
    cont = y;
    if( par == 0){
            for(var i=0; i<(y/2) ; i++){
               val1 = x[i];
               valf = x[y-1];
               cont--;
               if(val1 == x[cont]){
                 condicion=0;
               }
               else{
                 condicion1=1;
               }
            }
            if(condicion1==1){
               document.write("No es palindromo en base "+base+"<br/>");
            }
            else{
             document.write("Es palindromo en base "+base+"<br/>");
            }
            cont=0;
           
            }
    else {
         for(var c=0; c<(y/2)-1 ; c++){
                 val1 = x[c];
               valf = x[y-1];
               cont--;
               if(val1 == x[cont]){
                 condicion=0;
               }
               else{
                 condicion1=1;
               }
         }
         if(condicion1==1){
               document.write("No es palindromo en base "+base+"<br/>");
         }
         else{
             document.write("Es palindromo en base "+base+"<br/>");
         }
         cont=0;        
         
     }
     condicion1=0;
  base++;
  }
 
  }