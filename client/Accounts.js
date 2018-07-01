T9n.setLanguage('pt');

AccountsTemplates.configure({
    defaultLayoutType: "blaze", // Optional, the default is 'blaze'
    defaultLayout: "LayoutPrincipal",
    defaultLayoutRegions: {
        nav: "Cabecalho",
    },
    defaultContentRegion: "main"
});

AccountsTemplates.configureRoute("signIn");

var pwd = AccountsTemplates.removeField("password");
AccountsTemplates.removeField("email");
AccountsTemplates.addFields([
  {
   	_id: "username",
    type: "text",
    displayName: "username",
    required: true,
    minLength: 3,
  },
  {
    _id: "name",
    type: "text",
    displayName: "Nome Completo",
    required: true
  },  
  {
    _id: "email",
    type: "email",
    required: true,
    displayName: "email",
    re: /.+@(.+){2,}\.(.+){2,}/,
    errStr: "Invalid email",
  },
  pwd  
])
