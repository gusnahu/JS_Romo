const api = "http://ergast.com/api/f1/2019/1/driverStandings.json";

//search drivers by name and return the driver's position in the standings
function searchDriver(driverName) {
    fetch(api)
        .then(response => response.json())
        .then(data => {
            let driverStandings = data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
            let driverPosition = driverStandings.findIndex(driver => driver.Driver.givenName === driverName);
            let driverNationality = driverStandings[driverPosition].Driver.national;
            // Todo sobre el corredor
            document.getElementById("driverName").innerHTML = driverStandings[driverPosition].Driver.givenName;
            document.getElementById("driverLastName").innerHTML = driverStandings[driverPosition].Driver.familyName;
            document.getElementById("driverPosition").innerHTML = driverPosition + 1;
            document.getElementById("driverPoints").innerHTML = driverStandings[driverPosition].points;
            document.getElementById("driverNationality").innerHTML = driverStandings[driverPosition].Driver.nationality;
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