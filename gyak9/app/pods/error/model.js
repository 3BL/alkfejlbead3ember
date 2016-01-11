import DS from 'ember-data';


// modellek megadása, ezekből a mezőkből fog állni, ()-on belül típust is lehet adni neki
// id-t nem kell feltüntetni itt
const ErrorModel = DS.Model.extend({
    date: DS.attr(),
    location: DS.attr(),
    description: DS.attr(),
});

// változót exportáljuk
export default ErrorModel;
