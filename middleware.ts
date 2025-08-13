import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  const subdomain = hostname.split('.')[0];

  const redirects: Record<string, string> = {
    app: 'https://apps.apple.com/app/id6466745933',
    cfg: 'https://irlhosting.com/moblin/',
    discord: 'https://discord.gg/kh3KMng4JV',
    dc: 'https://discord.gg/kh3KMng4JV',
    docs: 'https://docs.moblin.top/en',
    github: 'https://github.com/eerimoq/moblin',
    git: 'https://github.com/eerimoq/moblin',
    moblink: 'https://play.google.com/store/apps/details?id=com.eerimoq.moblink',
    assistant: 'https://moblinremote.com/',
    remote: 'https://moblin.mys-lang.org/moblin-remote-control-relay/',
    obs: 'https://moblin.mys-lang.org/obs-remote-control-relay/',
  };

  const redirectUrl = redirects[subdomain];
  if (redirectUrl) {
    return NextResponse.redirect(redirectUrl, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
