const GuestModel = require("./guest.model");

exports.search = (req, res) => {
  GuestModel.searchGuest(req.body.name).then(
    (result) => {
      res.status(201).send(result);
    },
    (err) => {
      res.status(406).send(err);
    },
  );
};
exports.insert = (req, res) => {
  GuestModel.createGuest(req.body).then(
    (result) => {
      res.status(201).send(result);
    },
    (err) => {
      res.status(406).send(err);
    },
  );
};
exports.findGuestById = (req, res) => {
  GuestModel.findGuestById(req.params.guestId).then(
    (result) => {
      res.status(200).send(result);
    },
    (err) => {
      res.status(err.status).send(err.message);
    },
  );
};
exports.updateGuestById = (req, res) => {
  if (req.file != undefined) {
    let id = req.params.guestId;
    GuestModel.findGuestById(id).then(
      (result) => {
        GuestModel.updateGuestById(req.body, id).then(
          (r) => {
            res.status(200).send(r);
          },
          (err1) => {
            res.status(406).send(err1);
          },
        );
      },
      (err) => {
        res.status(406).send(err);
      },
    );
  } else {
    GuestModel.updateGuestById(req.body, req.params.guestId).then(
      (result) => {
        res.status(200).send(result);
      },
      (err) => {
        res.status(406).send(err);
      },
    );
  }
};
exports.deleteGuestById = (req, res) => {
  let id = req.params.guestId;
  GuestModel.findGuestById(id).then(
    (result) => {
      GuestModel.deleteGuestById(id).then(
        (r) => {
          res.status(200).send(r);
        },
        (err1) => {
          res.status(406).send(err1);
        },
      );
    },
    (err) => {
      res.status(406).send(err);
    },
  );
};
exports.findAllGuest = (req, res) => {
  GuestModel.findAllGuest().then(
    (result) => {
      res.status(200).send(result);
    },
    (err) => {
      res.status(406).send(err);
    },
  );
};
