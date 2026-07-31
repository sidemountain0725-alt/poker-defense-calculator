"use strict";

const potInput = document.getElementById("potSize");
const betInput = document.getElementById("betSize");

const potError = document.getElementById("pot-error");
const betError = document.getElementById("bet-error");

const betRatioOutput = document.getElementById("betRatio");
const mdfOutput = document.getElementById("mdf");
const bluffFrequencyOutput = document.getElementById("bluffFrequency");
const valueBluffRatioOutput = document.getElementById("valueBluffRatio");

function formatPercent(value) {
  return `${value.toFixed(1)}%`;
}

function showEmptyResults() {
  betRatioOutput.textContent = "—";
  mdfOutput.textContent = "—";
  bluffFrequencyOutput.textContent = "—";
  valueBluffRatioOutput.textContent = "—";
}

function calculate() {
  const pot = Number(potInput.value);
  const bet = Number(betInput.value);

  potError.textContent = "";
  betError.textContent = "";

  let isValid = true;

  if (!Number.isFinite(pot) || pot <= 0) {
    potError.textContent = "0より大きい数値を入力してください。";
    isValid = false;
  }

  if (!Number.isFinite(bet) || bet <= 0) {
    betError.textContent = "0より大きい数値を入力してください。";
    isValid = false;
  }

  if (!isValid) {
    showEmptyResults();
    return;
  }

  const betRatio = (bet / pot) * 100;
  const mdf = (pot / (pot + bet)) * 100;
  const bluffFrequency = (bet / (pot + 2 * bet)) * 100;
  const valueToBluff = (pot + bet) / bet;

  betRatioOutput.textContent = formatPercent(betRatio);
  mdfOutput.textContent = formatPercent(mdf);
  bluffFrequencyOutput.textContent = formatPercent(bluffFrequency);
  valueBluffRatioOutput.textContent = `${valueToBluff.toFixed(2)} : 1`;
}

potInput.addEventListener("input", calculate);
betInput.addEventListener("input", calculate);

calculate();
