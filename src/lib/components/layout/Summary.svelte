<!--
@component
    Use this component to showcase the main #1 benefit of a product or service in a clear and concise manner with enhanced visual effects.

    Usage:
    ```html
    <Summary
      title="A clear value proposition"
      text="This component showcases your most important benefit with sophisticated animations and visual effects"
    />
    ```

    Props:
    - `title`: A summary hint about the benefit (sentence case)
    - `text`: Main benefit statement, concise and impactful
-->

<script lang="ts">
	// Utils
	import { scroll, animate, stagger } from "motion";
	import { onMount } from "svelte";

	// Props
	const {
		title,
		text,
		...rest
	}: {
		title?: string;
		text: string;
	} = $props();

	// State
	let segments = $derived(text.split("\n\n"));
	let containerElement: HTMLDivElement;
	let titleElement: HTMLParagraphElement;
	let backgroundElement: HTMLDivElement;

	onMount(() => {
		if (!containerElement) return;
		if (window.self !== window.top) return;

		// Get all word elements as an array
		const wordElements = Array.from(containerElement.querySelectorAll(".word"));
		const titleWords = titleElement ? Array.from(titleElement.querySelectorAll(".title-word")) : [];

		// Enhanced animation sequence with multiple layers
		const sequence = [
			// Background gradient animation
			[
				backgroundElement,
				{
					opacity: [0, 0.6, 0.8],
					scale: [0.8, 1.1, 1],
					rotate: [0, 2, 0]
				},
				{
					at: "0",
					duration: 2,
					ease: "easeOut"
				}
			],
			// Title animation with sophisticated effects
			...(titleWords.length > 0 ? [
				[
					titleWords,
					{
						opacity: [0, 0.7, 1],
						y: ["2em", "-0.2em", 0],
						scale: [0.8, 1.05, 1],
						filter: ["blur(8px)", "blur(2px)", "blur(0px)"],
						textShadow: ["0 0 0px rgba(255,255,255,0)", "0 0 20px rgba(255,255,255,0.3)", "0 0 0px rgba(255,255,255,0)"]
					},
					{
						at: "0.2",
						delay: stagger(0.08),
						duration: 1.2,
						ease: "easeOut"
					}
				]
			] : []),
			// Main text with cascading reveal
			[
				wordElements,
				{
					opacity: [0, 0, 0.3, 1],
					y: ["2em", "1em", "0.2em", 0],
					scale: [0.9, 0.95, 1.02, 1],
					filter: ["blur(16px)", "blur(8px)", "blur(2px)", "blur(0px)"],
					textShadow: ["0 0 0px rgba(255,255,255,0)", "0 0 30px rgba(255,255,255,0.2)", "0 0 15px rgba(255,255,255,0.1)", "0 0 0px rgba(255,255,255,0)"]
				},
				{
					at: title ? "0.8" : "0.4",
					delay: stagger(0.02, { from: "center" }),
					duration: 1.5,
					ease: "easeOut"
				}
			]
		];

		scroll(animate(sequence), {
			target: containerElement,
			offset: ["start 80%", "center 40%"]
		});
	});
</script>

<!-- Enhanced styling with gradient backgrounds and improved layout -->
<div
	class={[
		"section-py section-px relative container mx-auto flex flex-col items-start gap-12 text-pretty overflow-hidden",
		title ? "lg:grid lg:grid-cols-[1fr_2fr] xl:flex-row lg:gap-16" : ""
	]}
	bind:this={containerElement}
	{...rest}
>
	<!-- Animated background gradient -->
	<div 
		class="absolute inset-0 opacity-0 pointer-events-none"
		bind:this={backgroundElement}
		style="background: radial-gradient(ellipse 120% 80% at 50% 50%, rgba(99, 102, 241, 0.03) 0%, rgba(168, 85, 247, 0.02) 50%, transparent 100%)"
	></div>

	{#if title}
		<div class="relative z-10">
			<p 
				class="text-callout font-medium tracking-wide relative"
				style="color: var(--color-emphasis-dim)"
				bind:this={titleElement}
			>
				{#each title.split(" ").filter(Boolean) as word}
					<span class="title-word relative inline-block">{word}</span>{" "}
				{/each}
			</p>
			<!-- Decorative accent line -->
			<div class="mt-4 h-px w-16 bg-gradient-to-r from-current to-transparent opacity-40"></div>
		</div>
	{/if}

	<div class="text-title1 container-sm relative mx-auto z-10">
		{#each segments as paragraph, i}
			<p class="mb-8 last:mb-0 leading-relaxed" style="color: var(--color-emphasis-high)">
				{#each paragraph.split(" ").filter(Boolean) as word, wordIndex}
					<span 
						class="word relative inline-block transition-all duration-300 ease-out hover:scale-105 hover:text-shadow-lg"
						style="transition-delay: {wordIndex * 20}ms"
					>
						{word}
						<!-- Subtle highlight effect on hover -->
						<span class="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-sm -z-10"></span>
					</span>{" "}
				{/each}
			</p>
		{/each}
		
		<!-- Decorative elements -->
		<div class="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-2xl opacity-60 pointer-events-none"></div>
		<div class="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-tr from-purple-500/5 to-pink-500/5 rounded-full blur-xl opacity-40 pointer-events-none"></div>
	</div>
</div>

<style>
	.word {
		text-shadow: 0 0 0px rgba(255, 255, 255, 0);
		transition: text-shadow 0.3s ease;
	}
	
	.word:hover {
		text-shadow: 0 0 8px rgba(255, 255, 255, 0.1);
	}
	
	@media (prefers-reduced-motion: reduce) {
		.word {
			transition: none;
		}
	}
</style>
