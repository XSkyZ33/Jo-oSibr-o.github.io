fetch("https://free-nba.p.rapidapi.com/teams?page=0", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "free-nba.p.rapidapi.com",
		"x-rapidapi-key": "cc1c2176f8msh352632401f2972fp129c4ajsnaa61495f4307"
	}
})
	.then(response => response.json())
	.then(data => {
		console.log(data)
		data.data.forEach(result => {
			
			let z = document.getElementById("results");
			let x = document.createElement("tr")

			x.innerHTML = `
			<th scope="row">${result.id}</th>
			<td>${result.full_name}</td>
			<td>${result.abbreviation}</td>
			<td>${result.city}</td>
			<td>${result.conference}</td>
			<td>${result.division}</td>
			`

			z.append(x)
		});
	});