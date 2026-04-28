self.addEventListener("install", (event) => {
    self.skipWaiting();
});

self.addEventListener("activate", (event) => {
    self.clients.claim();
});

self.addEventListener("message", (event) => {
    if (event.data?.type === "NOTIFY") {
        self.registration.showNotification(event.data.title, {
            body: event.data.body,
            icon: "https://cdn-icons-png.flaticon.com/512/1827/1827392.png"
        });
    }
});