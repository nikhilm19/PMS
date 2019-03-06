function search() {
	var medicine_name = document.getElementById('med_name');
	var database = firebase.database();
	if((medicine_name.value).equalTo())
		ref.child('users').orderByChild('name').equalTo('John Doe').on("value", function(snapshot) {
    console.log(snapshot.val());
    snapshot.forEach(function(data) {
        console.log(data.key);
    });
});
}
