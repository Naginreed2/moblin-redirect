export type LinkType = {
  id: string;
  title: string;
  url: string;
  description?: string;
  icon?: string;
};

export const links: LinkType[] = [
  {
    id: "moblin-ios-app",
    title: "App",
    url: "https://apps.apple.com/app/id6466745933",
    description: "Download from the App Store",
    icon: "Apple",
  },
  {
    id: "moblin-docs",
    title: "Docs",
    url: "https://moblin.top/en/docs/",
    description: "The official Documentation",
    icon: "BookOpenText",
  },
  {
    id: "discord",
    title: "Discord",
    url: "https://discord.gg/nt3UwHqbMM",
    description: "For Support and Discussion",
    icon: "MessageCircle",
  },
  {
    id: "moblink-android-app",
    title: "Moblink",
    url: "https://play.google.com/store/apps/details?id=com.eerimoq.moblink",
    description: "Connect your Android Devices",
    icon: "BookOpenText",
  },
  {
    id: "github",
    title: "GitHub",
    url: "https://github.com/eerimoq/moblin",
    description: "View the source code",
    icon: "github",
  },
  {
    id: "moblin-assistant",
    title: "Assistant",
    url: "https://moblin.mys-lang.org/moblin-remote-control-relay/assistant.html",
    description: "Check Moblin Status remotely",
    icon: "CircleUserRound",
  },
  {
    id: "moblin-remote-relay",
    title: "Remote Relay",
    url: "https://moblin.mys-lang.org/moblin-remote-control-relay/",
    description: "Relay for Moblin2Moblin Remote Control",
    icon: "SatelliteDish",
  },
  {
    id: "obs-remote-relay",
    title: "OBS Remote Relay",
    url: "https://moblin.mys-lang.org/obs-remote-control-relay/",
    description: "Relay for OBS2Moblin Remote Control",
    icon: "Video",
  }
];