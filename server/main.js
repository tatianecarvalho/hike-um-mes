import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});


AccountsTemplates.configure({
  postSignUpHook: function(userId, info) {
  	Meteor.users.update(userId, {
  		$set: {
  			"profile.seguidores": [],
  			"profile.seguindo": []
  		}
  	});   	
  }
});

Meteor.publish("posts",function() {
	return Posts.find();
});

Meteor.publish("comentarios", function(idDoPost) {
  return Comentarios.find({post: idDoPost});
});