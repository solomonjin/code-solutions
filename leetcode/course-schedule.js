var canFinish = function (numCourses, prerequisites) {
  const prereqs = {};
  const visited = new Set();

  // Prepopulate prereqs map with empty arrays for every course necessary
  for (let i = 0; i < numCourses; i++) {
    prereqs[i] = [];
  }
  // Go through the given prereq list and add the data to prereqs map
  for (const pair of prerequisites) {
    const [crs, pre] = pair;
    prereqs[crs].push(pre);
  }

  const dfs = (crs) => {
    if (visited.has(crs)) return false;                 // Base Cases: If we already visited this course (found loop) return false
    if (prereqs[crs].length === 0) return true;         // Or if the current course does not have any prereqs (end of chain) return true;
    visited.add(crs);                                   // Otherwise, add current course to current visited set
    for (const pre of prereqs[crs]) {                   // And for all of its prereqs, check to see if each of those courses
      if (!dfs(pre)) return false;                    // either ends in a loop
      prereqs[crs].shift();                           // or can reach the end of chain in which case we can safely remove the crs from the list of prereqs
    }
    visited.delete(crs);                                // Once we confirm all prereqs of a given course can be successfully completed, remove it from visited set
    return true;
  }

  for (let crs = 0; crs < numCourses; crs++) {
    if (!dfs(crs)) return false;
  }
  return true;
};
