
function toggleGallery(id) {
  let gallery = document.getElementById(id);
  gallery.style.display = (gallery.style.display === "block") ? "none" : "block";
}


function showToast(message) {
  let toast = document.getElementById("toast");
  toast.innerText = message;
  toast.className = "show";
  setTimeout(() => {
    toast.className = toast.className.replace("show", "");
  }, 3000);
}
