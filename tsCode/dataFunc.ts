export async function getUserDetails1() {
  let myUserAgent = window.navigator.userAgent;
  let theData = await fetch(`https://api.apicagent.com?ua=${myUserAgent}`);
  return theData.json();
}

export async function getUserDetails2(theIP?: string) {
  let param: string = "";
  if (theIP) {
    param = `&ip=${theIP}`;
  }
  let theData = await fetch(
    `https://api.ipgeolocation.io/ipgeo?apiKey=7aa82fcd02f44192b966c5fc94ab4ed1${param}`
  );
  return theData.json();
}
