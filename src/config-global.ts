type Config = {
  appName: string;
  router: {
    home: string;
    docs: string;
    github: string;
  };
};

export const CONFIG: Config = {
  appName: "Heimlab",
  router: {
    home: "/",
    docs: "/docs",
    github: "https://github.com/ferez22",
  },
};
