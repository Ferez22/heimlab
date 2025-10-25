const SetupCloudflare = () => {
  return (
    <div className="text-xl">
      Please check the{" "}
      <a
        href="https://docs.ferez.cloud/tunneling"
        className="text-3xl underline"
      >
        Tunneling Documentation
      </a>{" "}
      page to setup your tunnels.
      <br />
      Each of your docker service can be connected to a subdomain and accessible
      on Internet, securely!
    </div>
  );
};

export default SetupCloudflare;
