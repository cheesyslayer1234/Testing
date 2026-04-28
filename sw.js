self.addEventListener("install", () => {
    self.skipWaiting();
});

self.addEventListener("activate", (event) => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener("message", (event) => {
    console.log("SW received:", event.data);

    if (event.data?.type === "NOTIFY") {
        self.registration.showNotification(event.data.title, {
            body: event.data.body,
            icon: "https://cdn-icons-png.flaticon.com/512/1827/1827392.png",
            requireInteraction: false
        });
    }
});