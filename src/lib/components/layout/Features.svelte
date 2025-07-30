<script lang="ts">
	import Card from "../ui/Card.svelte";
	import { onMount } from "svelte";

	// Types
	import type { ComponentType } from "svelte";
	
	type Feature = {
		title: string;
		description: string;
		icon?: ComponentType;
		iconClass?: string;
		imageSrc?: string;
		imageAspect?: "16/9" | "9/16";
		link?: {
			href: string;
			label: string;
		};
	};

	// Components
	import SectionHeader from "./SectionHeader.svelte";

	// Props
	const {
		title,
		subtitle,
		features = [],
		...rest
	}: { title: string; subtitle: string; features: Feature[] } = $props();

	let featureCountClass = $derived(
		features.length <= 6 ? `feature-count-${features.length}` : "feature-count-many"
	);

	// Animation state
	let sectionRef: HTMLElement;
	let isVisible = $state(false);
	let animatedCards = $state<boolean[]>(new Array(features.length).fill(false));

	// Intersection Observer for scroll-triggered animations
	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						isVisible = true;
						// Stagger card animations
						features.forEach((_, index) => {
							setTimeout(() => {
								animatedCards[index] = true;
							}, index * 150); // 150ms delay between each card
						});
						observer.unobserve(entry.target);
					}
				});
			},
			{
				threshold: 0.1,
				rootMargin: "0px 0px -100px 0px"
			}
		);

		if (sectionRef) {
			observer.observe(sectionRef);
		}

		return () => {
			if (sectionRef) {
				observer.unobserve(sectionRef);
			}
		};
	});
</script>

<section class="[--gap:--spacing(2)] animated-features" bind:this={sectionRef} {...rest}>
	<div class="section-px section-py container mx-auto grid">
		<div class="header-container" class:animate-in={isVisible}>
			<SectionHeader {title} {subtitle} />
		</div>

		<div class="bento-grid {featureCountClass}" class:grid-visible={isVisible}>
			{#each features as feature, index}
				<div 
					class="card-wrapper"
					class:animate-card={animatedCards[index]}
					style="--animation-delay: {index * 150}ms"
				>
					<Card {...feature} />
				</div>
			{/each}
		</div>
	</div>
</section>

<!--
@component
A feature grid section that displays a list of features with titles and descriptions.
Never use title case, always sentence case.

Make the feature descriptions one short sentence that clearly articulates the feature.

Usage:
```html
<script>
  import IconStar from '~icons/lucide/star';
</script>

<FeatureSection
  title="Section Title"
  subtitle="Section Subtitle"
  features={[
    {
      title: "Feature Title",
      description: "Feature description text",
      icon: IconStar, // optional - Lucide icon component
      imageSrc: "https://example.com/image.jpg", // optional - image URL (use either icon OR imageSrc)
      link: { href: "/optional-link", label: "Learn more" } // optional
    }
    // more features...
  ]}
/>
```
-->

<style>
	/* Animation container */
	.animated-features {
		position: relative;
		overflow: hidden;
	}

	/* Header animations */
	.header-container {
		opacity: 0;
		transform: translateY(30px);
		transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.header-container.animate-in {
		opacity: 1;
		transform: translateY(0);
	}

	/* Base styles for the bento grid */
	.bento-grid {
		display: grid;
		gap: var(--gap);
		border-radius: var(--radius);
		perspective: 1000px;
	}

	/* Card wrapper for animations */
	.card-wrapper {
		opacity: 0;
		transform: translateY(60px) rotateX(15deg);
		transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
		transition-delay: var(--animation-delay);
	}

	.card-wrapper.animate-card {
		opacity: 1;
		transform: translateY(0) rotateX(0deg);
	}

	/* Enhanced hover effects for cards */
	.card-wrapper:hover {
		transform: translateY(-8px) scale(1.02);
		transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
	}

	/* Glow effect on hover */
	.card-wrapper:hover :global(article) {
		border-color: var(--primary);
		background: linear-gradient(135deg, var(--card) 0%, var(--sidebar-primary-foreground) 100%);
		transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
	}

	/* Staggered hover delay for grid items */
	.card-wrapper:nth-child(1) { transition-delay: 0ms; }
	.card-wrapper:nth-child(2) { transition-delay: 50ms; }
	.card-wrapper:nth-child(3) { transition-delay: 100ms; }
	.card-wrapper:nth-child(4) { transition-delay: 150ms; }
	.card-wrapper:nth-child(5) { transition-delay: 200ms; }
	.card-wrapper:nth-child(6) { transition-delay: 250ms; }

	/* Progressive reveal animation */
	.bento-grid.grid-visible .card-wrapper {
		animation: revealCard 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
		animation-delay: var(--animation-delay);
	}

	@keyframes revealCard {
		0% {
			opacity: 0;
			transform: translateY(60px) rotateX(15deg) scale(0.9);
		}
		50% {
			opacity: 0.5;
			transform: translateY(20px) rotateX(5deg) scale(0.95);
		}
		100% {
			opacity: 1;
			transform: translateY(0) rotateX(0deg) scale(1);
		}
	}

	/* Micro-interactions for content */
	.card-wrapper :global(h3) {
		transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.card-wrapper:hover :global(h3) {
		transform: translateX(4px);
		color: var(--primary);
	}

	.card-wrapper :global(p) {
		transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.card-wrapper:hover :global(p) {
		opacity: 0.8;
		transform: translateX(2px);
	}

	/* Icon animations */
	.card-wrapper :global(svg) {
		transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.card-wrapper:hover :global(svg) {
		transform: scale(1.1) rotate(5deg);
		color: var(--primary);
	}

	/* Accessibility - Respect reduced motion preference */
	@media (prefers-reduced-motion: reduce) {
		.card-wrapper,
		.header-container,
		.card-wrapper :global(*) {
			animation: none !important;
			transition: none !important;
			transform: none !important;
		}
		
		.card-wrapper {
			opacity: 1;
		}
		
		.header-container {
			opacity: 1;
		}
	}

	/* Mobile layout - stack all cards */
	.bento-grid :global(article) {
		grid-area: auto;
	}

	/* Media query for medium screens and up */
	@media (min-width: 768px) {
		/* 1 Feature */
		.feature-count-1 {
			grid-template-columns: 1fr;
		}
		.feature-count-1 :global(article:nth-child(1)) {
			grid-column: 1 / -1;
		}

		/* 2 Features */
		.feature-count-2 {
			grid-template-columns: 1fr 1fr;
		}

		/* 3 Features */
		.feature-count-3 {
			grid-template-columns: 1fr 1fr;
			grid-template-rows: auto auto;
			grid-template-areas:
				"a b"
				"a c";
		}
		.feature-count-3 :global(article:nth-child(1)) {
			grid-area: a;
		}
		.feature-count-3 :global(article:nth-child(2)) {
			grid-area: b;
		}
		.feature-count-3 :global(article:nth-child(3)) {
			grid-area: c;
		}

		/* 4 Features */
		.feature-count-4 {
			grid-template-columns: 2fr 1fr 1fr;
			grid-template-rows: auto auto;
			grid-template-areas:
				"a c d"
				"b c d";
		}
		.feature-count-4 :global(article:nth-child(1)) {
			grid-area: a;
		}
		.feature-count-4 :global(article:nth-child(2)) {
			grid-area: b;
		}
		.feature-count-4 :global(article:nth-child(3)) {
			grid-area: c;
		}
		.feature-count-4 :global(article:nth-child(4)) {
			grid-area: d;
		}

		/* 5 Features */
		.feature-count-5 {
			grid-template-columns: 1fr 1fr 1fr;
			grid-template-rows: auto auto auto;
			grid-template-areas:
				"a b c"
				"d e c";
		}
		.feature-count-5 :global(article:nth-child(1)) {
			grid-area: a;
		}
		.feature-count-5 :global(article:nth-child(2)) {
			grid-area: b;
		}
		.feature-count-5 :global(article:nth-child(3)) {
			grid-area: c;
		}
		.feature-count-5 :global(article:nth-child(4)) {
			grid-area: d;
		}
		.feature-count-5 :global(article:nth-child(5)) {
			grid-area: e;
		}

		/* 6 Features */
		.feature-count-6 {
			grid-template-columns: 1fr 1fr 1fr;
		}

		/* More than 6 features */
		.feature-count-many {
			grid-template-columns: 1fr 1fr 1fr;
		}
	}

	/* For larger screens, refine the grid */
	@media (min-width: 1024px) {
		.feature-count-many {
			grid-template-columns: repeat(3, 1fr);
		}
	}
</style>
