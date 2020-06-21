export class AppareilService {

     apprareils = [
          {
               id: 1,
               name: 'Machine à laver',
               status: 'allumé'
          },
          {
               id: 2,
               name: 'Frigo',
               status: 'éteint'
          },
          {
               id: 3,
               name: 'Ordinateur',
               status: 'allumé'
          }
     ];    

     switchOnAll() {
          console.log('switchOnAll');
          for(let appareil of this.apprareils) {
               appareil.status = 'allumé'
          }
     }

     switchOffAll() {
          console.log('switchOffAll');
          for (let appareil of this.apprareils) {
               appareil.status = 'éteint'; 
          }
     }

     switchOnOne(index: number) {
          this.apprareils[index].status = 'allumé';
     }

     switchOffOne(index: number) {
          this.apprareils[index].status = 'éteint';
     }

     getAppareilById(id: number) {
          const appareil = this.apprareils.find(
               (appareilObject) => {
                    return appareilObject.id === id; 
               }
          );
          return appareil; 
     }

} 