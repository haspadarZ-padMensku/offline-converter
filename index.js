const rates = {
  try: {
    byn: 0.117,
    euro: 0.0334,
    usd: 0.0366,
  },
  rsd: {
    byn: 0.024,
    euro: 0.0085,
    usd: 0.0093,
  },
};

let currentInput, bynInput, euroInput, usdInput;

let currencies = document.getElementById("currencies");

let selectedCurrency = "";

currentInput = document.getElementById("current");
bynInput = document.getElementById("byn");
euroInput = document.getElementById("euro");
usdInput = document.getElementById("usd");

currencies.addEventListener("change", (e) => {
  selectedCurrency = e.target.value.toLowerCase();
  if (selectedCurrency) {
    currentInput.disabled = false;
  } else {
    currentInput.disabled = true;
  }
});


currentInput.value = "0";
bynInput.value = "0";
euroInput.value = "0";
usdInput.value = "0";

currentInput.addEventListener("input", (e) => {
  const num = e.target.value.replace(/[^0-9]/g, "");

  if (selectedCurrency) {
    bynInput.value = Math.abs(num * rates[selectedCurrency]['byn']).toFixed(2);
    euroInput.value =  Math.abs(num * rates[selectedCurrency]['euro']).toFixed(2);
    usdInput.value = Math.abs(num * rates[selectedCurrency]['usd']).toFixed(2);
  }
});
