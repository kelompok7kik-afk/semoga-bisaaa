const API_URL = "https://script.google.com/macros/s/AKfycbzCSis8_zQWE6riEFKNLr27SZAbbzmR9UCt84e9Rm3TRErgrOcUYJaz93wN9OzgG9KyRw/exec"; // yang berakhiran /exec

async function api(payload) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(payload)
  });
  return res.json();
}