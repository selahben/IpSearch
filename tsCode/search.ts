import { getUserDetails2 } from "./dataFunc.js";

let $searchResults = document.getElementById("searchResults") as HTMLDivElement;

(document.getElementById("searchMe") as HTMLFormElement).addEventListener(
  "click",
  (e) => {
    let searchFor = (document.getElementById("searchFor") as HTMLInputElement)
      .value;
    let searchForLength = searchFor.split(".").length;
    console.log(searchForLength);
    if (searchFor == "" || searchForLength == 4 || searchForLength == 6) {
      getAllDetails(searchFor);
    } else {
      $searchResults.innerHTML = `<p style="color:red">ERROR! Not a valid IP!</p>`;
    }
  }
);

async function getAllDetails(searchFor?: string) {
  let geoData = await getUserDetails2(searchFor);
  displayData(geoData);
}

function displayData(geoData: any) {
  console.log(geoData);

  let theUTC: string = geoData.time_zone.current_time;
  theUTC = theUTC.substring(theUTC.length - 5);
  theUTC = theUTC.substring(0, 3) + ":" + theUTC.substring(3);

  $searchResults.innerHTML = `
  <div>
  <img src="${geoData.country_flag}" />
  </div>
  <div>
  <h3>IP</h3>
  <ul>
  <li>${geoData.ip}</li>
  </ul>
  </div>
  <div>
  <h3>Internet Provider</h3>
  <ul>
  <li>${geoData.isp}</li>
  </ul>
  </div>
  <h3>Geo Information</h3>
  <ul>
  <li>Country: ${geoData.country_name}</li>
  <li>Capital City: ${geoData.country_capital}</li>
  <li>Country Codes: ${geoData.country_code2} , ${geoData.country_code3}</li>
  <li>Location: ${geoData.latitude} (Latitude) , ${geoData.longitude} (Longitude)</li>
  <li>Calling Code: ${geoData.calling_code}</li>
  <li>Currency: ${geoData.currency.name} (${geoData.currency.symbol})</li>
  <li>Time Zone: UTC${theUTC}</li>
  </ul>
  </div>
  `;
}
