function panggilFilterParameters(value) {
 var arr = [
   {negara: 'Indonesia', benua: 'Asia'},
   {negara: 'Jerman', benua: 'Eropa'},
   {negara: 'Spanyol', benua: 'Eropa'},
   {negara: 'Korea', benua: 'Asia'},
   {negara: 'Portugal', benua: 'Eropa'},
   {negara: 'Amerika Serikat', benua: 'Amerika'},
 ];
 

 var benuaAsia = arr.filter(function(item) {
      // Tulis Code Kamu Disini
     
     return item.benua === 'Asia'
 });
    
 var benuaEropa = arr.filter(function(item) {
      // Tulis Code Kamu Disini
     
     return item.benua === 'Eropa'
 });

 console.log(benuaAsia);
 console.log(benuaEropa);
}

panggilFilterParameters()