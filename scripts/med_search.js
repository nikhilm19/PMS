function search() 
{
	var medicine_name = document.getElementById('med_name').value;
	var query = firebase.database().ref("medicines").orderByKey();
	query.once("value").then(function(snapshot){
		snapshot.forEach(function(childSnapshot)
		{
			var  key = childSnapshot.key;
			//var childData = childSnapshot.val();
			var name=childSnapshot.child("name").val();
			var name1=childSnapshot.child("name").val();
			name = name.split(" ");
			name = name[0];
			if(name==medicine_name && name1.includes(name))
			{
				var id=childSnapshot.child("medicine_id").val();
				var query1 = firebase.database().ref("medicines/"+id).orderByKey();
				query1.once("value").then(function(snapshot)
				{
					snapshot.forEach(function(childSnapshot)
					{
						var  key = childSnapshot.key;
						var childData = childSnapshot.val();
						console.log(childData);
					});
				});
			}
		});
	});
}	
