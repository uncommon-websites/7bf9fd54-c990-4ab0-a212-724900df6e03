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

<div class="relative min-h-screen bg-gray-50 overflow-hidden" {...rest}>
	<!-- Subtle background pattern -->
	<div class="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100"></div>
	<div class="absolute inset-0 opacity-[0.02]" style="background-image: radial-gradient(circle at 1px 1px, rgba(0,0,0,0.15) 1px, transparent 0); background-size: 20px 20px;"></div>
	
	<div class="relative z-10">
		<header
			class={[
				"section-px container mx-auto grid items-center gap-16 py-12 pt-24 min-h-screen",
				centered ? "place-items-center text-center" : "lg:grid-cols-2 lg:gap-24"
			]}
			data-enter-container
		>
			<!-- Left side: Text content -->
			<div class="grid gap-6 text-gray-900" class:max-w-prose={centered}>
				<h1 class="text-display w-full font-bold" data-enter>
					<span class="block"><AnimateText text={title} /></span>
				</h1>

				<p
					data-enter
					class={[
						"text-headline block max-w-[45ch] text-gray-600 transition duration-500 ease-out"
					]}
				>
					{subtitle}
				</p>

				{#if callsToAction.length > 0}
					<div class="flex gap-4 mt-8" data-enter>
						{#each callsToAction as cta, index}
							<Button
								href={cta.href}
								size="lg"
								variant={index % 2 === 0 ? "primary" : "secondary"}
								class="max-lg:hidden">{cta.label}</Button
							>
							<Button
								href={cta.href}
								size="md"
								variant={index % 2 === 0 ? "primary" : "secondary"}
								class="lg:hidden">{cta.label}</Button
							>
						{/each}
					</div>
				{/if}
			</div>

			<!-- Right side: Visual element with card overlay -->
			{#if imageSrc && !centered}
				<div class="relative" data-enter>
					<!-- Main image background -->
					<div class="relative aspect-video rounded-lg overflow-hidden">
						<img
							src={imageSrc}
							alt="AR Platform Interface"
							class="size-full object-cover"
							onerror={handleImageError}
						/>
						
						<!-- Overlay card showing interface -->
						<div class="absolute top-4 right-4 bg-white rounded-lg p-4 max-w-xs">
							<div class="space-y-3">
								<h3 class="text-sm font-medium text-gray-900">Work Instructions</h3>
								<div class="space-y-2">
									<div class="flex items-center gap-2">
										<div class="w-2 h-2 bg-primary-500 rounded-full"></div>
										<span class="text-xs text-gray-600">Step 1: Safety check</span>
									</div>
									<div class="flex items-center gap-2">
										<div class="w-2 h-2 bg-gray-300 rounded-full"></div>
										<span class="text-xs text-gray-400">Step 2: Equipment setup</span>
									</div>
									<div class="flex items-center gap-2">
										<div class="w-2 h-2 bg-gray-300 rounded-full"></div>
										<span class="text-xs text-gray-400">Step 3: Quality check</span>
									</div>
								</div>
								<div class="pt-2 border-t border-gray-100">
									<div class="flex items-center justify-between">
										<span class="text-xs text-gray-500">Progress</span>
										<span class="text-xs font-medium text-primary-600">33%</span>
									</div>
									<div class="mt-1 bg-gray-200 rounded-full h-1">
										<div class="bg-primary-500 h-1 rounded-full w-1/3"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			{/if}
		</header>
	</div>
</div>
