const GuestController = require("./guest.controller");

exports.guestRoutes = function (app) {
  app.get("/guest/search", [GuestController.search]);
  app.post("/guest", [GuestController.insert]);
  app.get("/guest/:guestId", [GuestController.findGuestById]);
  app.put("/guest/:guestId", [GuestController.updateGuestById]);
  app.delete("/guest/:guestId", [GuestController.deleteGuestById]);
  app.get("/guest", [GuestController.findAllGuest]);
};
