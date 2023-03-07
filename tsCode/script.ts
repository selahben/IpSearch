async function getUserDetails() {
  let myUserAgent = window.navigator.userAgent;
  console.log(myUserAgent);
  let theData = await fetch(`https://api.apicagent.com?ua=${myUserAgent}`)
    .then((response) => response.json())
    .then((data) => displayData(data));
}

getUserDetails();
function displayData(uaData: any) {
  console.log(uaData);
  let mainDiv = document.getElementById("main") as HTMLDivElement;
  mainDiv.innerHTML = `
  <h3>Your Browser</h3>
  <ul>
  <li>Name: ${uaData.client.name}</li>
  <li>Version: ${uaData.client.version}</li>
  </ul>
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
  <h3>Your Operating System</h3>
  <ul>
  <li>Name: ${uaData.os.name}</li>
  <li>Platform: ${uaData.os.platform}</li>
  <li>Version: ${uaData.os.version}</li>
  </ul>
  `;
}
