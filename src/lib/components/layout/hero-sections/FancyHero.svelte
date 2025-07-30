<!--
    @component
    Super fancy hero section with advanced animations, gradient overlays, floating elements, and premium interactions.
    
    Usage:
    ```html
    <FancyHero
      title="Bold Claim"
      subtitle="Quick Value"
      imageSrc="/hero.jpg"
      callsToAction={[
        {
          href: "/start",
          label: "Go"
        },
        {
          href: "/learn",
          label: "More"
        }
      ]}
    />
    ```

    Props:
    - `title`: Main headline (string)
    - `subtitle`: Supporting text (string)
    - `imageSrc`: Hero image URL (string)
    - `callsToAction`: CTA buttons array (max two: primary, secondary)
    - `centered`: Center alignment (boolean)
-->

<script lang="ts">
	// Components
	import AnimateText from "$lib/components/animation/AnimateText.svelte";
	import Button from "$lib/components/ui/Button.svelte";

	// No icon imports needed - using decorative elements

	// Constants
	import { cta } from "$lib/navigation";

	function handleImageError(e: Event) {
		const target = e.currentTarget as HTMLImageElement;
		target.src = "https://placehold.co/800x600/f8fafc/64748b?text=Hero+image";
	}

	// Types
	type Props = {
		centered?: boolean;
		title: string;
		subtitle: string;
		imageSrc?: string;
		callsToAction?: Array<{
			href: string;
			label: string;
		}>;
	};

	let {
		title,
		subtitle,
		imageSrc,
		callsToAction = [cta],
		centered = false,
		...rest
	}: Props = $props();

	// State for animations
	let isVisible = $state(false);
	let mousePosition = $state({ x: 0, y: 0 });

	// Floating elements data
	const floatingElements = [
		{ shape: 'circle', delay: 0, x: 10, y: 20, size: 8 },
		{ shape: 'square', delay: 1000, x: 85, y: 15, size: 6 },
		{ shape: 'triangle', delay: 2000, x: 75, y: 75, size: 10 },
		{ shape: 'circle', delay: 1500, x: 15, y: 80, size: 4 },
		{ shape: 'square', delay: 500, x: 90, y: 50, size: 7 }
	];

	function handleMouseMove(e: MouseEvent) {
		const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
		mousePosition = {
			x: (e.clientX - rect.left) / rect.width,
			y: (e.clientY - rect.top) / rect.height
		};
	}

	// Initialize visibility on mount
	$effect(() => {
		const timer = setTimeout(() => {
			isVisible = true;
		}, 100);
		return () => clearTimeout(timer);
	});
</script>

<div 
	class="relative min-h-screen overflow-hidden bg-gradient-to-br from-background via-card to-muted"
	onmousemove={handleMouseMove}
	{...rest}
>
	<!-- Animated gradient background -->
	<div class="absolute inset-0 opacity-60">
		<div 
			class="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 animate-pulse"
			style="animation-duration: 8s;"
		></div>
		<div 
			class="absolute inset-0 bg-gradient-to-l from-secondary/10 via-primary/10 to-secondary/10 animate-pulse"
			style="animation-duration: 12s; animation-delay: -2s;"
		></div>
	</div>

	<!-- Floating elements -->
	{#each floatingElements as element, i}
		<div
			class={[
				"absolute pointer-events-none opacity-0 transition-all duration-1000 ease-out",
				isVisible ? "opacity-30 animate-bounce" : ""
			]}
			style="
				left: {element.x}%; 
				top: {element.y}%; 
				animation-delay: {element.delay}ms;
				animation-duration: {3000 + i * 500}ms;
				transform: translate(
					{(mousePosition.x - 0.5) * (10 + i * 5)}px,
					{(mousePosition.y - 0.5) * (10 + i * 5)}px
				);
			"
		>
			{#if element.shape === 'circle'}
				<div 
					class="rounded-full bg-primary/30" 
					style="width: {element.size}px; height: {element.size}px;"
				></div>
			{:else if element.shape === 'square'}
				<div 
					class="bg-secondary/30 rounded-sm" 
					style="width: {element.size}px; height: {element.size}px;"
				></div>
			{:else if element.shape === 'triangle'}
				<div 
					class="w-0 h-0 border-l-4 border-r-4 border-b-8 border-transparent border-b-primary/30"
					style="border-left-width: {element.size/2}px; border-right-width: {element.size/2}px; border-bottom-width: {element.size}px;"
				></div>
			{/if}
		</div>
	{/each}

	<!-- Main content -->
	<header
		class={[
			"relative z-10 section-px container mx-auto grid items-center min-h-screen gap-16 gap-y-9 py-12 text-balance",
			centered ? "place-items-center text-center" : "xl:grid-cols-[1fr_auto]"
		]}
		data-enter-container
	>
		<div class="grid gap-8" class:max-w-prose={centered}>
			<!-- Title with enhanced animations -->
			<div class="space-y-4">
				<h1 
					class={[
						"text-display w-full transition-all duration-1000 ease-out",
						isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
					]}
					data-enter
				>
					<span class="block relative">
						<AnimateText text={title} />
						<!-- Subtle glow effect -->
						<div class="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-xl -z-10 opacity-50"></div>
					</span>
					{#if !centered}
						<span 
							class={[
								"text-emphasis-dim block transition-all duration-1000 ease-out",
								isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
							]}
							style="transition-delay: 200ms;"
						>
							<AnimateText text={subtitle} />
						</span>
					{/if}
				</h1>

				{#if centered}
					<p
						class={[
							"text-muted-foreground text-headline mx-auto block max-w-[45ch] transition-all duration-1000 ease-out",
							isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
						]}
						style="transition-delay: 400ms;"
						data-enter
					>
						{subtitle}
					</p>
				{/if}
			</div>

			<!-- Enhanced CTA buttons -->
			{#if callsToAction.length > 0}
				<div 
					class={[
						"flex gap-4 transition-all duration-1000 ease-out",
						isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
					]}
					style="transition-delay: 600ms;"
					data-enter
				>
					{#each callsToAction as cta, index}
						<div class="group relative">
							<!-- Hover glow effect -->
							<div class="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-lg blur opacity-0 group-hover:opacity-20 transition duration-300"></div>
							
							<Button
								href={cta.href}
								size="lg"
								variant={index % 2 === 0 ? "primary" : "secondary"}
								class={[
									"relative max-lg:hidden transform transition-all duration-300 ease-out",
									"hover:scale-105 hover:-translate-y-1",
									"active:scale-95 active:translate-y-0"
								]}
							>
								{cta.label}
							</Button>
							
							<Button
								href={cta.href}
								size="md"
								variant={index % 2 === 0 ? "primary" : "secondary"}
								class={[
									"relative lg:hidden transform transition-all duration-300 ease-out",
									"hover:scale-105 hover:-translate-y-1",
									"active:scale-95 active:translate-y-0"
								]}
							>
								{cta.label}
							</Button>
						</div>
					{/each}
				</div>
			{/if}
		</div>

		<!-- Enhanced image section -->
		{#if imageSrc}
			<div 
				class={[
					"relative group transition-all duration-1000 ease-out",
					isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
				]}
				style="transition-delay: 800ms;"
			>
				<!-- Image container with enhanced effects -->
				<div class="relative overflow-hidden rounded-2xl">
					<!-- Gradient overlay -->
					<div class="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10"></div>
					
					<!-- Animated border -->
					<div class="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-2xl opacity-0 group-hover:opacity-30 transition-all duration-500 animate-pulse"></div>
					
					<img
						src={imageSrc}
						alt="Hero visual"
						class={[
							"relative w-full h-auto object-cover transition-all duration-700 ease-out",
							"group-hover:scale-105 group-hover:brightness-110"
						]}
						onerror={handleImageError}
					/>
					
					<!-- Floating particles on hover -->
					<div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
						{#each Array(6) as _, i}
							<div
								class="absolute w-2 h-2 bg-primary/60 rounded-full animate-ping"
								style="
									left: {20 + i * 15}%;
									top: {10 + i * 12}%;
									animation-delay: {i * 200}ms;
									animation-duration: {2000 + i * 300}ms;
								"
							></div>
						{/each}
					</div>
				</div>
			</div>
		{/if}
	</header>

	<!-- Bottom gradient fade -->
	<div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none"></div>
</div>

<style>
	@keyframes float {
		0%, 100% {
			transform: translateY(0px);
		}
		50% {
			transform: translateY(-10px);
		}
	}

	.animate-float {
		animation: float 3s ease-in-out infinite;
	}
</style>