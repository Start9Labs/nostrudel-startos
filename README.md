<p align="center">
  <img src="https://raw.githubusercontent.com/hzrd149/nostrudel/next/screenshots/icon.svg" alt="Project Logo" width="21%">
</p>

# noStrudel for StartOS

[noStrudel](https://github.com/hzrd149/nostrudel) is a Nostr web client for exploring the Nostr network. This repository creates the `s9pk` package that is installed to run `noStrudel` on [StartOS](https://github.com/Start9Labs/start-os/).

## Dependencies

Prior to building the `nostrudel.s9pk` package, it's essential to configure your build environment for StartOS services. You can find instructions on how to set up the appropriate build environment in the [Packaging Guide](https://staging.docs.start9.com/packaging-guide/).

- [docker](https://docs.docker.com/get-docker)
- [docker-buildx](https://docs.docker.com/buildx/working-with-buildx/)
- [make](https://www.gnu.org/software/make/)
- [start-cli](https://github.com/Start9Labs/start-cli/)

## Cloning

Clone the noStrudel package repository locally.

```
git clone https://github.com/Start9Labs/nostrudel-startos.git
cd nostrudel-startos
```

## Building

To build the **noStrudel** service as a universal package, run the following command:

```
make
```

## Installing (on StartOS)

Before installation, define `host: https://server-name.local` in your `~/.startos/config.yaml` config file then run the following commands to determine successful install:

> :information_source: Change server-name.local to your Start9 server address

```
make install
```

**Tip:** You can also install the `nostrudel.s9pk` by using the **Sideload** tab available in the top menu of the StartOS UI.

## Verify Install

Go to your StartOS Services page, select **noStrudel**, configure and start the service.

**Done!**
