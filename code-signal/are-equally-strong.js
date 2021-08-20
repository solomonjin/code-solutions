function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
  var myStrongest = Math.max(yourLeft, yourRight);
  var myWeakest = Math.min(yourLeft, yourRight);
  var otherStrongest = Math.max(friendsLeft, friendsRight);
  var otherWeakest = Math.min(friendsLeft, friendsRight);
  return (myStrongest === otherStrongest && myWeakest === otherWeakest);
}
