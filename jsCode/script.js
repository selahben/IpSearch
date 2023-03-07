"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function getUserDetails() {
    return __awaiter(this, void 0, void 0, function* () {
        let myUserAgent = window.navigator.userAgent;
        console.log(myUserAgent);
        let theData = yield fetch(`https://api.apicagent.com?ua=${myUserAgent}`)
            .then((response) => response.json())
            .then((data) => displayData(data));
    });
}
getUserDetails();
function displayData(uaData) {
    console.log(uaData);
    let mainDiv = document.getElementById("main");
    mainDiv.innerHTML = `
  <h3>Your Browser</h3>
  <ul>
  <li>Name: ${uaData.client.name}</li>
  <li>Version: ${uaData.client.version}</li>
  </ul>
  <h3>Your Device</h3>
  <ul>
  ${uaData.device.brand == "unknown"
        ? ""
        : "<li>Brand: " + uaData.device.brand + "</li>"}
  ${uaData.device.model == "unknown"
        ? ""
        : "<li>Model: " + uaData.device.model + "</li>"}
  <li>Type: ${uaData.device.type.slice(0, 1).toUpperCase() + uaData.device.type.slice(1)}</li>
  </ul>
  <h3>Your Operating System</h3>
  <ul>
  <li>Name: ${uaData.os.name}</li>
  <li>Platform: ${uaData.os.platform}</li>
  <li>Version: ${uaData.os.version}</li>
  </ul>
  `;
}
