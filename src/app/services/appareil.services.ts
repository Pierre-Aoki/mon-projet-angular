export class AppareilService {

     apprareils = [
          {
               name: 'Machine à laver',
               status: 'allumé'
          },
          {
               name: 'Frigo',
               status: 'éteint'
          },
          {
               name: 'Ordinateur',
               status: 'allumé'
          }
     ];    

     switchOnAll() {
          for(let appareil of this.apprareils) {
               appareil.status = 'allumé'
          }
     }

     switchOffAll() {
          for (let appareil of this.apprareils) {
               appareil.status = 'éteint'; 
          }
     }

     switchOnOne(i: number) {
          this.apprareils[i].status = 'allumé';
     }

     switchOffOne(i: number) {
          this.apprareils[i].status = 'éteint';
     }

} 