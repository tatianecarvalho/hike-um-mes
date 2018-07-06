Template.Pesquisa.rendered = function() {
  Meteor.typeahead.inject();
};

Template.Pesquisa.helpers({
  items: function() {
    // data source function
    // TODO fetch items from meteor collection
    return Meteor.users.find().fetch().map(function(user){ 
    	return {id: user._id, value: user.profile.name}; 
    });
  },
  selected: function(event, suggestion, datasetName) {
    console.log(suggestion.id);
    FlowRouter.go("/perfis/" + suggestion.id);
  }
});