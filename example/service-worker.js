self.addEventListener('push', async (event) => {
  console.log('[Service Worker] Push Received.');
  console.log(`[Service Worker] Push had this data: "${event.data.text()}"`);

  const {body, title, data} = await event.data.json()

  event.waitUntil(self.registration.showNotification(title, {body, data}));
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close(); 
  return clients.openWindow(event.notification.data.url);
});
