import { defineOperationApp } from '@directus/extensions-sdk';

export default defineOperationApp({
	id: 'gh-webhook-handler',
	name: 'GitHub webhook handler',
	icon: 'webhook',
	description: 'Handle GitHub "sponsorship" webhook. Add credits for one-time sponsorship. Manage sponsors for recurring sponsorship',
	overview: () => [],
	options: [],
});
