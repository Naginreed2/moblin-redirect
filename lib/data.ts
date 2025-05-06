export type LinkType = {
  id: string;
  title: string;
  url: string;
  description?: string;
  icon?: string;
};

export const links: LinkType[] = [
  {
    id: "ios-app",
    title: "iOS App",
    url: "https://apps.apple.com/app/id6466745933",
    description: "Download Moblin from the App Store",
    icon: "Apple",
  },
  {
    id: "android-app",
    title: "Android App",
    url: "https://play.google.com/store/apps/details?id=com.eerimoq.moblink",
    description: "Get Moblink from Google Play",
    icon: "Smartphone",
  },
  {
    id: "discord",
    title: "Discord Community",
    url: "https://discord.gg/nt3UwHqbMM",
    description: "Join our Discord server",
    icon: "MessageCircle",
  },
  {
    id: "github",
    title: "GitHub",
    url: "https://github.com/eerimoq/moblin",
    description: "View the source code",
    icon: "Github",
  },
  {
    id: "assistant",
    title: "Assistant",
    url: "https://moblin.mys-lang.org/moblin-remote-control-relay/assistant.html",
    description: "Access the Moblin Assistant",
    icon: "HelpCircle",
  },
  {
    id: "remote",
    title: "Remote Control",
    url: "https://moblin.mys-lang.org/moblin-remote-control-relay/",
    description: "Remote Control Interface",
    icon: "Radio",
  },
  {
    id: "obs",
    title: "OBS Remote",
    url: "https://moblin.mys-lang.org/obs-remote-control-relay/",
    description: "OBS Remote Control Interface",
    icon: "Video",
  }
];