import { getCandies } from "../api/api.js";


async function loadCandyData(){
    let candydata = await getCandies(1);
    const name = document.getElementById("name");
    const producer = document.getElementById("producer");
    const owner = document.getElementById("owner");
    const weight = document.getElementById("weight");
    const price = document.getElementById("price");
    const rate = document.getElementById("rate");
    name.textContent = candydata.name;
    producer.textContent = candydata.producer;
    owner.textContent = candydata.owner;
    weight.textContent = candydata.weight;
    price.textContent = candydata.price;
    rate.textContent = candydata.rate;
    console.log(candydata);
}

const currentUrl = window.location.href.split("/");
let candyIndex = currentUrl.at(-1);
loadCandyData();
