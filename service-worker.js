self.addEventListener("install", function(e) {
  e.waitUntil(
    caches.open("Teacher Evaluation-cache").then(function(cache) {
      return cache.addAll(["index.html"]);
    })
  );
});
