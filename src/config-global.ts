type Config = {
  appName: string;
  router: {
    home: string;
    docs: string;
    github: string;
    dockerCompose: string;
  };
};

export const CONFIG: Config = {
  appName: "Heimlab",
  router: {
    home: "/",
    docs: "/docs",
    github: "https://github.com/ferez22",
    dockerCompose:
      "https://github.com/ferez22/heimlab/blob/main/docker-compose.yml",
  },
};
