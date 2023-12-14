var findOrder = function (numCourses, prerequisites) {
  const prereq = {};
  const visited = new Set();
  const cycle = new Set();

  for (let i = 0; i < numCourses; i++) {
    prereq[i] = [];
  }

  for (const pair of prerequisites) {
    const [pre, crs] = pair;
    prereq[pre].push(crs);
  }

  const result = [];

  const dfs = (crs) => {
    if (cycle.has(crs)) return false;
    if (visited.has(crs)) return true;

    cycle.add(crs);
    for (const pre of prereq[crs]) {
      if (!dfs(pre)) return false;
    }
    cycle.delete(crs);
    visited.add(crs);
    result.push(crs);
    return true;
  }

  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) return [];
  }
  return result;
};
