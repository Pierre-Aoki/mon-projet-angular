import { Subject } from 'rxjs';

export class AppareilService {

     appareilSubejct = new Subject<any>();

     private appareils = [
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
     
     emitAppareilSubject() {
          this.appareilSubejct.next(this.appareils.slice());
     }

     switchOnAll() {
          for(let appareil of this.appareils) {
               appareil.status = 'allumé'
          }
          this.emitAppareilSubject();
     }

     switchOffAll() {
          for (let appareil of this.appareils) {
               appareil.status = 'éteint'; 
          }
          this.emitAppareilSubject();
     }

     switchOnOne(index: number) {
          this.appareils[index].status = 'allumé';
          this.emitAppareilSubject();
     }

     switchOffOne(index: number) {
          this.appareils[index].status = 'éteint';
          this.emitAppareilSubject();
     }

     getAppareilById(id: number) {
          const appareil = this.appareils.find(
               (appareilObject) => {
                    return appareilObject.id === id; 
               }
          );
          return appareil;
     }

} 