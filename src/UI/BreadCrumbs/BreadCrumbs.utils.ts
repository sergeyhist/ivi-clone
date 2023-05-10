export const getRoutes = (path: string): string[] => {
  const catalogs = path.split("/");
  const routes: string[] = [];
  let prevPath = "";

  catalogs.forEach((path) => {
    prevPath += path + "/";
    if (prevPath.match(/\[id\]/)) return;
    if (prevPath.match(/person/)) return;
    routes.push(prevPath);
  });

  return routes;
};

export const getPrevRoute = (path: string): string => {
  const catalogs = path.split("/");
  catalogs.pop();
  catalogs.push("");
  return catalogs.join("/");
};
