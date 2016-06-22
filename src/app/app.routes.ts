import { provideRouter, RouterConfig } from '@angular/router';

import { AdminComponent } from './+admin';
import { AboutComponent } from './+about';
import { TermsComponent } from './+terms';
import { PrivacyComponent } from './+privacy';
import { HashchatBannerComponent } from './hashchat-banner/hashchat-banner.component';
import { InstagramFeedComponent } from './instagram-feed/instagram-feed.component';

export const routes: RouterConfig = [
  { path: '', component: InstagramFeedComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'about', component: AboutComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'privacy', component: PrivacyComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
]
