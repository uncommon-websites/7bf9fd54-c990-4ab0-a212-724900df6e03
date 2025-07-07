<script lang="ts">
	// Types

	// Components
	import SectionHeader from "$lib/components/layout/SectionHeader.svelte";
	import Culture from "$lib/components/layout/Culture.svelte";
	import Testimonials from "$lib/components/layout/Testimonials.svelte";
	import SecondaryHero from "$lib/components/layout/hero-sections/SecondaryHero.svelte";
	import Card from "$lib/components/ui/Card.svelte";
	import JobList, { type JobOpening } from "./JobList.svelte";

	// Icons
	import IconBriefcase from "lucide-svelte/icons/briefcase";
	import IconUsers from "lucide-svelte/icons/users";
	import IconHeart from "lucide-svelte/icons/heart";
	import IconGlobe from "lucide-svelte/icons/globe";

	// Constants
	const SECTION_BASE_CLASSES = "section-py section-px container mx-auto";
	const GRADIENT_BG_CLASSES =
		"bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800";
	const ICON_CONTAINER_CLASSES =
		"bg-primary-50 text-primary-600 dark:bg-primary-950 dark:text-primary-400 flex items-center justify-center rounded-full";

	const benefits = [
		{
			title: "Work that connects to the real world",
			description: "Your work impacts the people who build, operate, fix, and make real things every day. Help us make sure they have what they need—exactly when they need it.",
			icon: IconBriefcase
		},
		{
			title: "Grow on the edge of what's possible",
			description: "We're building genuinely new technology. Backed by Sequoia and named one of Fast Company's Most Innovative Companies of 2025, we've only just begun.",
			icon: IconUsers
		},
		{
			title: "Make an impact without the noise",
			description: "You'll work directly with other smart people, with the autonomy and support to ship meaningful work—fast.",
			icon: IconHeart
		}
	];

	const openings: JobOpening[] = [
		// Engineering
		{
			title: "Senior Software Engineer - Backend/Full Stack",
			department: "Engineering",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Staff Software Engineer - Backend/Full Stack",
			department: "Engineering",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "IT & Security Operations Manager",
			department: "Engineering",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},

		// Design
		{
			title: "Designer",
			department: "Design",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},

		// Product
		{
			title: "Director of Product",
			department: "Product Management",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},

		// Sales & Marketing
		{
			title: "Account Director",
			department: "Sales & Marketing",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Strategic Account Executive",
			department: "Sales & Marketing",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Go-To-Market Engineer",
			department: "Sales & Marketing",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},

		// Customer Success
		{
			title: "Implementation Leader",
			department: "Customer Success",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},

		// General & Administrative
		{
			title: "Executive Assistant",
			department: "General & Administrative",
			location: "Remote",
			type: "Full-time",
			url: "#"
		}
	];

	const employeeTestimonials = [
		{
			name: "Ayman Florentino",
			position: "Senior Software Engineer",
			company: "Engineering",
			quote:
				"I joined to work on real-world problems, and Squint delivers on that every day. We're building AI-based tools that make industrial jobs safer and faster, and nothing we do sits in a hypothetical. Last month alone, I helped ship a new feature that's already in use on manufacturing lines across three countries. The technical bar here is high, but the feedback loop with customers is even faster—which is incredibly motivating.",
			image:
				"/generated/image-a-hispanic-male-software-engineer-smilin.webp"
		},
		{
			name: "Saige Chang",
			position: "Product Design Lead",
			company: "Product and Design",
			quote:
				"What drew me in was a remote culture that actually feels human. Squint practices deep collaboration without constant meetings—instead, it's clear expectations, trust, and meaningful work. I've grown more here in a year than I did in three elsewhere. Being able to sketch, test, and scale a design directly with real operator workflows is something very few product teams get to do.",
			image:
				"/generated/image-an-asian-female-product-designer-in-casu.webp"
		},
		{
			name: "Julien Dorsey",
			position: "Customer Success Manager",
			company: "Sales and Customer Success",
			quote:
				"In my first eight weeks, I got to lead a proof-of-concept rollout for a global industrial customer—working directly with their ops, learning team, and floor technicians. That level of ownership is rare, and it's one of the reasons Squint moves faster than most startups I've seen. Add in a supportive team, badgeless logins, fast demos, and well-built tools… it all just clicks.",
			image:
				"/generated/image-a-black-male-customer-success-manager-dr.webp"
		}
	];

	const processSteps = [
		{
			step: 1,
			title: "Apply with your résumé",
			description:
				"Tell us who you are and why Squint excites you. We want to understand your background and interests."
		},
		{
			step: 2,
			title: "Intro call",
			description: "A short conversation to answer questions and dig into your experience. We'll explore how you might fit with our team."
		},
		{
			step: 3,
			title: "Challenge",
			description: "A working session or exercise focused on real-world tasks. This helps us see how you approach problems."
		},
		{
			step: 4,
			title: "Final chat",
			description: "Meet the extended team, go over your work, and decide next steps. We move thoughtfully and respect your time."
		}
	];

	const values = [
		{
			icon: IconHeart,
			title: "Purpose over process",
			description: "We care about outcomes, not red tape. Thoughtful work wins over checklists."
		},
		{
			icon: IconUsers,
			title: "Remote, not distant",
			description: "We work where we are, but come together often—with honesty, intentionality, and care."
		},
		{
			icon: IconGlobe,
			title: "High bar, low ego",
			description: "We take the work seriously, not ourselves. We debate fast, align quickly, and learn from each other."
		}
	];
</script>

<!-- Hero Section -->

<SecondaryHero
	title="Build the future of industrial work"
	subtitle="Join the team named one of Fast Company's most innovative companies of 2025. We're remote by design, with a strong culture built on trust, growth, and real connection."
	imageSrc="/generated/image-a-group-of-diverse-professionals-working.webp"
/>

<!-- Why Join Us Section -->
<section class={SECTION_BASE_CLASSES}>
	<SectionHeader title="Why join Squint" subtitle="Work remotely, stay connected. We're a remote-first team that values real connection." />

	<div class="mt-16 grid gap-4 md:grid-cols-3">
		{#each benefits as benefit}
			<Card {...benefit} />
		{/each}
	</div>
</section>

<!-- Culture Section -->
<Culture {values} />

<Testimonials testimonials={employeeTestimonials} />

<!-- Application Process -->
<section class={SECTION_BASE_CLASSES}>
	<div class="mx-auto">
		<h2 class="text-title1 mb-16">Application process</h2>

		<div class="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
			{#each processSteps as { step, title, description }, i}
				<div class="flex flex-col">
					<div class="{ICON_CONTAINER_CLASSES} mb-6 size-11">
						<span class="text-headline">{step}</span>
					</div>
					<h3 class="text-headline mb-3">{title}</h3>
					<p class="text-body text-emphasis-low">{description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
<!-- Current Openings Section -->
<section class={GRADIENT_BG_CLASSES}>
	<div class="section-px section-py container mx-auto grid w-full items-start lg:grid-cols-2">
		<SectionHeader title="Current openings" subtitle="Find your perfect role" />

		<JobList {openings} />
	</div>
</section>
