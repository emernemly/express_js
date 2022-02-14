const check = (req, resp, next) => {
  const d = new Date();
  let day = d.getDay();
  let time = d.getHours();
  const admin = false;
  if (time >= 9 && time <= 16 && day >= 1 && day <= 6) {
    next();
  } else {
    resp.status(401).send("come back later");
  }
};
module.exports = check;
