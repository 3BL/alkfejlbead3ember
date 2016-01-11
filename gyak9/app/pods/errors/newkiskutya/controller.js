import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        newKiskutya(formData) {
            console.log(formData);
            var kiskutya = this.store.createRecord('kiskutya', Object.assign({  // kiskutya modelben adjuk meg az objektumot
                name: 'nev',
                address: 'lakcim',
                error: null,
            }, formData));  // formData - ami bejön a formon érték az felül írja az alapértéket
            kiskutya.save();
           // this.transitionToRoute('errors.list')  // ugyanazon az oldalon vagyunk, ezért nem kell
        }
    }
});
