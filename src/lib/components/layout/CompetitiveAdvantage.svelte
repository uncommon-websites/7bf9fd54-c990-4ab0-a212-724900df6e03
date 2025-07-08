<!--
    @component
    Competitive advantage section highlighting why Squint is better than alternatives.
    
    Usage:
    ```html
    <CompetitiveAdvantage />
    ```
-->

<script lang="ts">
	// Icons
	import IconZap from '~icons/lucide/zap';
	import IconClock from '~icons/lucide/clock';
	import IconTarget from '~icons/lucide/target';
	import IconTrendingUp from '~icons/lucide/trending-up';
	import IconAward from '~icons/lucide/award';
	import IconShield from '~icons/lucide/shield';
</script>

<section class="section-py bg-white">
	<div class="section-px container mx-auto">
		<div class="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
			<!-- Left side: Content -->
			<div class="space-y-8">
				<div class="space-y-4">
					<div class="flex items-center gap-3">
						<div class="flex items-center justify-center w-10 h-10 bg-primary-100 rounded-lg">
							<IconAward class="w-5 h-5 text-primary-600" />
						</div>
						<span class="text-caption text-primary-600 font-medium">Fast Company's Most Innovative 2025</span>
					</div>
					<h2 class="text-title1 font-bold text-gray-900">
						Why top manufacturers choose Squint
					</h2>
					<p class="text-headline text-gray-600 max-w-[50ch]">
						Traditional work instructions live in binders or spreadsheets—hard to find, harder to follow. Squint brings them to life onsite by turning your existing videos and process docs into clear, visual guidance your team can follow in the field.
					</p>
				</div>

				<!-- Benefits grid -->
				<div class="grid gap-6 sm:grid-cols-2">
					<div class="flex gap-3">
						<div class="flex items-center justify-center w-8 h-8 bg-primary-100 rounded-lg flex-shrink-0 mt-1">
							<IconClock class="w-4 h-4 text-primary-600" />
						</div>
						<div>
							<h3 class="text-body font-medium text-gray-900 mb-1">Get new operators ramped up in days, not weeks</h3>
						</div>
					</div>

					<div class="flex gap-3">
						<div class="flex items-center justify-center w-8 h-8 bg-primary-100 rounded-lg flex-shrink-0 mt-1">
							<IconTarget class="w-4 h-4 text-primary-600" />
						</div>
						<div>
							<h3 class="text-body font-medium text-gray-900 mb-1">Eliminate guesswork with point-by-point spatial guidance</h3>
						</div>
					</div>

					<div class="flex gap-3">
						<div class="flex items-center justify-center w-8 h-8 bg-primary-100 rounded-lg flex-shrink-0 mt-1">
							<IconShield class="w-4 h-4 text-primary-600" />
						</div>
						<div>
							<h3 class="text-body font-medium text-gray-900 mb-1">Capture expert knowledge before it walks out the door</h3>
						</div>
					</div>

					<div class="flex gap-3">
						<div class="flex items-center justify-center w-8 h-8 bg-primary-100 rounded-lg flex-shrink-0 mt-1">
							<IconTrendingUp class="w-4 h-4 text-primary-600" />
						</div>
						<div>
							<h3 class="text-body font-medium text-gray-900 mb-1">Standardize processes across teams and shifts</h3>
						</div>
					</div>
				</div>

				<!-- Bottom tagline -->
				<div class="pt-4 border-t border-gray-100">
					<p class="text-headline font-medium text-gray-900">
						Reduce human errors. Speed up training. Keep things running.
					</p>
				</div>
			</div>

			<!-- Right side: Visual -->
			<div class="relative">
				<!-- Main image -->
				<div class="relative aspect-[4/3] rounded-lg overflow-hidden">
					<img
						src="/generated/image-a-group-of-industrial-workers-in-a-manuf.webp"
						alt="Industrial workers using AR guidance in manufacturing facility"
						class="size-full object-cover"
					/>
					
					<!-- Overlay stats card -->
					<div class="absolute top-4 left-4 bg-white rounded-lg p-4 max-w-xs">
						<div class="space-y-3">
							<h3 class="text-caption font-medium text-gray-900">Training Impact</h3>
							<div class="space-y-2">
								<div class="flex items-center justify-between">
									<span class="text-footnote text-gray-600">Time to productivity</span>
									<span class="text-footnote font-medium text-primary-600">-67%</span>
								</div>
								<div class="flex items-center justify-between">
									<span class="text-footnote text-gray-600">Operator errors</span>
									<span class="text-footnote font-medium text-primary-600">-94%</span>
								</div>
								<div class="flex items-center justify-between">
									<span class="text-footnote text-gray-600">Safety incidents</span>
									<span class="text-footnote font-medium text-primary-600">-67%</span>
								</div>
							</div>
						</div>
					</div>

					<!-- Bottom right feature highlight -->
					<div class="absolute bottom-4 right-4 bg-white rounded-lg p-3 flex items-center gap-2">
						<div class="flex items-center justify-center w-6 h-6 bg-primary-100 rounded">
							<IconZap class="w-3 h-3 text-primary-600" />
						</div>
						<span class="text-footnote font-medium text-gray-900">60-second setup</span>
					</div>
				</div>

				<!-- Secondary image -->
				<div class="absolute -bottom-6 -right-6 w-32 h-40 rounded-lg overflow-hidden border-4 border-white">
					<img
						src="/generated/image-a-manufacturing-team-collaborating-in-a-.webp"
						alt="Manufacturing team collaborating with digital work instructions"
						class="size-full object-cover"
					/>
				</div>
			</div>
		</div>
	</div>
</section>