if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js").then(function () {
        console.log("Service Worker is registered!");
    });
}



function getPlayers() {
	let a = "https://www.balldontlie.io/api/v1/players?search="
	let b = document.getElementById("search").value

	let url = a + b;

	let r = document.getElementById("players");

	r.innerHTML = `
	<div class="spinner-border" role="status">
		<span class="visually-hidden">Loading...</span>
	</div>
	`

	let no = "No Information";

	fetch(url, {
		method: 'GET'
	})
		.then(response => response.json())
		.then(player => {

			r.innerHTML = ""



			player.data.forEach(result => {

				if (result.height_feet == null) {
					result.height_feet = no
				}
				if (result.height_inches == null) {
					result.height_inches = no
				}
				if (result.position == null || result.position === "") {
					result.position = no
				}
				if (result.weight_pounds == null) {
					result.weight_pounds = no
				}

				let y = document.createElement("div");

				y.innerHTML = `

				<div class="card mb-3">
					<div class="card-body">
						<h5 class="card-title">${result.first_name} ${result.last_name}</h5>
						<p class="card-text">
						<p>About
							<p>Name: ${result.first_name} ${result.last_name}</p>
							<p>Position: ${result.position}</p>
							<p>Height in feet: ${result.height_feet}</p>
							<p>Height in Inches: ${result.height_inches}</p>
							<p>Weight Pounds: ${result.weight_pounds}</p>
							<p>Team: ${result.team.full_name}, ${result.team.abbreviation}</p>
							<button class="btn btn-primary" onclick="seeStats(${result.id})">See Stats</button>
						</p>
						
						<p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>	
						<p class="sss" id="id">ID: ${result.id}
					</div>
				</div>
				

				`
				r.append(y)
			});
		});


}

function seeStats(id) {

	let a = "https://www.balldontlie.io/api/v1/season_averages?player_ids[]="
	let b = id;
	let url = a + b;

	fetch(url, {
		"method": 'GET'
	})

		.then(response => response.json())
		.then(player => {

			let l = document.getElementById("players");

			let y = document.createElement("div");

			if (player.data.length == 0) {

				l.innerHTML = ""

				y.innerHTML = `
			
				<div class="card mb-3">
					<div class="card-body">
					<h5 class="card-title">Player Stats</h5>
					<p class="card-text">
					<p>
						<div class="alert alert-danger d-flex align-items-center" role="alert">
							<svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
							<div>
							  No Stats... This player either is retired or doesn't play on this league right now.
							</div>
						  </div>
						<button class="btn btn-primary" onclick="getPlayers()">Go back</button>
					</p>
					<p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
					</div>
				</div>
			
				`

				l.append(y)

			}


			player.data.forEach(result => {

				console.log(result)

				if (result != null) {

					l.innerHTML = ""

					y.innerHTML = `
				
					<div class="card mb-3">
						<div class="card-body">
							<h5 class="card-title">Player Stats</h5>
							<p class="card-text">
							<p>Stats
								<p>Season: ${result.season}</p>
								<p>Games Played: ${result.games_played}</p>
								<p>Minutes: ${result.min}</p>
								<p>Points: ${result.pts}</p>
								<p>Assists: ${result.ast}</p>
								<p>Rebounds: ${result.reb}</p>
								<p>Turnovers: ${result.turnover}</p>
								<button class="btn btn-primary" onclick="getPlayers()">Go Back</button>
							</p>
						
							<p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
						</div>
					</div>
				
					`

					l.append(y)


				}



			});

		});

}








