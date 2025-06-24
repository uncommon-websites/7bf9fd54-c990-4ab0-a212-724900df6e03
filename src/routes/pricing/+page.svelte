<script lang="ts">
	// Types
	import type { PageProps } from "./$types";

	// Components
	import Features from "$lib/components/layout/Features.svelte";
	import Testimonials from "$lib/components/layout/Testimonials.svelte";
	import CallToAction from "$lib/components/layout/CallToAction.svelte";
	import Pricing from "$lib/components/layout/Pricing.svelte";

	// Props
	const { data }: PageProps = $props();
</script>

<Pricing />

<Testimonials
	testimonials={[
		{
			name: "Carlos Rodriguez",
			position: "Director of Operations", 
			company: "Precision Manufacturing",
			quote:
				"Squint paid for itself in three months. We cut training time by 60% and reduced assembly errors by 40%. The ROI was immediate and obvious.",
			image:
				"/generated/image-a-professional-headshot-of-a-latino-man-.webp"
		},
		{
			name: "Keisha Washington",
			position: "Training Manager",
			company: "Atlantic Energy Solutions", 
			quote:
				"The setup was surprisingly simple—no special hardware needed. Our technicians were using AR procedures within hours, not weeks.",
			image:
				"/generated/image-a-professional-headshot-of-an-african-am.webp"
		},
		{
			name: "Amir Hassan",
			position: "Safety Director",
			company: "Gulf Coast Refining",
			quote:
				"Every dollar we invested in Squint came back ten-fold through reduced incidents, faster onboarding, and consistent procedures across all our sites.",
			image:
				"/generated/image-a-professional-headshot-of-a-middle-east.webp"
		}
	]}
/>

<CallToAction
	title="Start upgrading the floor today"
	subtitle="Turn how-tos into high performance"
	description="Try Squint and start reducing training time in minutes—not weeks. Don't just capture knowledge—put it to work right where it's needed."
	imageSrc="/generated/image-a-diverse-group-of-industrial-workers-ea.webp"
	callsToAction={[
		{
			href: "/get-started",
			label: "Get started",
			variant: "primary"
		},
		{
			href: "/contact",
			label: "Talk to sales",
			variant: "secondary"
		}
	]}
/>
