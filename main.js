import SmoothScroll from "smooth-scroll";
import AOS from "aos";
import axios from "axios";

var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 800
});

AOS.init({ once: true, duration: 600, offset: 300 });

const portItems = [
  {
    title: "Linknob",
    desc: `Social link sharing platform built with <b>Python</b>,
<b>Flask</b>, <b>Postgresql</b>, and <b>jQuery</b>.`,
    url: "https://linknob.com"
  },
  {
    title: "Putt-Putt",
    desc: `Simple Score Tracking App built with <b>React</b>, <b>Node</b>, and
  <b>Firebase</b>.`,
    url: "https://putt.jwb.cloud"
  },
  {
    title: "Jotter",
    desc: `Chrome Extension for keeping notes built with <b>Javascript</b>.`,
    url:
      "https://chrome.google.com/webstore/detail/jotter/iamceofaeghmibfhlojfjdkjkikdpibf"
  },
  {
    title: "Data Uplift",
    desc: `App with multiple data functions and requires an access key to use
    built in <b>Python</b>, <b>Flask</b>, <b>Postgresql</b>, and
    <b>Javascript</b>.`,
    url: "https://datauplift.com"
  },
  {
    title: "DumbCoin",
    desc: `Simple cryptocurrency experiment built with <b>Python</b>.`,
    url: "https://github.com/jac0bbennett/dumbcoin"
  },
  {
    title: "Jalexbennett.com",
    desc: `Online business card / webpage for client.`,
    url: "https://jalexbennett.com"
  },
  {
    title: "Jwb.Cloud",
    desc: `Basic landing page and logo for personal company.`,
    url: "https://jwb.cloud"
  },
  {
    title: "Loanpeak.group",
    desc: `Website and logo for client built with <b>React</b>.`,
    url: "https://loanpeak.group"
  },
  {
    title: "Partner Recruitment Calculator",
    desc: `App to calculate partner recruitment built with <b>Vue.js</b>.`,
    url: "https://jacobbennett.us/calc"
  },
  {
    title: "SimpleScrape",
    desc: `Easy to use web page scraper built with <b>Python</b>.`,
    url: "https://github.com/jac0bbennett/simplescrape"
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
    <b>Javascript</b>.`,
    url: "http://cyanide.herokuapp.com"
  },
  {
    title: "Global Chat Project",
    desc: `Realtime chat app built with <b>Python</b>, <b>Flask</b>, <b>Web Sockets</b>, and
    <b>Javascript</b>.`,
    url: "http://jwb-gcp.herokuapp.com"
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
    <a href="` +
    portItems[i].url +
    `" class="port-item-link" target="_blank">
    <button class="port-item-button">
    <span class="icolab">Visit</span>
    <i class="material-icons">
    call_made
    </i>
    </button>
    </a>
    </li>`;
}

window.addEventListener("scroll", function(e) {
  const nav = document.getElementById("nav");
  if (window.scrollY >= 200) {
    nav.classList.add("scrolled-nav");
  } else {
    nav.classList.remove("scrolled-nav");
  }
});

const contactform = document.getElementById("contact-form");

contactform.addEventListener("submit", async function(e) {
  e.preventDefault();

  let params = {};

  const nameInp = contactform.querySelector("[name='name']");
  const emailInp = contactform.querySelector("[name='email']");
  const msgInp = contactform.querySelector("[name='msg']");

  const formMsg = document.getElementById("contact-msg");

  params["name"] = nameInp.value;
  params["email"] = emailInp.value;
  params["msg"] = msgInp.value;

  try {
    formMsg.innerHTML = "submitting...";
    const req = await axios.post("https://www.linknob.com/api/contact", params);
    if (req.data.error) {
      console.log(req.data.error);
      formMsg.innerHTML = "An error occurred!";
    } else {
      formMsg.innerHTML = "Sent. Thank You!";

      nameInp.value = "";
      emailInp.value = "";
      msgInp.value = "";
    }
  } catch (err) {
    console.log(err);
    formMsg.innerHTML = "Could not submit form!";
  }
});
