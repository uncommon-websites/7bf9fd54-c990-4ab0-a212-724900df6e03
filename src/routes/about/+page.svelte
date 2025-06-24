<script lang="ts">
	// Components
	import CallToAction from "$lib/components/layout/CallToAction.svelte";

	// Icons
	import StakeholderGrid from "$lib/components/layout/StakeholderGrid.svelte";
	import Story from "./Story.svelte";
	import SecondaryHero from "$lib/components/layout/hero-sections/SecondaryHero.svelte";
	import Culture from "$lib/components/layout/Culture.svelte";

	// Constants
	const values = [
		{
			title: "Human first",
			description: "We build technology that empowers people, not replaces them—creating tools that make complex work intuitive and accessible."
		},
		{
			title: "Connect remotely",
			description: "Distance doesn't diminish collaboration—we prove that remote teams can build meaningful relationships and extraordinary products together."
		},
		{
			title: "Knowledge forever",
			description: "Every expert's wisdom should outlast their tenure—we ensure institutional knowledge becomes a lasting competitive advantage."
		}
	];
</script>

<SecondaryHero
	title="Standard work, made simple"
	subtitle="Instantly turn messy knowledge into step-by-step guidance your team can follow"
	imageSrc="/mockups/airport-screen-1750768550922.png"
/>

<!-- Story Section -->
<Story
	paragraphs={[
		"Founder Devin Bhushan saw a problem that every industrial company faces: skilled workers carry years of expertise in their heads, but when they retire or move on, that knowledge walks out the door. Traditional training methods couldn't keep up with the pace of operations or the complexity of modern manufacturing.",
		"Squint was born from the idea that knowledge should work as hard as the people who built it. Instead of forcing companies to rewrite every procedure from scratch, we built AI that transforms existing videos, PDFs, and spreadsheets into interactive, step-by-step work instructions delivered through augmented reality.",
		"Today, companies like Siemens and Pall Corporation use Squint to cut training time, standardize operations across sites, and give their frontline workers instant access to the expertise they need—right where they need it. We're not just digitizing procedures; we're making sure the knowledge that powers industry never gets lost."
	]}
/>

<!-- Our Culture Section -->
<Culture {values} />

<!-- StakeholderGrid Section -->
<StakeholderGrid
	stakeholderType="team"
	title="Our team."
	subtitle="Your partners in innovation."
	stakeholders={[
		{
			name: "Devin Bhushan",
			position: "CEO & Founder",
			bio: "Founded Squint to transform how industrial knowledge gets captured and shared across organizations.",
			image: "/generated/image-a-professional-headshot-of-a-business-fo.webp"
		}
	]}
/>

<StakeholderGrid
	stakeholderType="investor"
	title="Backed by the best."
	subtitle="Supported by leading investors"
	stakeholders={[
		{
			name: "Sequoia Capital",
			image: "https://cdn.brandfetch.io/sequoiacap.com/w/400/h/400/logo"
		}
	]}
/>

<!-- CTA Section -->
<CallToAction
	title="Turn tribal knowledge into standard work"
	subtitle="See Squint in action"
	description="Watch how industrial leaders like Siemens and Pall Corporation transform their existing videos and documents into step-by-step AR procedures that reduce training time and standardize operations across every site."
/>
