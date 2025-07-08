<!--
    @component
    Competitive advantage section highlighting why Squint is better than alternatives.
    Inspired by clean, centered three-column layout design.
    
    Usage:
    ```html
    <CompetitiveAdvantage />
    ```
-->

<script lang="ts">
	// Icons using proper lucide imports
	import IconShield from "~icons/lucide/shield";
	import IconSettings from "~icons/lucide/settings";
	import IconZap from "~icons/lucide/zap";
</script>

<section class="section-py bg-white">
	<div class="section-px container mx-auto">
		<div class="text-center max-w-4xl mx-auto">
			<!-- Header -->
			<div class="space-y-6 mb-16">
				<h2 class="text-title1 font-bold text-gray-900">
					Industrial training AI.<br />
					Minus the data exposure risks.
				</h2>
				<p class="text-headline text-gray-600 max-w-2xl mx-auto">
					Keep all your data within your own private environment for maximum security and compliance.
				</p>
			</div>

			<!-- Three-column benefits -->
			<div class="grid gap-12 md:grid-cols-3">
				<!-- Column 1: Completely private -->
				<div class="text-center space-y-4">
					<div class="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg mx-auto">
						<IconShield class="w-6 h-6 text-primary-600" />
					</div>
					<h3 class="text-title3 font-medium text-gray-900">Completely private</h3>
					<p class="text-body text-gray-600">
						All interactions with the model occur within your secure infrastructure. Your sensitive company data never leaves your dedicated systems.
					</p>
				</div>

				<!-- Column 2: Fully customizable -->
				<div class="text-center space-y-4">
					<div class="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg mx-auto">
						<IconSettings class="w-6 h-6 text-primary-600" />
					</div>
					<h3 class="text-title3 font-medium text-gray-900">Fully customizable</h3>
					<p class="text-body text-gray-600">
						Scale and customize the model to your organization's exact needs and preferences — without the restrictions of third-party cloud services.
					</p>
				</div>

				<!-- Column 3: Seamless setup -->
				<div class="text-center space-y-4">
					<div class="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg mx-auto">
						<IconZap class="w-6 h-6 text-primary-600" />
					</div>
					<h3 class="text-title3 font-medium text-gray-900">Seamless setup</h3>
					<p class="text-body text-gray-600">
						Once the contract is signed, we'll send you all the components you need to self-deploy. Setup typically takes less than a day.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>