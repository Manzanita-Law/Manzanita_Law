function closeBanner() {
  document.getElementById("banner").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
  const referrer = document.referrer;
  const redirectUrl = "https://www.thakker-law.com";

  console.log(referrer);
  if (referrer === redirectUrl) {
    document.getElementById("banner").style.display = "flex";
  }

  document.getElementById("banner-close").onclick = function closeBanner() {
    document.getElementById("banner").style.display = "none";
  };
});
