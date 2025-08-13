// lib/data.ts

export type LinkType = {
  id: string;
  title: string;
  url: string;
  description?: string;
  icon?: string;
  // new: mark each entry as either stable or experimental
  type: 'apps' | 'help' | 'tools' | 'remote' | 'experimental';
};

export const links: LinkType[] = [
  {
    id: "moblin-ios-app",
    title: "App",
    url: "https://app.moblin.top",
    description: "Download from the App Store",
    icon: "Apple",
    type: "apps",
  },
  {
    id: "moblink-android-app",
    title: "Moblink",
    url: "https://moblink.moblin.top",
    description: "Connect your Android Devices",
    icon: "BookOpenText",
    type: "apps",
  },
  {
    id: "discord",
    title: "Discord",
    url: "https://dc.moblin.top",
    description: "For Support and Discussion",
    icon: "MessageCircle",
    type: "help",
  },
  {
    id: "github",
    title: "GitHub",
    url: "https://git.moblin.top",
    description: "View the source code",
    icon: "github",
    type: "help",
  },
  {
    id: "moblin-assistant",
    title: "Assistant",
    url: "https://assistant.moblin.top",
    description: "Control Moblin remotely | irlhosting.com",
    icon: "CircleUserRound",
    type: "remote",
  },
  {
    id: "moblin-remote-relay",
    title: "Remote Relay",
    url: "https://remote.moblin.top",
    description: "Relay for Moblin2Moblin Remote Control",
    icon: "SatelliteDish",
    type: "remote",
  },
  {
    id: "obs-remote-relay",
    title: "OBS Remote Relay",
    url: "https://obs.moblin.top",
    description: "Relay for OBS2Moblin Remote Control",
    icon: "Video",
    type: "remote",
  },
  {
    id: "moblin-cfg-vwr",
    title: "Moblin Config Viewer",
    url: "https://irlhosting.com/moblin/",
    description: "View all Settings in a nice way | irlhosting.com",
    icon: "Binoculars",
    type: "tools",
  }
];
