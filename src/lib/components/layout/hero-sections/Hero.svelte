<!--
    @component
    Bold hero banner with eye-catching text and strong call-to-action. NEVER use title case.

    Usage:
    ```html
    <Hero
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
-->

<script lang="ts">
	// Components
	import AnimateText from "$lib/components/animation/AnimateText.svelte";
	import Button from "$lib/components/ui/Button.svelte";

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
		}>; // A maximum of two calls to action, with the first one being primary and the second one being secondary
	};

	let {
		title,
		subtitle,
		imageSrc,
		callsToAction = [cta],
		centered = false,
		...rest
	}: Props = $props();
</script>

<div class="relative bg-black text-white overflow-hidden" {...rest}>
	<!-- Background Image with Overlay -->
	{#if imageSrc}
		<div class="absolute inset-0 z-0">
			<img
				src={imageSrc}
				alt="Background"
				class="size-full object-cover opacity-40"
				onerror={handleImageError}
			/>
			<div class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
		</div>
	{/if}

	<header
		class={[
			"relative z-10 section-px container mx-auto grid items-center gap-16 gap-y-12 py-24 pt-32 pb-32 text-balance min-h-[80vh]",
			centered ? "place-items-center text-center" : "xl:grid-cols-[1fr_auto]"
		]}
		data-enter-container
	>
		<div class="grid gap-8" class:max-w-4xl={centered}>
			<h1 class="text-white font-bold tracking-tight" data-enter>
				<span class="block text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.9] mb-4">
					<AnimateText text={title} />
				</span>
				{#if !centered}
					<span class="block text-xl md:text-2xl lg:text-3xl font-normal text-gray-200 leading-relaxed max-w-3xl">
						<AnimateText text={subtitle} />
					</span>
				{/if}
			</h1>

			{#if centered}
				<p
					data-enter
					class="text-gray-200 text-xl md:text-2xl lg:text-3xl font-normal leading-relaxed mx-auto block max-w-4xl transition duration-500 ease-out"
				>
					{subtitle}
				</p>
			{/if}
		</div>

		{#if callsToAction.length > 0}
			<div class="flex flex-col sm:flex-row gap-6" data-enter>
				{#each callsToAction as cta, index}
					<Button
						href={cta.href}
						size="lg"
						variant={index % 2 === 0 ? "default" : "secondary"}
						class={[
							"px-8 py-4 text-lg font-semibold transition-all duration-200 max-lg:hidden",
							index % 2 === 0 
								? "bg-[#FF5500] hover:bg-[#FF784D] text-white border-0" 
								: "bg-white hover:bg-gray-100 text-black border-2 border-white"
						]}
					>
						{cta.label}
					</Button>
					<Button
						href={cta.href}
						size="md"
						variant={index % 2 === 0 ? "default" : "secondary"}
						class={[
							"px-6 py-3 text-base font-semibold transition-all duration-200 lg:hidden",
							index % 2 === 0 
								? "bg-[#FF5500] hover:bg-[#FF784D] text-white border-0" 
								: "bg-white hover:bg-gray-100 text-black border-2 border-white"
						]}
					>
						{cta.label}
					</Button>
				{/each}
			</div>
		{/if}
	</header>
</div>
