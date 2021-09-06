function variableName(name) {
  if (name[0].match(/[0-9]|\s/)) return false;
  if (name.match(/\W/)) return false;
  return true;
}
