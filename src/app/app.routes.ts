import { provideRouter, RouterConfig } from '@angular/router';

import { AdminComponent } from './+admin';
import { HashchatBannerComponent } from './hashchat-banner/hashchat-banner.component';
import { InstagramFeedComponent } from './instagram-feed/instagram-feed.component';

export const routes: RouterConfig = [
  { path: '', component: InstagramFeedComponent },
  { path: 'admin', component: AdminComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
]
