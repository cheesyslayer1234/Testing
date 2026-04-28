self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

let timer = null;

self.addEventListener("message", (event) => {
  console.log("SW received:", event.data);

  if (event.data?.type === "START_TIMER") {
    const delay = event.data.delay || 10;

    // clear existing timer if any
    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      self.registration.showNotification("TIMER DONE", {
        body: "This is Pomofocus-style SW notification",
        requireInteraction: true
      });
    }, delay * 1000);
  }
});
