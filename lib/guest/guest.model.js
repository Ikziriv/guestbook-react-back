const Sequelize = require("sequelize");
// const multer = require("multer");

const sequelize = require("../../dbset/dbset");
const Guest = require("../../model/guest")(sequelize, Sequelize);

Guest.sync();
exports.searchGuest = (name) => {
  return new Promise((resolve, reject) => {
    Guest.findAll({ where: ["name like ?", "%" + name + "%"] }).then(
      (guest) => {
        resolve(guest);
      },
      (err) => {
        reject({ error: err });
      },
    );
  });
};
exports.createGuest = (guestData) => {
  return new Promise((resolve, reject) => {
    Guest.create(guestData).then(
      (guest) => {
        resolve(guest);
      },
      (err) => {
        reject({ error: err });
      },
    );
  });
};
exports.findGuestById = (id) => {
  return new Promise((resolve, reject) => {
    Guest.findByPk(id).then(
      (guest) => {
        if (guest == null) {
          reject({ status: 404, message: "Guest not found" });
        }
        resolve(guest);
      },
      (err) => {
        reject({ error: err });
      },
    );
  });
};
exports.updateGuestById = (guestData, id) => {
  return new Promise((resolve, reject) => {
    Guest.update(guestData, {
      where: {
        id: id,
      },
    }).then(
      (guest) => {
        Guest.findByPk(id).then(
          (guest) => {
            resolve(guest);
          },
          (err1) => {
            reject({ error: err1 });
          },
        );
      },
      (err) => {
        reject({ error: err });
      },
    );
  });
};
exports.deleteGuestById = (id) => {
  return new Promise((resolve, reject) => {
    Guest.destroy({
      where: {
        id: id,
      },
    }).then(
      () => {
        resolve({ message: "Delete Success" });
      },
      (err) => {
        reject({ error: err });
      },
    );
  });
};
exports.findAllGuest = () => {
  return new Promise((resolve, reject) => {
    Guest.findAll({
      attributes: ["id", "name", "email", "phone", "description"],
    }).then(
      (guest) => {
        resolve(guest);
      },
      (err) => {
        reject({ error: err });
      },
    );
  });
};
