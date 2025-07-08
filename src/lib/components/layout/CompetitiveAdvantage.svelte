<!--
    @component
    Competitive advantage section highlighting why Squint is better than alternatives.
    
    Usage:
    ```html
    <CompetitiveAdvantage />
    ```
-->

<script lang="ts">
	// Placeholder icons as simple SVGs
	const IconZap = () => `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>`;
	const IconClock = () => `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>`;
	const IconTarget = () => `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`;
	const IconUsers = () => `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`;
	const IconBookOpen = () => `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`;
	const IconAward = () => `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="8" r="7"/><path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12"/></svg>`;
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
						Why teams choose Squint over traditional training tools
					</h2>
					<p class="text-headline text-gray-600 max-w-[50ch]">
						What used to take weeks now takes hours. Squint converts your existing videos and PDFs into step-by-step training—no more waiting for trainers or slow shadowing.
					</p>
				</div>

				<!-- Benefits grid -->
				<div class="grid gap-6 sm:grid-cols-2">
					<div class="flex gap-3">
						<div class="flex items-center justify-center w-8 h-8 bg-primary-100 rounded-lg flex-shrink-0 mt-1">
							<IconClock class="w-4 h-4 text-primary-600" />
						</div>
						<div>
							<h3 class="text-body font-medium text-gray-900 mb-1">Faster ramp-up time</h3>
							<p class="text-caption text-gray-600">What used to take weeks now takes hours. No more waiting for trainers or slow shadowing.</p>
						</div>
					</div>

					<div class="flex gap-3">
						<div class="flex items-center justify-center w-8 h-8 bg-primary-100 rounded-lg flex-shrink-0 mt-1">
							<IconTarget class="w-4 h-4 text-primary-600" />
						</div>
						<div>
							<h3 class="text-body font-medium text-gray-900 mb-1">On-the-floor guidance</h3>
							<p class="text-caption text-gray-600">Spatial instructions where they need them most—on the floor, not in a binder.</p>
						</div>
					</div>

					<div class="flex gap-3">
						<div class="flex items-center justify-center w-8 h-8 bg-primary-100 rounded-lg flex-shrink-0 mt-1">
							<IconUsers class="w-4 h-4 text-primary-600" />
						</div>
						<div>
							<h3 class="text-body font-medium text-gray-900 mb-1">Standardization at scale</h3>
							<p class="text-caption text-gray-600">Everyone follows the same process, every time. Reducing variation across teams.</p>
						</div>
					</div>

					<div class="flex gap-3">
						<div class="flex items-center justify-center w-8 h-8 bg-primary-100 rounded-lg flex-shrink-0 mt-1">
							<IconBookOpen class="w-4 h-4 text-primary-600" />
						</div>
						<div>
							<h3 class="text-body font-medium text-gray-900 mb-1">Knowledge that stays</h3>
							<p class="text-caption text-gray-600">When people leave, their knowledge doesn't. Captured procedures stay with your company.</p>
						</div>
					</div>

					<div class="flex gap-3">
						<div class="flex items-center justify-center w-8 h-8 bg-primary-100 rounded-lg flex-shrink-0 mt-1">
							<IconZap class="w-4 h-4 text-primary-600" />
						</div>
						<div>
							<h3 class="text-body font-medium text-gray-900 mb-1">Deployment in minutes</h3>
							<p class="text-caption text-gray-600">Map your space in under 60 seconds. Digitize processes fast.</p>
						</div>
					</div>
				</div>

				<!-- Bottom tagline -->
				<div class="pt-4 border-t border-gray-100">
					<p class="text-headline font-medium text-gray-900">
						All with a tool your team actually wants to use.
					</p>
				</div>
			</div>

			<!-- Right side: Visual -->
			<div class="relative">
				<!-- Main image -->
				<div class="relative aspect-[4/3] rounded-lg overflow-hidden">
					<img
						src="/generated/image-a-manufacturing-team-in-an-industrial-se.webp"
						alt="Manufacturing team training with digital work instructions"
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
						src="/generated/image-a-factory-floor-scene-featuring-workers-.webp"
						alt="Factory floor workers following AR guidance"
						class="size-full object-cover"
					/>
				</div>
			</div>
		</div>
	</div>
</section>