import DS from 'ember-data';


// modellek megadása, ezekből a mezőkből fog állni, ()-on belül típust is lehet adni neki
// id-t nem kell feltüntetni itt
const KiskutyaModel = DS.Model.extend({
    error: DS.attr(),
    name: DS.attr(),
    address: DS.attr(),
});

// változót exportáljuk
export default KiskutyaModel;
