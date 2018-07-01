Posts = new Mongo.Collection("posts");

Meteor.methods({
	"inserirPost": function(textoDoFormulario){
		if(Meteor.userId() != null) {
				Posts.insert({
					texto: textoDoFormulario,
					idDoAutor: Meteor.userId(),
					curtidas: []
			});			
		}
	}		
})