<!--
    @component
    Dynamic impact showcase with animated counters and bold visuals
    Follows style guide: Bold, cinematic, orange accents (#FF5500)
-->

<script lang="ts">
	// Icons
	import IconTrendingUp from "~icons/lucide/trending-up";
	import IconClock from "~icons/lucide/clock";
	import IconShield from "~icons/lucide/shield";
	import IconTarget from "~icons/lucide/target";

	// Animation state
	let isVisible = $state(false);
	let counters = $state({
		training: 0,
		errors: 0,
		incidents: 0,
		efficiency: 0
	});

	// Target values
	const targets = {
		training: 67,
		errors: 94,
		incidents: 67,
		efficiency: 31
	};

	// Animate counters when visible
	$effect(() => {
		if (isVisible) {
			const duration = 2000; // 2 seconds
			const steps = 60;
			const stepDuration = duration / steps;

			Object.keys(targets).forEach((key) => {
				const target = targets[key as keyof typeof targets];
				let current = 0;
				const increment = target / steps;

				const timer = setInterval(() => {
					current += increment;
					if (current >= target) {
						counters[key as keyof typeof counters] = target;
						clearInterval(timer);
					} else {
						counters[key as keyof typeof counters] = Math.floor(current);
					}
				}, stepDuration);
			});
		}
	});

	// Intersection observer for animation trigger
	function handleIntersection(node: HTMLElement) {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting && !isVisible) {
						isVisible = true;
					}
				});
			},
			{ threshold: 0.3 }
		);

		observer.observe(node);

		return {
			destroy() {
				observer.disconnect();
			}
		};
	}

	// Stats data
	const stats = [
		{
			icon: IconClock,
			value: () => counters.training,
			suffix: "%",
			label: "Faster training",
			description: "Reduce onboarding time from weeks to days"
		},
		{
			icon: IconTarget,
			value: () => counters.errors,
			suffix: "%",
			label: "Fewer errors",
			description: "Eliminate costly mistakes with AR guidance"
		},
		{
			icon: IconShield,
			value: () => counters.incidents,
			suffix: "%",
			label: "Safer operations",
			description: "Prevent accidents with real-time safety alerts"
		},
		{
			icon: IconTrendingUp,
			value: () => counters.efficiency,
			suffix: "%",
			label: "Higher efficiency",
			description: "Boost productivity with optimized workflows"
		}
	];
</script>

<section class="bg-black text-white section-py overflow-hidden" use:handleIntersection>
	<div class="section-px container mx-auto">
		<!-- Header -->
		<div class="text-center mb-16">
			<h2 class="text-display text-white mb-6">
				The numbers don't lie
			</h2>
			<p class="text-headline text-gray-300 max-w-2xl mx-auto">
				Manufacturing leaders are seeing dramatic improvements across every metric that matters
			</p>
		</div>

		<!-- Stats Grid -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
			{#each stats as stat, index}
				<div 
					class={[
						"text-center p-6 rounded-lg border border-gray-800 bg-gray-900/50 backdrop-blur-sm",
						"transform transition-all duration-700 ease-out",
						isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
					]}
					style="transition-delay: {index * 150}ms"
				>
					<div class="mb-4 flex justify-center">
						<div class="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center">
							<svelte:component this={stat.icon} class="w-6 h-6 text-orange-500" />
						</div>
					</div>
					
					<div class="mb-2">
						<span class="text-display text-orange-500 font-bold">
							{stat.value()}{stat.suffix}
						</span>
					</div>
					
					<h3 class="text-title3 text-white mb-2 font-semibold">
						{stat.label}
					</h3>
					
					<p class="text-caption text-gray-400">
						{stat.description}
					</p>
				</div>
			{/each}
		</div>

		<!-- Visual Impact Section -->
		<div class="grid lg:grid-cols-2 gap-12 items-center">
			<div class="space-y-6">
				<div class="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full">
					<div class="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
					<span class="text-caption text-orange-500 font-medium">Real impact, real results</span>
				</div>
				
				<h3 class="text-title1 text-white">
					From chaos to clarity in <span class="text-orange-500">60 seconds</span>
				</h3>
				
				<p class="text-body text-gray-300">
					Watch tribal knowledge transform into actionable intelligence. Our AI doesn't just digitize—it optimizes, standardizes, and delivers exactly what your operators need, exactly when they need it.
				</p>
				
				<div class="flex flex-col sm:flex-row gap-4">
					<div class="flex items-center gap-3">
						<div class="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
							<span class="text-sm font-bold text-black">1</span>
						</div>
						<span class="text-caption text-gray-300">Upload your video or document</span>
					</div>
					<div class="flex items-center gap-3">
						<div class="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
							<span class="text-sm font-bold text-black">2</span>
						</div>
						<span class="text-caption text-gray-300">AI creates interactive AR instructions</span>
					</div>
					<div class="flex items-center gap-3">
						<div class="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
							<span class="text-sm font-bold text-black">3</span>
						</div>
						<span class="text-caption text-gray-300">Deploy to your entire team instantly</span>
					</div>
				</div>
			</div>
			
			<div class="relative">
				<div class="aspect-[4/3] rounded-lg overflow-hidden border border-gray-800">
					<img 
						src="/generated/image-a-group-of-industrial-workers-in-a-moder.webp" 
						alt="Industrial workers using AR technology"
						class="w-full h-full object-cover"
					/>
				</div>
				
				<!-- Floating stat cards -->
				<div class="absolute -top-4 -right-4 bg-orange-500 text-black px-4 py-2 rounded-lg font-bold text-sm">
					<div class="flex items-center gap-2">
						<IconTrendingUp class="w-4 h-4" />
						<span>+{counters.efficiency}% efficiency</span>
					</div>
				</div>
				
				<div class="absolute -bottom-4 -left-4 bg-white text-black px-4 py-2 rounded-lg font-bold text-sm">
					<div class="flex items-center gap-2">
						<IconShield class="w-4 h-4" />
						<span>-{counters.incidents}% incidents</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>