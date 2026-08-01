"use strict";

const potInput = document.getElementById("potSize");
const betInput = document.getElementById("betSize");
const errorMessage = document.getElementById("errorMessage");

const outputs = {
  betRatio: document.getElementById("betRatio"),
  potOdds: document.getElementById("potOdds"),
  mdf: document.getElementById("mdf"),
  requiredFolds: document.getElementById("requiredFolds"),
  bluffFrequency: document.getElementById("bluffFrequency"),
  valueBluffRatio: document.getElementById("valueBluffRatio"),
  riskRewardRatio: document.getElementById("riskRewardRatio")
};

function percent(value) {
  return `${value.toFixed(1)}%`;
}

function ratio(value) {
  return Number.isFinite(value) ? value.toFixed(2) : "—";
}

function clearOutputs() {
  Object.values(outputs).forEach((element) => {
    element.textContent = "—";
  });
}

function calculate() {
  const pot = Number(potInput.value);
  const bet = Number(betInput.value);

  if (!Number.isFinite(pot) || !Number.isFinite(bet) || pot <= 0 || bet <= 0) {
    errorMessage.textContent = "Pot Size と Bet Size には、0より大きい数値を入力してください。";
    clearOutputs();
    return;
  }

  errorMessage.textContent = "";

  const betRatio = (bet / pot) * 100;
  const potOdds = (bet / (pot + 2 * bet)) * 100;
  const mdf = (pot / (pot + bet)) * 100;
  const requiredFolds = (bet / (pot + bet)) * 100;
  const optimalBluffFrequency = potOdds;
  const valueToBluff = (pot + bet) / bet;
  const rewardPerRisk = pot / bet;

  outputs.betRatio.textContent = `${percent(betRatio)} Pot`;
  outputs.potOdds.textContent = percent(potOdds);
  outputs.mdf.textContent = percent(mdf);
  outputs.requiredFolds.textContent = percent(requiredFolds);
  outputs.bluffFrequency.textContent = percent(optimalBluffFrequency);
  outputs.valueBluffRatio.textContent = `${ratio(valueToBluff)} : 1`;
  outputs.riskRewardRatio.textContent = `1 : ${ratio(rewardPerRisk)}`;
}

potInput.addEventListener("input", calculate);
betInput.addEventListener("input", calculate);

calculate();
