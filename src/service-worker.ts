import { registerRoute } from 'workbox-routing';
import { NetworkFirst, StaleWhileRevalidate, CacheFirst } from 'workbox-strategies';
import * as googleAnalytics from 'workbox-google-analytics';
import { BackgroundSyncPlugin } from 'workbox-background-sync';

// @see https://developers.google.com/web/tools/workbox/guides/get-started
// Used for filtering matches based on status code, header, or both
import { CacheableResponsePlugin } from 'workbox-cacheable-response';
// Used to limit entries in cache, remove entries after a certain period of time
import { ExpirationPlugin } from 'workbox-expiration';

const bgSyncPlugin = new BackgroundSyncPlugin('defaultQueue', {
	maxRetentionTime: 24 * 60 // Retry for max of 24 Hours (specified in minutes)
});

registerRoute(
	/.*\/*.json/,
	new NetworkFirst({
		plugins: [bgSyncPlugin]
	}),
	'GET'
);

// Cache page navigations (html) with a Network First strategy
registerRoute(
	// Check to see if the request is a navigation to a new page
	({ request }) => request.mode === 'navigate',
	// Use a Network First caching strategy
	new NetworkFirst({
		// Put all cached files in a cache named 'pages'
		cacheName: 'pages',
		plugins: [
			// Ensure that only requests that result in a 200 status are cached
			new CacheableResponsePlugin({
				statuses: [200]
			})
		]
	})
);

// Cache CSS, JS, Fonts and Web Worker requests with a Stale While Revalidate strategy
registerRoute(
	// Check to see if the request's destination is style for stylesheets, script for JavaScript, or worker for web worker
	({ request }) =>
		request.destination === 'style' ||
		request.destination === 'script' ||
		request.destination === 'font' ||
		request.destination === 'manifest' ||
		request.destination === 'worker',
	// Use a Stale While Revalidate caching strategy
	new StaleWhileRevalidate({
		// Put all cached files in a cache named 'assets'
		cacheName: 'assets',
		plugins: [
			// Ensure that only requests that result in a 200 status are cached
			new CacheableResponsePlugin({
				statuses: [200]
			})
		]
	})
);

// Cache images with a Cache First strategy
registerRoute(
	// Check to see if the request's destination is style for an image
	({ request }) => request.destination === 'image',
	// Use a Cache First caching strategy
	new CacheFirst({
		// Put all cached files in a cache named 'images'
		cacheName: 'images',
		plugins: [
			// Ensure that only requests that result in a 200 status are cached
			new CacheableResponsePlugin({
				statuses: [200]
			}),
			// Don't cache more than 50 items, and expire them after 30 days
			new ExpirationPlugin({
				maxEntries: 50,
				maxAgeSeconds: 60 * 60 * 24 * 30 // 30 Days
			})
		]
	})
);

googleAnalytics.initialize();
