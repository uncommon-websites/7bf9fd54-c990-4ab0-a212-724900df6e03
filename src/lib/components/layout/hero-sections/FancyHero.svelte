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
		secondaryImages?: string[];
		callsToAction?: Array<{
			href: string;
			label: string;
		}>;
	};

	let {
		title,
		subtitle,
		imageSrc,
		secondaryImages = [],
		callsToAction = [cta],
		centered = false,
		...rest
	}: Props = $props();

	// State for animations
	let isVisible = $state(false);
	let mousePosition = $state({ x: 0, y: 0 });
	let currentImageIndex = $state(0);
	
	// All images for cycling
	let allImages = $derived([imageSrc, ...secondaryImages].filter(Boolean));

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

	// Premium image cycling effect
	$effect(() => {
		if (allImages.length <= 1) return;
		
		const interval = setInterval(() => {
			currentImageIndex = (currentImageIndex + 1) % allImages.length;
		}, 4000);
		
		return () => clearInterval(interval);
	});
</script>

<div 
	class="relative min-h-screen overflow-hidden bg-gradient-to-br from-background via-card to-muted"
	onmousemove={handleMouseMove}
	{...rest}
>
	<!-- Premium animated gradient background -->
	<div class="absolute inset-0 opacity-70">
		<div 
			class="absolute inset-0 bg-gradient-to-r from-primary/25 via-secondary/25 to-primary/25 animate-pulse"
			style="animation-duration: 6s;"
		></div>
		<div 
			class="absolute inset-0 bg-gradient-to-l from-secondary/15 via-primary/15 to-secondary/15 animate-pulse"
			style="animation-duration: 10s; animation-delay: -3s;"
		></div>
		<div 
			class="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 animate-pulse"
			style="animation-duration: 14s; animation-delay: -1s;"
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
			<!-- Premium title with luxury animations -->
			<div class="space-y-6">
				<h1 
					class={[
						"text-display w-full transition-all duration-1000 ease-out",
						isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
					]}
					data-enter
				>
					<span class="block relative">
						<AnimateText text={title} />
						<!-- Premium glow effect -->
						<div class="absolute inset-0 bg-gradient-to-r from-primary/30 via-secondary/20 to-primary/30 blur-2xl -z-10 opacity-60"></div>
					</span>
				</h1>

				{#if !centered}
					<p 
						class={[
							"text-headline text-muted-foreground max-w-[55ch] leading-relaxed transition-all duration-1000 ease-out",
							isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
						]}
						style="transition-delay: 300ms;"
					>
						{subtitle}
					</p>
				{:else}
					<p
						class={[
							"text-muted-foreground text-headline mx-auto block max-w-[50ch] leading-relaxed transition-all duration-1000 ease-out",
							isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
						]}
						style="transition-delay: 400ms;"
						data-enter
					>
						{subtitle}
					</p>
				{/if}
			</div>

			<!-- Premium CTA buttons -->
			{#if callsToAction.length > 0}
				<div 
					class={[
						"flex gap-6 transition-all duration-1000 ease-out",
						isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
					]}
					style="transition-delay: 600ms;"
					data-enter
				>
					{#each callsToAction as cta, index}
						<div class="group relative">
							<!-- Premium hover glow effect -->
							<div class="absolute -inset-2 bg-gradient-to-r from-primary via-secondary to-primary rounded-xl blur-lg opacity-0 group-hover:opacity-30 transition-all duration-500"></div>
							
							<Button
								href={cta.href}
								size="lg"
								variant={index % 2 === 0 ? "primary" : "secondary"}
								class={[
									"relative max-lg:hidden transform transition-all duration-500 ease-out",
									"hover:scale-110 hover:-translate-y-2",
									"active:scale-95 active:translate-y-0",
									"font-medium tracking-wide"
								]}
							>
								{cta.label}
							</Button>
							
							<Button
								href={cta.href}
								size="md"
								variant={index % 2 === 0 ? "primary" : "secondary"}
								class={[
									"relative lg:hidden transform transition-all duration-500 ease-out",
									"hover:scale-110 hover:-translate-y-2",
									"active:scale-95 active:translate-y-0",
									"font-medium tracking-wide"
								]}
							>
								{cta.label}
							</Button>
						</div>
					{/each}
				</div>
			{/if}
		</div>

		<!-- Premium multi-image section -->
		{#if allImages.length > 0}
			<div 
				class={[
					"relative group transition-all duration-1000 ease-out",
					isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
				]}
				style="transition-delay: 800ms;"
			>
				<!-- Main image container with luxury effects -->
				<div class="relative overflow-hidden rounded-3xl">
					<!-- Premium gradient overlays -->
					<div class="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10"></div>
					<div class="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 z-10"></div>
					
					<!-- Luxury animated border -->
					<div class="absolute -inset-2 bg-gradient-to-r from-primary via-secondary via-primary to-secondary rounded-3xl opacity-0 group-hover:opacity-40 transition-all duration-700 animate-pulse" style="animation-duration: 3s;"></div>
					
					<!-- Image cycling container -->
					<div class="relative aspect-video">
						{#each allImages as image, index}
							<img
								src={image}
								alt="Premium manufacturing visual {index + 1}"
								class={[
									"absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out",
									"group-hover:scale-105 group-hover:brightness-110",
									currentImageIndex === index ? "opacity-100" : "opacity-0"
								]}
								onerror={handleImageError}
							/>
						{/each}
					</div>
					
					<!-- Premium floating elements on hover -->
					<div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
						{#each Array(8) as _, i}
							<div
								class="absolute w-3 h-3 bg-gradient-to-r from-primary/60 to-secondary/60 rounded-full animate-ping"
								style="
									left: {15 + i * 12}%;
									top: {8 + i * 10}%;
									animation-delay: {i * 300}ms;
									animation-duration: {2500 + i * 400}ms;
								"
							></div>
						{/each}
					</div>
					
					<!-- Image indicators -->
					{#if allImages.length > 1}
						<div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
							{#each allImages as _, index}
								<button
									class={[
										"w-2 h-2 rounded-full transition-all duration-300",
										currentImageIndex === index 
											? "bg-primary scale-125" 
											: "bg-white/50 hover:bg-white/70"
									]}
									onclick={() => currentImageIndex = index}
									aria-label="View image {index + 1}"
								></button>
							{/each}
						</div>
					{/if}
				</div>
				
				<!-- Secondary images preview -->
				{#if secondaryImages.length > 0}
					<div class="flex gap-3 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
						{#each secondaryImages.slice(0, 3) as image, index}
							<button 
								class="relative w-20 h-12 rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300"
								onclick={() => currentImageIndex = index + 1}
								aria-label="Switch to preview image {index + 1}"
							>
								<img
									src={image}
									alt="Preview {index + 1}"
									class="w-full h-full object-cover"
								/>
								<div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
							</button>
						{/each}
					</div>
				{/if}
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