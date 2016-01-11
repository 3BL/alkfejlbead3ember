import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('errors', function() {
    this.route('list');
    this.route('new');
    // /errors/:id
    this.route('view', {path:'/:error_id'});
    // /errors/edit/:id
    this.route('edit', {path:'/edit/:error_id'});
    this.route('newkiskutya', {path:'/:error_id/newkiskutya'});
    this.route('listkiskutya');
  });
});

export default Router;
