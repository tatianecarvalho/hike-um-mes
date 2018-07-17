Template.NovoPost.onCreated(function() {
	this.urlDaImagem = new ReactiveVar();
});

Template.NovoPost.events({
	"submit form": function(evento, template) {
    evento.preventDefault();
    if (evento.target.texto.value !== "") {
  		var textoDoFormulario = evento.target.texto.value;
      var urlDaImagem = template.urlDaImagem.get();

  		Meteor.call("inserirPost",textoDoFormulario, urlDaImagem);

  		evento.target.texto.value="";
      document.getElementById("fileInput").value = "";
    }  
	},

  "change .myFileInput": function(event, template) {
     FS.Utility.eachFile(event, function(file) {
     	Images.insert(file, function (err, fileObj) {
         	if (err){
            // handle error
         	} else {
          	template.urlDaImagem.set("/cfs/files/images/" + fileObj._id);
         	}
        })
      });  
  }	
});
