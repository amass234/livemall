import { observable, action } from 'mobx';
import Firebase from '../config/Firebase'

class categolyStore {

    @observable data = null

    @action getcategoly() {
        const db = Firebase.firestore()
        var citiesRef = db.collection('categoly');
        var allCities = citiesRef.get()
            .then(snapshot => {
                snapshot.forEach(doc => {
                    console.log(doc.id, '=>', doc.data());
                });
            })
            .catch(err => {
                console.log('Error getting documents', err);
            });
        this.data = allCities
    }
}

export default new categolyStore();