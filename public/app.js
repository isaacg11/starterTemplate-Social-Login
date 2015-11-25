Stamplay.init('yourAppId');

function facebook(){
	var newUser = new Stamplay.User().Model;
	newUser.login('facebook');
}
