// lib/data.ts

export type LinkType = {
  id: string;
  title: string;
  url: string;
  description?: string;
  icon?: string;
  // new: mark each entry as either stable or experimental
  type: 'stable' | 'experimental';
};

export const links: LinkType[] = [
  {
    id: "moblin-ios-app",
    title: "App",
    url: "https://app.moblin.top",
    description: "Download from the App Store",
    icon: "Apple",
    type: "stable",
  },
  {
    id: "discord",
    title: "Discord",
    url: "https://dc.moblin.top",
    description: "For Support and Discussion",
    icon: "MessageCircle",
    type: "stable",
  },
  {
    id: "moblink-android-app",
    title: "Moblink",
    url: "https://moblink.moblin.top",
    description: "Connect your Android Devices",
    icon: "BookOpenText",
    type: "stable",
  },
  {
    id: "github",
    title: "GitHub",
    url: "https://git.moblin.top",
    description: "View the source code",
    icon: "github",
    type: "stable",
  },
  {
    id: "moblin-assistant",
    title: "Assistant",
    url: "https://assistant.moblin.top",
    description: "Check Moblin Status remotely",
    icon: "CircleUserRound",
    type: "stable",
  },
  {
    id: "moblin-remote-relay",
    title: "Remote Relay",
    url: "https://remote.moblin.top",
    description: "Relay for Moblin2Moblin Remote Control",
    icon: "SatelliteDish",
    type: "stable",
  },
  {
    id: "obs-remote-relay",
    title: "OBS Remote Relay",
    url: "https://obs.moblin.top",
    description: "Relay for OBS2Moblin Remote Control",
    icon: "Video",
    type: "stable",
  },
  {
    id: "moblin-analyzer-cfg",
    title: "Moblin Analyzer - Config",
    url: "https://cfg.moblin.top",
    description: "a simple Config Analyzer",
    icon: "Binoculars",
    type: "experimental",
  }
];
