function search() 
{
	var medicine_name = document.getElementById('med_name').value;
	var query = firebase.database().ref("medicines").orderByKey();
	query.once("value").then(function(snapshot){
		snapshot.forEach(function(childSnapshot)
		{
			var  key = childSnapshot.key;
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
						if(key!="constituents" && key!="schedule" && key!="price")document.write(key+": "+childData+"<br>");
						if(key=="standardUnits")document.write("<br>");
						if(key=="price")document.write(key+": "+"Rs."+childData+"<br>");
						if(key=="schedule")
						{
							query1 = firebase.database().ref("medicines/"+id+"/schedule").orderByKey();
							query1.once("value").then(function(snapshot)
							{
								snapshot.forEach(function(childSnapshot)
								{
									var  key1 = childSnapshot.key;
									var childData = childSnapshot.val();
									document.write(key1+": "+childData+"<br>");
								});
							});							
						}
					});
				});
			}
		});
	});
}	




/*var query1 = firebase.database().ref("medicines/"+id).orderByKey();
				query1.once("value").then(function(snapshot)
				{
					snapshot.forEach(function(childSnapshot)
					{
						var  key = childSnapshot.key;
						var childData = childSnapshot.val();
						//console.log(childData); 
						
						//console.log(name_val); 
						//$("#name").append(name_val);
					});
				});*/