//geo ip key: 7aa82fcd02f44192b966c5fc94ab4ed1

//https://api.ipgeolocation.io/ipgeo?apiKey=7aa82fcd02f44192b966c5fc94ab4ed1

// async function getUserDetails() {
//   let myUserAgent = window.navigator.userAgent;
//   console.log(myUserAgent);
//   let theData = await fetch(`https://api.apicagent.com?ua=${myUserAgent}`)
//     .then((response) => response.json())
//     .then((data) => displayData(data));
//   console.log(theData);
// }

export async function getUserDetails1() {
  let myUserAgent = window.navigator.userAgent;
  //   console.log(myUserAgent);
  let theData = await fetch(`https://api.apicagent.com?ua=${myUserAgent}`);
  return theData.json();
}

export async function getUserDetails2() {
  let theData = await fetch(
    `https://api.ipgeolocation.io/ipgeo?apiKey=7aa82fcd02f44192b966c5fc94ab4ed1`
  );
  return theData.json();
}
