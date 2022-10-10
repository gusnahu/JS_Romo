const api = "http://ergast.com/api/f1/2019/1/driverStandings.json";

function createSelect() {
    fetch(api)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let drivers = data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
            let select = document.getElementById("driver-name");
            for (let i = 0; i < drivers.length; i++) {
                let option = document.createElement("option");
                option.text = drivers[i].Driver.givenName + " " + drivers[i].Driver.familyName;
                option.value = drivers[i].Driver.givenName;
                select.add(option);
            }
        })
        .catch((err) => {
            console.log(err);
        });
}
createSelect();
function searchDriver(driverName) {
    fetch(api)
        .then(response => response.json())
        .then(data => {
            let driverStandings = data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
            let driverPosition = driverStandings.findIndex(driver => driver.Driver.givenName === driverName);
            document.getElementById("driverName").innerHTML = driverStandings[driverPosition].Driver.givenName;
            document.getElementById("driverLastName").innerHTML = driverStandings[driverPosition].Driver.familyName;
            document.getElementById("driverPosition").innerHTML = driverPosition + 1;
            document.getElementById("driverPoints").innerHTML = driverStandings[driverPosition].points;
            document.getElementById("driverNationality").innerHTML = driverStandings[driverPosition].Driver.nationality;     
            document.getElementById("lastUpdate").innerHTML = data.MRData.StandingsTable.StandingsLists[0].season + "-" + data.MRData.StandingsTable.StandingsLists[0].round;
            // Todo sobre la escuderia
            document.getElementById("constructorName").innerHTML = driverStandings[driverPosition].Constructors[0].name;
        })
        .catch(err => console.log(err));
}

document.getElementById("search-driver").addEventListener("click", function () {
    let driverName = document.getElementById("driver-name").value;

    if (driverName !== "") {
        searchDriver(driverName);
        document.getElementById("driver-visibility").style.display = "block";
    }

});

document.getElementById("driver-visibility").style.display = "none";