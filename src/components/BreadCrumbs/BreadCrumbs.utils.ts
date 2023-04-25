export const getRoutes = (path: string) => {
  const catalogs = path.split("/");
  const routes: string[] = [];
  let prevPath = "";

  catalogs.forEach((path) => {
    prevPath += path + "/";
    routes.push(prevPath);
  });

  routes.pop();

  return routes;
};
