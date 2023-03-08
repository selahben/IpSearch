//geo ip key: 7aa82fcd02f44192b966c5fc94ab4ed1
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//https://api.ipgeolocation.io/ipgeo?apiKey=7aa82fcd02f44192b966c5fc94ab4ed1
// async function getUserDetails() {
//   let myUserAgent = window.navigator.userAgent;
//   console.log(myUserAgent);
//   let theData = await fetch(`https://api.apicagent.com?ua=${myUserAgent}`)
//     .then((response) => response.json())
//     .then((data) => displayData(data));
//   console.log(theData);
// }
export function getUserDetails1() {
    return __awaiter(this, void 0, void 0, function* () {
        let myUserAgent = window.navigator.userAgent;
        //   console.log(myUserAgent);
        let theData = yield fetch(`https://api.apicagent.com?ua=${myUserAgent}`);
        return theData.json();
    });
}
export function getUserDetails2() {
    return __awaiter(this, void 0, void 0, function* () {
        let theData = yield fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=7aa82fcd02f44192b966c5fc94ab4ed1`);
        return theData.json();
    });
}
