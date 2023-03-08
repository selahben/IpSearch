import { getUserDetails1, getUserDetails2 } from "./dataFunc.js";

getAllDetails();

async function getAllDetails() {
  let data1 = await getUserDetails1();

  let data2 = await getUserDetails2();
  displayData(data1, data2);
}

function displayData(uaData: any, geoData: any) {
  console.log(uaData);
  console.log(geoData);

  let mainDiv = document.getElementById("main") as HTMLDivElement;

  let theUTC: string = geoData.time_zone.current_time;
  theUTC = theUTC.substring(theUTC.length - 5);
  theUTC = theUTC.substring(0, 3) + ":" + theUTC.substring(3);

  mainDiv.innerHTML = `
  <div>
  <img src="${geoData.country_flag}" />
  </div>
  <div>
  <h3>Your IP</h3>
  <ul>
  <li>${geoData.ip}</li>
  </ul>
  </div>
  <div>
  <h3>Your Internet Provider</h3>
  <ul>
  <li>${geoData.isp}</li>
  </ul>
  </div>
  <div>
  <h3>Your Browser</h3>
  <ul>
  <li>Name: ${uaData.client.name}</li>
  <li>Version: ${uaData.client.version}</li>
  </ul>
  </div>
  <div>
  <h3>Your Device</h3>
  <ul>
  ${
    uaData.device.brand == "unknown"
      ? ""
      : "<li>Brand: " + uaData.device.brand + "</li>"
  }
  ${
    uaData.device.model == "unknown"
      ? ""
      : "<li>Model: " + uaData.device.model + "</li>"
  }
  <li>Type: ${
    uaData.device.type.slice(0, 1).toUpperCase() + uaData.device.type.slice(1)
  }</li>
  </ul>
  </div>
  <div>
  <h3>Your Operating System</h3>
  <ul>
  <li>Name: ${uaData.os.name}</li>
  <li>Platform: ${uaData.os.platform}</li>
  <li>Version: ${uaData.os.version}</li>
  </ul>
  </div>
  <div>
  <h3>Geo Information</h3>
  <ul>
  <li>Country: ${geoData.country_name}</li>
  <li>Capital City: ${geoData.country_capital}</li>
  <li>Country Codes: ${geoData.country_code2} , ${geoData.country_code3}</li>
  <li>Location: ${geoData.latitude} (Latitude) , ${
    geoData.longitude
  } (Longitude)</li>
  <li>Calling Code: ${geoData.calling_code}</li>
  <li>Currency: ${geoData.currency.name} (${geoData.currency.symbol})</li>
  <li>Time Zone: UTC${theUTC}</li>
  </ul>
  </div>
  `;
}
