const cable_car = game.actors.find(a => a.name == "Cable Car");
let tokens = cable_car.getActiveTokens();
if (tokens.length > 0) {
  token = tokens[0];
}
if (token && token.name == "Cable Car") {
  let x = token.x - 100;
  let hidden = true;
  if (x > -200 && x < 2400) {
    hidden = false;
  }
  if (x < -200) {
    x = 2500;
  }
  token.update({_id: token.id, x: x, hidden:hidden});
}