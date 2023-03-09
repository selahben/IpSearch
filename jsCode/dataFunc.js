var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export function getUserDetails1() {
    return __awaiter(this, void 0, void 0, function* () {
        let myUserAgent = window.navigator.userAgent;
        let theData = yield fetch(`https://api.apicagent.com?ua=${myUserAgent}`);
        return theData.json();
    });
}
export function getUserDetails2(theIP) {
    return __awaiter(this, void 0, void 0, function* () {
        let param = "";
        if (theIP) {
            param = `&ip=${theIP}`;
        }
        let theData = yield fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=7aa82fcd02f44192b966c5fc94ab4ed1${param}`);
        return theData.json();
    });
}
