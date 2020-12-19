const cInput = document.getElementById("c-input-value");
const fInput = document.getElementById("f-input-value");

const cResult = document.querySelector(".c-result-value");
const fResult = document.querySelector(".f-result-value");

const convertBtn = document.querySelector(".convert-btn");

function convert() {
  if (cInput.value.trim() == "" && fInput.value.trim() == "") {
    return;
  } else if (cInput.value.trim() !== "" && fInput.value.trim() == "") {
    cResult.textContent = ((parseInt(cInput.value, 10) * 9) / 5 + 32).toFixed(
      2
    );
  } else if (cInput.value.trim() == "" && fInput.value.trim() !== "") {
    fResult.textContent = (((parseInt(fInput.value, 10) - 32) * 5) / 9).toFixed(
      2
    );
  } else {
    cResult.textContent = ((parseInt(cInput.value, 10) * 9) / 5 + 32).toFixed(
      2
    );
    fResult.textContent = (((parseInt(fInput.value, 10) - 32) * 5) / 9).toFixed(
      2
    );
  }
}

convertBtn.addEventListener("click", convert);
