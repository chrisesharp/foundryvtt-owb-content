function moveLeft() {
  const cable_car = game.actors.find(a => a.name == "Cable Car");
  let tokens = cable_car.getActiveTokens();
  if (tokens.length > 0) {
    token = tokens[0];
  }
  if (token && token.name == "Cable Car") {
    let x = token.x - 500;
    let hidden = true;
    if (x > -200 && x < 2400) {
      hidden = false;
    }
    if (x < -500) {
      x = 2500;
    }
    token.update({_id: token.id, x:x, hidden:hidden});
  }
}

function moveUp() {
  const stopA = {x:1450,y:2000};
  const stopB = {x:1600,y:1850};
  if (token && token.name == "Cable Car") {
    let x = token.x - 100;
    let y = token.y - 100;
    if (x <= stopA.x) {
      x = stopA.x;
      y = stopA.y;
    } else if (x <= stopB.x && y <= stopB.y) {
      x = stopB.x;
      y = stopB.y;
    }
    token.update({_id: token.id, x: x, y:y, hidden:false});
  }
}

function moveDown() {
  if (token && token.name == "Cable Car") {
    let x = token.x + 100;
    let y = token.y + 100;
    
    if (y > 2300) {
      token.update({_id: token.id, x: 1850, y:2400, hidden:true});
    } else {
      token.update({_id: token.id, x: x, y:y});
    }
  }
}