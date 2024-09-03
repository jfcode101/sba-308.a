export default function headerChange() {
  const menu = document.querySelector(".menu");
  const smallDevice = window.matchMedia("(max-width: 768px)").matches;

  if (smallDevice) {
    // console.log("it is a small device");
    menu.style.display = "block";
  } else {
    // console.log("it is a bigger device");
    menu.style.display = "none";
  }
}
