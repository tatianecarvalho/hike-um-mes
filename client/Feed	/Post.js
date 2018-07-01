Template.Post.helpers({
	usernameDoAutor: function () {
		var idDoAutor = this.idDoAutor;
		var autor = Meteor.users.findOne({_id: idDoAutor});
		return autor.username;
	}
});


Template.Post.events({
	"click .like-button": function(evento, template) {
		console.log(template.data._id);
	}
});