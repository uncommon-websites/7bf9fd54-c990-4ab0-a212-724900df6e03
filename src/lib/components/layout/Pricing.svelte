<!--
@component Pricing

Please update features according to the company's product offering. Do not remove this comment.
-->
<script lang="ts">
	// Types
	type PricingTier = {
		name: string;
		monthlyPrice?: number | null;
		yearlyPrice?: number | null;
		description: string;
		features: string[];
		cta: {
			label: string;
			href: string;
		};
		highlight?: boolean;
	};

	type PricingFeature = {
		name: string;
		tiers: {
			[key: string]: boolean | string;
		};
	};

	// Components
	import Button from "$lib/components/ui/Button.svelte";
	import SectionHeader from "./SectionHeader.svelte";
	import IconCheck from "lucide-svelte/icons/check";
	import IconX from "lucide-svelte/icons/x";
	import NumberFlow from "@number-flow/svelte";
	import LogoScroller from "./LogoScroller.svelte";

	// Props
	const {
		title = "Transparent pricing for industrial innovation",
		subtitle = "Scale your workforce training and operations with AI-powered AR solutions",
		tierNames = ["Professional", "Enterprise", "Scale"],
		features = [
			{
				name: "Active operators",
				tiers: {
					Professional: "Up to 50",
					Enterprise: "Up to 500",
					Scale: "Unlimited"
				}
			},
			{
				name: "Procedures per month",
				tiers: {
					Professional: "100",
					Enterprise: "Unlimited",
					Scale: "Unlimited"
				}
			},
			{
				name: "Video-to-procedure AI",
				tiers: {
					Professional: true,
					Enterprise: true,
					Scale: true
				}
			},
			{
				name: "AR spatial navigation",
				tiers: {
					Professional: true,
					Enterprise: true,
					Scale: true
				}
			},
			{
				name: "Real-time insights & analytics",
				tiers: {
					Professional: "Basic",
					Enterprise: "Advanced",
					Scale: "Advanced + Custom"
				}
			},
			{
				name: "Multi-language translation",
				tiers: {
					Professional: "Major languages",
					Enterprise: "Major languages",
					Scale: "Custom languages"
				}
			},
			{
				name: "API access & integrations",
				tiers: {
					Professional: false,
					Enterprise: true,
					Scale: true
				}
			},
			{
				name: "SSO & enterprise login",
				tiers: {
					Professional: false,
					Enterprise: true,
					Scale: true
				}
			},
			{
				name: "Location-based reporting",
				tiers: {
					Professional: "Basic",
					Enterprise: "Advanced",
					Scale: "Advanced"
				}
			},
			{
				name: "Data export capabilities",
				tiers: {
					Professional: "Standard",
					Enterprise: "Comprehensive",
					Scale: "Comprehensive"
				}
			},
			{
				name: "Support response time",
				tiers: {
					Professional: "24 hours",
					Enterprise: "4 hours",
					Scale: "1 hour"
				}
			},
			{
				name: "Implementation support",
				tiers: {
					Professional: "Self-service",
					Enterprise: "Guided setup",
					Scale: "White-glove onboarding"
				}
			},
			{
				name: "Dedicated success manager",
				tiers: {
					Professional: false,
					Enterprise: false,
					Scale: true
				}
			},
			{
				name: "SOC 2 Type II compliance",
				tiers: {
					Professional: true,
					Enterprise: true,
					Scale: true
				}
			},
			{
				name: "SLA uptime guarantee",
				tiers: {
					Professional: "99.5%",
					Enterprise: "99.9%",
					Scale: "99.95%"
				}
			}
		],
		tiers = [
			{
				name: "Professional",
				monthlyPrice: 299,
				yearlyPrice: 249, // ~17% savings
				description: "Perfect for small teams getting started with AR procedures",
				features: [
					"Up to 50 active operators",
					"100 procedures per month",
					"Video-to-procedure AI conversion",
					"AR spatial navigation",
					"Basic analytics and insights",
					"Multi-language translation",
					"SOC 2 Type II compliance"
				],
				cta: {
					label: "Start free trial",
					href: "/signup?plan=professional"
				}
			},
			{
				name: "Enterprise",
				monthlyPrice: 999,
				yearlyPrice: 849, // 15% savings
				description: "For established operations ready to scale training and procedures",
				features: [
					"Up to 500 active operators",
					"Unlimited procedures",
					"Advanced analytics & reporting",
					"API access & integrations",
					"SSO & enterprise login methods",
					"Guided implementation support",
					"Priority support (4hr response)"
				],
				cta: {
					label: "Contact sales",
					href: "/contact"
				},
				highlight: true
			},
			{
				name: "Scale",
				monthlyPrice: null,
				yearlyPrice: null,
				description: "For large industrial operations with complex requirements",
				features: [
					"Unlimited operators",
					"Custom language translation",
					"Advanced + custom analytics",
					"White-glove onboarding",
					"Dedicated success manager",
					"1-hour priority support",
					"99.95% uptime SLA",
					"Custom integrations & workflows"
				],
				cta: {
					label: "Contact sales",
					href: "/contact"
				}
			}
		]
	}: {
		title?: string;
		subtitle?: string;
		tiers?: PricingTier[];
		features?: PricingFeature[];
		tierNames?: string[];
		caption?: string;
	} = $props();

	// State
	let annual = $state(true);
</script>

<section class="section-py section-px container mx-auto">
	<div class="flex flex-col items-baseline justify-between lg:flex-row">
		<SectionHeader {title} {subtitle} />

		<div class="mb-8 flex justify-center">
			<div class="inline-flex items-center rounded-full bg-gray-200 p-0.5 gap-0.5">
				<button
					class="rounded-full px-4 py-1.5 text-sm font-semibold transition-all duration-200 {!annual ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-900'}"
					onclick={() => (annual = false)}
				>
					Monthly
				</button>
				<button
					class="rounded-full px-4 py-1.5 text-sm font-semibold transition-all duration-200 {annual ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-900'}"
					onclick={() => (annual = true)}
				>
					Annual <span class="text-xs ml-1 text-gray-500">Save 20%</span>
				</button>
			</div>
		</div>
	</div>

	<div class="bb grid gap-6 md:grid-cols-2 lg:grid-cols-3">
		{#each tiers as tier}
			<div
				class="flex flex-col rounded-xl bg-white p-6 ring ring-gray-200 transition-all duration-300 dark:bg-gray-800 dark:ring-gray-700"
				class:ring-2={tier.highlight}
				class:ring-primary={tier.highlight}
				class:dark:ring-primary-700={tier.highlight}
				class:translate-y-[-4px]={tier.highlight}
			>
				<div class="mb-8">
					<h3 class="text-title3 mb-4 dark:text-white">{tier.name}</h3>
					<div class="mt-2 flex items-baseline">
						{#if tier.monthlyPrice === null && tier.yearlyPrice === null}
							<span class="text-title2 dark:text-white">Custom</span>
						{:else}
							<NumberFlow
								class="text-title2 [&::part\(suffix\)]:text-caption dark:text-white"
								format={{
									style: "currency",
									currency: "USD",
									trailingZeroDisplay: "stripIfInteger"
								}}
								value={annual ? tier.yearlyPrice : tier.monthlyPrice}
								suffix="/month"
							/>
						{/if}
					</div>
					<p class="text-callout text-emphasis-medium mt-3 dark:text-gray-300">
						{tier.description}
					</p>
				</div>

				<div class="mb-8 flex-grow">
					<ul class="space-y-3">
						{#each tier.features as feature}
							<li class="flex items-center gap-2">
								<IconCheck class="text-primary-600 dark:text-primary-400 size-5 flex-shrink-0" />
								<span class="text-body text-emphasis-medium dark:text-gray-300">{feature}</span>
							</li>
						{/each}
					</ul>
				</div>

				<div class="mt-auto">
					<Button
						href={tier.cta.href}
						variant={tier.highlight ? "primary" : "secondary"}
						class="w-full"
					>
						{tier.cta.label}
					</Button>
				</div>
			</div>
		{/each}
	</div>
	<div class="mt-32">
		<!-- Responsive table wrapper with horizontal scroll on mobile -->
		<!-- <div class=" hidden overflow-x-auto px-4 sm:mx-0 sm:block sm:px-0">
			<table
				class="w-full min-w-full border-separate border-spacing-0 border-gray-200 text-left dark:border-gray-700"
			>
				<thead>
					<tr>
						<th
							class="sticky left-0 min-w-[120px] border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900"
						>
							<span class="sr-only">Feature</span>
						</th>
						{#each tierNames as tierName}
							<th
								class="text-headline min-w-[100px] border-b border-gray-200 p-4 text-start font-normal dark:border-gray-700"
							>
								{tierName}
							</th>
						{/each}
					</tr>
				</thead>
				<tbody>
					{#each features as feature}
						<tr>
							<td class="text-caption">
								{feature.name}
							</td>
							{#each tierNames as tierName}
								<td
									class="min-w-[100px] border-b border-gray-200 p-4 text-start text-gray-600 dark:border-gray-700 dark:text-gray-300"
								>
									{#if typeof feature.tiers[tierName] === "boolean"}
										{#if feature.tiers[tierName]}
											<IconCheck
												class="text-primary-600 dark:text-primary-400 mx-auto size-5 sm:mx-0"
											/>
										{:else}
											<IconX class="mx-auto size-5 text-gray-400 sm:mx-0" />
										{/if}
									{:else}
										{feature.tiers[tierName]}
									{/if}
								</td>
							{/each}
						</tr>
					{/each}
				</tbody>
			</table>
		</div> -->

		<!-- Mobile feature comparison (alternative view for very small screens) -->
		<div>
			<!-- Universal pricing comparison for mobile -->
			<div class="overflow-x-auto">
				<table class="w-full border-collapse">
					<!-- Sticky header with tier names -->
					<thead class="border-border sticky top-0 z-10 border-b">
						<tr>
							<th class="min-w-[120px] py-3 text-left">
								<span class="sr-only">Feature</span>
							</th>
							{#each tierNames as tierName, i}
								<th class="text-caption min-w-[100px] py-3 text-left dark:text-white">
									{tierName}
								</th>
							{/each}
						</tr>
					</thead>
					<tbody class="divide-border divide-y">
						{#each features as feature}
							<tr>
								<td class="text-body py-3 pr-8 font-medium lg:pr-0 dark:text-white">
									{feature.name}
								</td>
								{#each tierNames as tierName, i}
									<td class="py-3">
										{#if typeof feature.tiers[tierName] === "boolean"}
											{#if feature.tiers[tierName]}
												<IconCheck class="text-primary-900 dark:text-primary-400 size-5" />
											{:else}
												<IconX class="size-5 text-gray-400" />
											{/if}
										{:else}
											<span class="text-callout font-medium text-gray-700 dark:text-gray-300">
												{feature.tiers[tierName]}
											</span>
										{/if}
									</td>
								{/each}
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
	</div>
	<LogoScroller />
</section>

<style lang="postcss">
	@reference '../../../app.css';

	:global(number-flow-svelte)::part(suffix) {
		@apply text-sm text-gray-400 dark:text-gray-500;
	}
</style>
