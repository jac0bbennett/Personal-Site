var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 800
});

const portItems = [
  {
    title: "Linknob",
    desc: `Social link sharing platform built with <b>Python</b>,
<b>Flask</b>, <b>Postgresql</b>, and <b>jQuery</b>.`
  },
  {
    title: "Putt-Putt",
    desc: `Simple Score Tracking App built with <b>React</b>, <b>Node</b>, and
  <b>Firebase</b>.`
  },
  {
    title: "Jotter",
    desc: `Chrome Extension for keeping notes built with <b>Javascript</b>.`
  },
  {
    title: "Data Uplift",
    desc: `App with multiple data functions and requires an access key to use
    built in <b>Python</b>, <b>Flask</b>, <b>Postgresql</b>, and
    <b>Javascript</b>.`
  },
  {
    title: "DumbCoin",
    desc: `Simple cryptocurrency experiment built with <b>Python</b>.`
  },
  {
    title: "Jalexbennett.com",
    desc: `Online business card / webpage for client.`
  },
  {
    title: "Jwb.Cloud",
    desc: `Basic landing page and logo for personal company.`
  },
  {
    title: "Loanpeak.group",
    desc: `Website and logo for client built with <b>React</b>.`
  },
  {
    title: "Partner Recruitment Calculator",
    desc: `App to calculate partner recruitment built with <b>Vue.js</b>.`
  },
  {
    title: "SimpleScrape",
    desc: `Easy to use web page scraper built with <b>Python</b>.`
  },
  {
    title: "Milk CMS",
    desc: `Unfinished centralized headless content management system built
    with <b>Python</b>, <b>Flask</b>, <b>React</b>, and
    <b>Postgresql</b>.`
  },
  {
    title: "Cyanide",
    desc: `Website status checker <b>Python</b>, <b>Flask</b>,
    <b>Javascript</b>.`
  },
  {
    title: "Global Chat Project",
    desc: `Realtime chat app built with <b>Python</b>, <b>Flask</b>,
    <b>Javascript</b>.`
  }
];

let portItemsDiv = document.getElementById("port-items");

portItemsDiv.innerHTML = ``;

for (var i = 0; i < portItems.length; i++) {
  portItemsDiv.innerHTML =
    portItemsDiv.innerHTML +
    `<li data-aos="fade-up">
    <h3>` +
    portItems[i].title +
    `</h3>
    <span class="port-desc"
      >` +
    portItems[i].desc +
    `
    </span>
    <button class="port-item-button">
    <span class="icolab">Visit</span>
    <i class="material-icons">
    call_made
    </i>
    </button>
    </li>`;
}
