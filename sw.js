self.addEventListener("install", () => {
    self.skipWaiting();
});

self.addEventListener("activate", (event) => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener("message", (event) => {
    if (event.data?.type === "NOTIFY") {
        self.registration.showNotification(event.data.title, {
            body: event.data.body
        });
    }
});