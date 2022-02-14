const express = require("express");
const req = require("express/lib/request");
const router = express.Router();
const users = [
  { id: 0, name: "fares", age: 20 },
  { id: 1, name: "Emer", age: 23 },
  { id: 2, name: "amine", age: 23 },
  { id: 3, name: "mohamed", age: 27 },
];

//-------------get all users-------------
router.get("/api/users", (req, resp) =>
  resp.send({ msg: "response secc...", users: users })
);
//-------------get user by id-------------
router.get("/api/users/:id", (req, resp) => {
  const { id } = req.params;

  const findUser = users.find((user) => user.id == id);

  findUser
    ? resp.send({ msg: "response is secc...", findUser: findUser })
    : resp.send("the are no user with this id");
});
//-------------create user------------------
router.post("/api/users", (req, resp) => {
  const newUser = req.body;
  users.push(newUser);
  resp.send({ msg: "your add is secc...", users });
});
//------------ update user-------------------
router.put("/api/users/:id", (req, resp) => {
  const { id } = req.params;
  const update = req.body;
  const newUpdate = users.map((user) =>
    user.id == id ? { ...user, ...update } : user
  );
  resp.send({ msg: "your update is secc...", newUpdate });
});
//-------------delete user--------------------
router.delete("/api/users/:id", (req, resp) => {
  const { id } = req.params;
  const userDelet = users.filter((user) => user.id != id);
  resp.send({ msg: "delet is secc...", userDelet });
});
module.exports = router;
