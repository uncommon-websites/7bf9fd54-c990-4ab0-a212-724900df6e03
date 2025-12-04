<script lang="ts">
	import { onMount } from 'svelte';

	// Icons
	const Icons = {
		Play: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>`,
		ChevronDown: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>`,
		Brain: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"/><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"/><path d="M3.477 10.896a4 4 0 0 1 .585-.396"/><path d="M19.938 10.5a4 4 0 0 1 .585.396"/><path d="M6 18a4 4 0 0 1-1.967-.516"/><path d="M19.967 17.484A4 4 0 0 1 18 18"/></svg>`,
		Eye: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>`,
		Zap: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
		Users: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
		BookOpen: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
		Factory: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M17 18h1"/><path d="M12 18h1"/><path d="M7 18h1"/></svg>`,
		Sparkles: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>`,
		Target: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`,
		Plus: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>`,
		Check: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>`,
		ArrowRight: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`
	};

	const features = [
		{ title: 'AI-Generated Procedures', icon: Icons.Brain },
		{ title: 'Real-Time Spatial Guidance', icon: Icons.Eye },
		{ title: 'Instant Operator Training', icon: Icons.Zap },
		{ title: 'Knowledge Capture', icon: Icons.BookOpen },
		{ title: 'Factory Floor AI', icon: Icons.Factory },
		{ title: 'Expert Augmentation', icon: Icons.Sparkles }
	];

	const procedures = [
		{ name: 'Assembly Line Setup', desc: "Step-by-step guidance for production line configuration", color: 'bg-primary-500' },
		{ name: 'Quality Inspection', desc: "AI-powered visual inspection procedures", color: 'bg-primary-600' },
		{ name: 'Equipment Maintenance', desc: "Preventive maintenance with AR overlays", color: 'bg-secondary-500' },
		{ name: 'Safety Protocols', desc: "Real-time safety compliance guidance", color: 'bg-secondary-600' },
		{ name: 'Material Handling', desc: "Optimized workflows for material movement", color: 'bg-primary-400' },
		{ name: 'Troubleshooting', desc: "Expert-level problem solving for operators", color: 'bg-secondary-400' }
	];

	const faqs = [
		"How does Squint transform operators into experts?",
		"What types of manufacturing operations does Squint support?",
		"How quickly can new operators be trained with Squint?",
		"Does Squint work with existing factory equipment?",
		"How does Squint capture tribal knowledge?",
		"What is spatial guidance and how does it work?",
		"Can Squint integrate with our existing manufacturing systems?",
		"How does Squint ensure accuracy of AI-generated procedures?",
		"What ROI can we expect from implementing Squint?",
		"Is Squint suitable for Fortune 500 manufacturers?"
	];

    const footerLinks = {
        PRODUCT: ['Platform Overview', 'AI Procedures', 'Spatial Guidance', 'Knowledge Capture', 'Integrations', 'Security'],
        SOLUTIONS: ['Manufacturing', 'Assembly Lines', 'Quality Control', 'Training & Onboarding', 'Maintenance', 'Safety Compliance'],
        COMPANY: ['About Us', 'Careers', 'Blog', 'Press Kit', 'Contact'],
        RESOURCES: ['Documentation', 'Case Studies', 'Webinars', 'Help Center', 'API Reference'],
        LEGAL: ['Privacy Policy', 'Terms of Service', 'Security']
    };

	const testimonials = [
		{
			quote: "Our teams can access accurate, step-by-step guidance right on the shop floor. Squint keeps work flowing without pulling people away from production.",
			author: "Rocky Pinheiro",
			role: "Global VP of Quality and Innovation",
			company: "Penn Engineering"
		},
		{
			quote: "We do not have to push Squint. The plants come to us with new ways to use it. That is when you know a tool is going to stick.",
			author: "Jerrod Simpson",
			role: "Training Coordinator",
			company: "Pall Corporation"
		}
	];
</script>

<div class="min-h-screen bg-white font-sans text-gray-900">
	<!-- Navbar -->
	<nav class="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
		<div class="container-custom flex h-16 items-center justify-between">
			<div class="flex items-center gap-8">
				<a href="/" class="flex items-center gap-2 font-semibold text-lg tracking-tight text-gray-900">
                    <svg class="w-6 h-6 text-primary-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M3.99911 8.92165L19.4518 0L19.0424 6.3497L5.8821 13.9478L3.99911 8.92165Z" fill="currentColor"/>
						<path opacity="0.5" d="M5.88184 13.9475L16.7497 7.67294L16.3403 14.0226L7.76482 18.9736L5.88184 13.9475Z" fill="currentColor"/>
						<path opacity="0.25" d="M7.76367 18.9738L14.0467 15.3463L13.6372 21.696L9.64665 24L7.76367 18.9738Z" fill="currentColor"/>
					</svg>
					<span>Squint</span>
                </a>
				<div class="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-600">
					<a href="#product" class="hover:text-gray-900 transition">Product</a>
					<a href="#solutions" class="hover:text-gray-900 transition">Solutions</a>
					<a href="#customers" class="hover:text-gray-900 transition">Customers</a>
					<a href="#company" class="hover:text-gray-900 transition">Company</a>
					<a href="#careers" class="hover:text-gray-900 transition">Careers</a>
				</div>
			</div>
			<div class="flex items-center gap-4 text-sm font-medium">
				<a href="#contact" class="text-gray-600 hover:text-gray-900 transition">Contact Sales</a>
				<a href="#demo" class="bg-primary-600 text-white px-4 py-2 rounded-full hover:bg-primary-700 transition">Request Demo</a>
			</div>
		</div>
	</nav>

	<!-- Hero -->
	<section class="pt-20 pb-12">
		<div class="container-custom">
			<div class="flex flex-col lg:flex-row gap-12 mb-16">
				<div class="lg:w-1/2">
					<div class="inline-flex items-center gap-2 px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm font-medium mb-6">
						<span>{@html Icons.Sparkles}</span>
						<span>Fast Company's Most Innovative 2025</span>
					</div>
					<h1 class="text-5xl sm:text-6xl font-medium tracking-tight leading-[1.1] mb-8 text-gray-900">
						Transform every operator into an expert
					</h1>
					<p class="text-xl text-gray-600 leading-relaxed mb-8 max-w-lg">
						AI-generated procedures and real-time spatial guidance that supercharge efficiency on the factory floor.
					</p>
					<div class="flex flex-col sm:flex-row gap-4">
						<a href="#demo" class="inline-block bg-primary-600 text-white px-6 py-3 rounded-full font-medium hover:bg-primary-700 transition text-center">
							Request a Demo
						</a>
						<a href="#video" class="inline-flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-gray-50 transition">
							<span>{@html Icons.Play}</span>
							Watch Video
						</a>
					</div>
				</div>
				<div class="lg:w-1/2 lg:pt-2">
					<div class="space-y-6">
						<div class="flex items-start gap-4">
							<div class="w-10 h-10 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center flex-shrink-0">
								{@html Icons.Zap}
							</div>
							<div>
								<h3 class="font-semibold text-gray-900 mb-1">Train operators fast</h3>
								<p class="text-gray-600">Get new hires productive in days, not months, with AI-powered step-by-step guidance.</p>
							</div>
						</div>
						<div class="flex items-start gap-4">
							<div class="w-10 h-10 rounded-lg bg-secondary-100 text-secondary-600 flex items-center justify-center flex-shrink-0">
								{@html Icons.BookOpen}
							</div>
							<div>
								<h3 class="font-semibold text-gray-900 mb-1">Capture tribal knowledge</h3>
								<p class="text-gray-600">Never lose critical expertise when experienced operators retire or move on.</p>
							</div>
						</div>
						<div class="flex items-start gap-4">
							<div class="w-10 h-10 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center flex-shrink-0">
								{@html Icons.Target}
							</div>
							<div>
								<h3 class="font-semibold text-gray-900 mb-1">Scale expertise instantly</h3>
								<p class="text-gray-600">Deploy best practices across all facilities with consumer-grade technology.</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Platform UI Mockup -->
			<div class="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-gradient-to-br from-gray-900 to-gray-800 aspect-[16/9] lg:aspect-[16/8]">
				<!-- AR View Header -->
				<div class="absolute top-0 left-0 right-0 h-12 bg-gray-900/80 backdrop-blur-sm border-b border-gray-700 flex items-center justify-between px-4">
                    <div class="flex items-center gap-3">
                         <div class="text-xs font-medium text-white">Squint Platform</div>
						 <div class="h-4 w-px bg-gray-600"></div>
						 <div class="text-xs text-gray-400">Assembly Line A - Station 3</div>
                    </div>
                    <div class="flex items-center gap-2">
						<div class="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs font-medium">Live Guidance Active</div>
					</div>
                </div>
                
                <!-- Mockup Content - AR Factory View -->
                <div class="absolute top-12 bottom-0 left-0 right-0 flex bg-gradient-to-br from-gray-800 to-gray-900">
                    <!-- Main AR View -->
                    <div class="flex-1 flex flex-col relative">
                        <!-- Factory Floor View with AR Overlays -->
                        <div class="flex-1 bg-gray-800 p-6 flex items-center justify-center relative overflow-hidden">
							<!-- Simulated factory floor image -->
							<div class="absolute inset-0 opacity-40">
								<div class="w-full h-full bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900"></div>
							</div>
							
							<!-- AR Guidance Overlays -->
                            <div class="relative z-10 w-full h-full flex items-center justify-center">
								<div class="max-w-2xl w-full space-y-4">
									<!-- Step indicator -->
									<div class="flex items-center gap-3 mb-6">
										<div class="w-10 h-10 rounded-full bg-primary-500 text-white flex items-center justify-center font-bold">3</div>
										<div>
											<div class="text-sm text-gray-400">Step 3 of 8</div>
											<div class="text-lg font-semibold text-white">Align Component Housing</div>
										</div>
									</div>
									
									<!-- Procedure steps -->
									<div class="space-y-3">
										<div class="flex items-start gap-3 p-3 bg-gray-700/50 backdrop-blur rounded-lg border border-gray-600">
											<div class="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
												{@html Icons.Check}
											</div>
											<div class="flex-1">
												<div class="text-sm text-gray-300 line-through">Position base plate on fixture</div>
											</div>
										</div>
										<div class="flex items-start gap-3 p-3 bg-gray-700/50 backdrop-blur rounded-lg border border-gray-600">
											<div class="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
												{@html Icons.Check}
											</div>
											<div class="flex-1">
												<div class="text-sm text-gray-300 line-through">Insert alignment pins (4x)</div>
											</div>
										</div>
										<div class="flex items-start gap-3 p-4 bg-primary-500/20 backdrop-blur rounded-lg border-2 border-primary-500">
											<div class="w-6 h-6 rounded-full bg-primary-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">→</div>
											<div class="flex-1">
												<div class="text-white font-medium mb-1">Align housing with marked position</div>
												<div class="text-sm text-primary-200">Ensure tab A fits into slot B. Visual indicator will turn green when aligned.</div>
											</div>
										</div>
										<div class="flex items-start gap-3 p-3 bg-gray-700/30 backdrop-blur rounded-lg border border-gray-600/50 opacity-60">
											<div class="w-6 h-6 rounded-full bg-gray-600 flex items-center justify-center flex-shrink-0 mt-0.5">
												<div class="text-xs text-gray-400">4</div>
											</div>
											<div class="flex-1">
												<div class="text-sm text-gray-400">Secure with 4 bolts (torque: 25 Nm)</div>
											</div>
										</div>
									</div>

									<!-- Action buttons -->
									<div class="flex gap-3 mt-6">
										<button class="flex-1 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-medium transition">
											Need Help?
										</button>
										<button class="flex-1 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition">
											Mark Complete
										</button>
									</div>
								</div>
                            </div>
                        </div>
                    </div>

					<!-- Side Panel - Procedure Info -->
					<div class="w-64 border-l border-gray-700 bg-gray-900/50 backdrop-blur p-4 space-y-4">
						<div>
							<div class="text-xs text-gray-400 mb-2">CURRENT PROCEDURE</div>
							<div class="text-sm font-medium text-white">Motor Assembly - Standard</div>
						</div>
						<div>
							<div class="text-xs text-gray-400 mb-2">OPERATOR</div>
							<div class="flex items-center gap-2">
								<div class="w-8 h-8 rounded-full bg-primary-500"></div>
								<div class="text-sm text-white">Sarah Chen</div>
							</div>
						</div>
						<div>
							<div class="text-xs text-gray-400 mb-2">PROGRESS</div>
							<div class="w-full bg-gray-700 rounded-full h-2">
								<div class="bg-primary-500 h-2 rounded-full" style="width: 37.5%"></div>
							</div>
							<div class="text-xs text-gray-400 mt-1">3 of 8 steps complete</div>
						</div>
						<div class="pt-4 border-t border-gray-700">
							<div class="text-xs text-gray-400 mb-2">ESTIMATED TIME</div>
							<div class="text-sm text-white">12 min remaining</div>
						</div>
					</div>
                </div>
			</div>
            
            <div class="flex justify-center mt-6 gap-2">
                <button class="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-sm flex items-center gap-2 hover:bg-primary-700 transition">
                    {@html Icons.Eye} AR Guidance
                </button>
                <button class="text-gray-600 hover:text-gray-900 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 transition">
                    {@html Icons.Brain} AI Procedures
                </button>
            </div>
		</div>
	</section>

	<!-- Intro Section -->
	<section class="py-20 bg-white" id="product">
		<div class="container-custom text-center">
			<p class="text-sm text-primary-600 font-semibold mb-4 uppercase tracking-wider">The Squint Platform</p>
			<h2 class="text-4xl sm:text-5xl font-medium tracking-tight max-w-4xl mx-auto mb-6 leading-[1.1] text-gray-900">
				Make every operator an expert with AI-powered guidance
			</h2>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
				Squint combines AI-generated procedures with real-time spatial guidance to transform your factory floor. Train faster, capture knowledge, and scale expertise across your entire operation.
			</p>

			<div class="flex flex-wrap justify-center gap-3 mb-12 max-w-4xl mx-auto">
				{#each features as feature}
					<div class="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-200 text-sm font-medium text-gray-700 hover:border-primary-300 hover:bg-primary-50 transition">
						<span class="text-primary-600">{@html feature.icon}</span>
						{feature.title}
					</div>
				{/each}
			</div>

			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<button class="bg-primary-600 text-white px-6 py-3 rounded-full font-medium hover:bg-primary-700 transition flex items-center gap-2 mx-auto sm:mx-0">
					<div class="w-5 h-5 fill-current">{@html Icons.Play}</div>
					Watch Platform Demo
				</button>
				<a href="#contact" class="inline-flex items-center justify-center gap-2 text-primary-600 font-medium hover:text-primary-700 transition">
					Talk to our team {@html Icons.ArrowRight}
				</a>
			</div>
		</div>
	</section>

	<!-- Feature Scroll Section -->
	<section class="py-20 border-t border-gray-100 bg-gray-50">
		<div class="container-custom">
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
				<!-- Left Column: Text -->
				<div class="space-y-32 py-12">
					<div class="max-w-md">
						<div class="w-12 h-12 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center mb-4">
							{@html Icons.Brain}
						</div>
						<h3 class="text-3xl font-medium mb-4 text-gray-900">AI-generated procedures in seconds</h3>
						<p class="text-gray-600 leading-relaxed mb-6">
							Transform tribal knowledge into step-by-step procedures automatically. Squint's AI watches your expert operators and generates accurate, easy-to-follow instructions that any team member can execute.
						</p>
					</div>
                    
                    <div class="max-w-md">
						<div class="w-12 h-12 rounded-xl bg-secondary-100 text-secondary-600 flex items-center justify-center mb-4">
							{@html Icons.Eye}
						</div>
						<h3 class="text-3xl font-medium mb-4 text-gray-900">Real-time spatial guidance on the floor</h3>
						<p class="text-gray-600 leading-relaxed mb-6">
							Overlay digital instructions directly onto physical equipment with AR technology. Operators see exactly what to do, where to do it, reducing errors and eliminating guesswork on complex tasks.
						</p>
					</div>

                    <div class="max-w-md">
						<div class="w-12 h-12 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center mb-4">
							{@html Icons.Zap}
						</div>
						<h3 class="text-3xl font-medium mb-4 text-gray-900">Train new operators in days, not months</h3>
						<p class="text-gray-600 leading-relaxed mb-6">
							Get new hires productive faster with interactive, AI-powered training. No more shadowing for weeks—operators learn by doing with real-time guidance and instant feedback.
						</p>
					</div>

                    <div class="max-w-md">
						<div class="w-12 h-12 rounded-xl bg-secondary-100 text-secondary-600 flex items-center justify-center mb-4">
							{@html Icons.BookOpen}
						</div>
						<h3 class="text-3xl font-medium mb-4 text-gray-900">Capture expertise before it walks out the door</h3>
						<p class="text-gray-600 leading-relaxed mb-6">
							Preserve critical knowledge from retiring operators and subject matter experts. Squint automatically documents their techniques, ensuring your institutional knowledge stays in-house forever.
						</p>
					</div>

                    <div class="max-w-md">
						<div class="w-12 h-12 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center mb-4">
							{@html Icons.Target}
						</div>
						<h3 class="text-3xl font-medium mb-4 text-gray-900">Scale best practices across all facilities</h3>
						<p class="text-gray-600 leading-relaxed mb-6">
							Deploy proven procedures from your top-performing plant to every location instantly. Standardize operations, reduce variability, and ensure consistent quality across your entire manufacturing network.
						</p>
					</div>
				</div>

				<!-- Right Column: Sticky Visual -->
				<div class="relative hidden lg:block">
					<div class="sticky top-32 bg-white rounded-2xl border border-gray-200 p-6 h-[600px] overflow-hidden shadow-lg">
                        <div class="mb-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Active Procedures</div>
                        <div class="space-y-2">
                            {#each procedures as procedure}
                                <div class="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition cursor-pointer group">
                                    <div class="w-10 h-10 rounded-lg {procedure.color} flex-shrink-0 flex items-center justify-center text-white">
										{@html Icons.Check}
									</div>
                                    <div class="flex-1 min-w-0">
                                        <div class="font-medium text-sm text-gray-900 group-hover:text-primary-700">{procedure.name}</div>
                                        <div class="text-xs text-gray-500 truncate">{procedure.desc}</div>
                                    </div>
                                    <div class="text-xs text-gray-400 group-hover:text-primary-600">
                                        →
                                    </div>
                                </div>
                            {/each}
                        </div>
                        <!-- Fade out at bottom -->
                        <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Bento Grid Section -->
	<section class="py-20 bg-white" id="solutions">
		<div class="container-custom">
			<div class="text-center max-w-3xl mx-auto mb-16">
				<h2 class="text-4xl font-medium mb-4 text-gray-900">Everything you need for factory floor excellence</h2>
				<p class="text-gray-600 text-lg">
					From AI-powered procedure generation to real-time operator support, Squint provides a complete platform for modern manufacturing operations.
				</p>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
				<!-- Knowledge Capture (Span 2) -->
				<div class="md:col-span-2 bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 min-h-[300px] relative overflow-hidden group border border-primary-200">
                    <div class="relative z-10">
					    <h3 class="text-xl font-semibold mb-2 text-gray-900">Automatic Knowledge Capture</h3>
					    <p class="text-sm text-gray-700 max-w-xs">Record expert operators once, generate procedures automatically. Preserve institutional knowledge before it retires.</p>
                    </div>
                    <div class="absolute bottom-0 right-0 w-3/4 h-3/4 bg-white rounded-tl-2xl shadow-xl border border-gray-200 transform translate-y-4 translate-x-4 group-hover:translate-x-2 group-hover:translate-y-2 transition duration-500">
                         <!-- Mock procedure steps -->
                         <div class="p-4 space-y-2">
                             <div class="flex items-center gap-2 p-2 bg-green-50 border border-green-200 rounded">
								<div class="w-5 h-5 rounded-full bg-green-500 text-white flex items-center justify-center text-xs">{@html Icons.Check}</div>
								<div class="text-xs text-gray-700">Position component on fixture</div>
							 </div>
                             <div class="flex items-center gap-2 p-2 bg-primary-50 border border-primary-200 rounded">
								<div class="w-5 h-5 rounded-full bg-primary-500 text-white flex items-center justify-center text-xs font-bold">2</div>
								<div class="text-xs text-gray-700">Align housing with marked tabs</div>
							 </div>
                             <div class="flex items-center gap-2 p-2 bg-gray-50 border border-gray-200 rounded opacity-60">
								<div class="w-5 h-5 rounded-full bg-gray-300 text-white flex items-center justify-center text-xs">3</div>
								<div class="text-xs text-gray-500">Secure with 4 bolts (25 Nm)</div>
							 </div>
                         </div>
                    </div>
				</div>

				<!-- AR Guidance -->
				<div class="bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-2xl p-8 min-h-[300px] relative overflow-hidden border border-secondary-200">
                    <div class="relative z-10">
					    <h3 class="text-xl font-semibold mb-2 text-gray-900">AR Spatial Guidance</h3>
					    <p class="text-sm text-gray-700">Overlay instructions directly on equipment for zero-error execution.</p>
                    </div>
                     <div class="absolute bottom-8 left-8 right-8 h-32 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-lg overflow-hidden mt-4 border border-gray-700">
                         <div class="w-full h-full relative flex items-center justify-center">
							<div class="absolute inset-0 opacity-20 bg-gradient-to-br from-primary-500 to-secondary-500"></div>
                             <div class="relative z-10 text-white text-xs font-medium">Live AR View</div>
                         </div>
                     </div>
				</div>

				<!-- Real-time Analytics -->
				<div class="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 min-h-[300px] relative overflow-hidden border border-gray-200">
                    <div class="relative z-10">
					    <h3 class="text-xl font-semibold mb-2 text-gray-900">Performance Analytics</h3>
					    <p class="text-sm text-gray-700">Track operator progress, completion rates, and identify training gaps.</p>
                    </div>
                    <div class="absolute bottom-8 left-8 right-8 space-y-2">
                        <div class="bg-white rounded-lg p-2 shadow-sm border border-gray-200">
							<div class="flex items-center justify-between mb-1">
								<span class="text-xs text-gray-600">Completion Rate</span>
								<span class="text-xs font-semibold text-green-600">94%</span>
							</div>
							<div class="w-full bg-gray-200 rounded-full h-1.5">
								<div class="bg-green-500 h-1.5 rounded-full" style="width: 94%"></div>
							</div>
						</div>
						<div class="bg-white rounded-lg p-2 shadow-sm border border-gray-200">
							<div class="flex items-center justify-between mb-1">
								<span class="text-xs text-gray-600">Avg. Time Saved</span>
								<span class="text-xs font-semibold text-primary-600">38%</span>
							</div>
							<div class="w-full bg-gray-200 rounded-full h-1.5">
								<div class="bg-primary-500 h-1.5 rounded-full" style="width: 38%"></div>
							</div>
						</div>
                    </div>
				</div>

				<!-- Multi-site Deployment -->
				<div class="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-8 min-h-[300px] relative overflow-hidden border border-gray-200">
                    <div class="relative z-10">
					    <h3 class="text-xl font-semibold mb-2 text-gray-900">Multi-Site Deployment</h3>
					    <p class="text-sm text-gray-700">Deploy procedures across all facilities with one click.</p>
                    </div>
                    <div class="absolute bottom-8 left-8 right-8 bg-white rounded-xl p-3 shadow-sm border border-gray-200 text-xs space-y-2">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center gap-2">
								<div class="w-2 h-2 rounded-full bg-green-500"></div>
								<span class="font-medium text-gray-700">Plant A</span>
							</div>
                            <span class="text-gray-400">Live</span>
                        </div>
                        <div class="flex items-center justify-between">
                            <div class="flex items-center gap-2">
								<div class="w-2 h-2 rounded-full bg-green-500"></div>
								<span class="font-medium text-gray-700">Plant B</span>
							</div>
                            <span class="text-gray-400">Live</span>
                        </div>
						<div class="flex items-center justify-between">
                            <div class="flex items-center gap-2">
								<div class="w-2 h-2 rounded-full bg-yellow-500"></div>
								<span class="font-medium text-gray-700">Plant C</span>
							</div>
                            <span class="text-gray-400">Deploying</span>
                        </div>
                    </div>
				</div>

				<!-- Integration Support -->
				<div class="bg-gradient-to-br from-secondary-50 to-white rounded-2xl p-8 min-h-[300px] relative overflow-hidden border border-gray-200">
                    <div class="relative z-10">
					    <h3 class="text-xl font-semibold mb-2 text-gray-900">Enterprise Integrations</h3>
					    <p class="text-sm text-gray-700">Connect with your existing MES, ERP, and quality systems.</p>
                    </div>
                    <div class="absolute bottom-8 left-8 right-8 bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                        <div class="p-2 border-b border-gray-100 flex items-center justify-between">
                            <span class="text-sm font-medium text-gray-700">SAP</span>
							<div class="w-2 h-2 rounded-full bg-green-500"></div>
                        </div>
                        <div class="p-2 border-b border-gray-100 flex items-center justify-between">
                            <span class="text-sm font-medium text-gray-700">Oracle MES</span>
							<div class="w-2 h-2 rounded-full bg-green-500"></div>
                        </div>
                         <div class="p-2 border-b border-gray-100 flex items-center justify-between">
                            <span class="text-sm font-medium text-gray-700">Rockwell</span>
							<div class="w-2 h-2 rounded-full bg-green-500"></div>
                        </div>
                         <div class="p-2 flex items-center justify-between">
                            <span class="text-sm font-medium text-gray-700">Custom API</span>
							<div class="w-2 h-2 rounded-full bg-green-500"></div>
                        </div>
                    </div>
				</div>
			</div>
		</div>
	</section>

	<!-- Testimonials Section -->
	<section class="py-20 bg-gray-50" id="customers">
		<div class="container-custom">
			<div class="text-center max-w-3xl mx-auto mb-16">
				<p class="text-sm text-primary-600 font-semibold mb-4 uppercase tracking-wider">Trusted by Industry Leaders</p>
				<h2 class="text-4xl font-medium mb-4 text-gray-900">Transforming manufacturing operations at Fortune 500 companies</h2>
				<p class="text-gray-600 text-lg">
					From automotive to aerospace, leading manufacturers trust Squint to train operators faster and preserve critical knowledge.
				</p>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <!-- Testimonial 1 -->
                <div class="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
					<div class="mb-6">
						<svg class="w-10 h-10 text-primary-200" fill="currentColor" viewBox="0 0 24 24">
							<path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
						</svg>
					</div>
                    <p class="text-gray-700 leading-relaxed mb-6 text-lg">
						{testimonials[0].quote}
					</p>
					<div class="flex items-center gap-4">
						<div class="w-12 h-12 rounded-full bg-primary-100"></div>
						<div>
							<div class="font-semibold text-gray-900">{testimonials[0].author}</div>
							<div class="text-sm text-gray-600">{testimonials[0].role}</div>
							<div class="text-sm text-gray-500">{testimonials[0].company}</div>
						</div>
					</div>
                </div>

                <!-- Testimonial 2 -->
                <div class="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
					<div class="mb-6">
						<svg class="w-10 h-10 text-primary-200" fill="currentColor" viewBox="0 0 24 24">
							<path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
						</svg>
					</div>
                    <p class="text-gray-700 leading-relaxed mb-6 text-lg">
						{testimonials[1].quote}
					</p>
					<div class="flex items-center gap-4">
						<div class="w-12 h-12 rounded-full bg-secondary-100"></div>
						<div>
							<div class="font-semibold text-gray-900">{testimonials[1].author}</div>
							<div class="text-sm text-gray-600">{testimonials[1].role}</div>
							<div class="text-sm text-gray-500">{testimonials[1].company}</div>
						</div>
					</div>
                </div>
            </div>

			<!-- Stats -->
			<div class="grid grid-cols-2 md:grid-cols-4 gap-8">
				<div class="text-center">
					<div class="text-4xl font-bold text-primary-600 mb-2">95%</div>
					<div class="text-sm text-gray-600">Faster Training Time</div>
				</div>
				<div class="text-center">
					<div class="text-4xl font-bold text-primary-600 mb-2">60%</div>
					<div class="text-sm text-gray-600">Reduction in Errors</div>
				</div>
				<div class="text-center">
					<div class="text-4xl font-bold text-primary-600 mb-2">$13M</div>
					<div class="text-sm text-gray-600">Backed by Sequoia</div>
				</div>
				<div class="text-center">
					<div class="text-4xl font-bold text-primary-600 mb-2">500+</div>
					<div class="text-sm text-gray-600">Fortune 500 Operators</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Company Section -->
	<section class="py-20 bg-white" id="company">
		<div class="container-custom">
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
				<div>
					<p class="text-sm text-primary-600 font-semibold mb-4 uppercase tracking-wider">About Squint</p>
					<h2 class="text-4xl font-medium mb-6 text-gray-900">Catalyzing the next industrial revolution</h2>
					<p class="text-lg text-gray-600 leading-relaxed mb-6">
						Founded by Devin Bhushan, Squint is on a mission to make every operator an expert. We're bringing consumer-grade AI technology to the factory floor, transforming how manufacturing teams train, work, and preserve knowledge.
					</p>
					<p class="text-lg text-gray-600 leading-relaxed mb-8">
						Backed by Sequoia and recognized as one of Fast Company's Most Innovative Companies of 2025, we're defining agentic manufacturing for Fortune 500 companies.
					</p>
					
					<div class="space-y-4 mb-8">
						<div class="flex items-center gap-3">
							<div class="w-8 h-8 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center flex-shrink-0">
								{@html Icons.Check}
							</div>
							<span class="text-gray-700">Fast Company's Most Innovative 2025</span>
						</div>
						<div class="flex items-center gap-3">
							<div class="w-8 h-8 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center flex-shrink-0">
								{@html Icons.Check}
							</div>
							<span class="text-gray-700">Forbes 30 Under 30 (Manufacturing)</span>
						</div>
						<div class="flex items-center gap-3">
							<div class="w-8 h-8 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center flex-shrink-0">
								{@html Icons.Check}
							</div>
							<span class="text-gray-700">$13M Series A led by Sequoia</span>
						</div>
					</div>

					<div class="flex flex-col sm:flex-row gap-4">
						<a href="#careers" class="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-full font-medium hover:bg-primary-700 transition">
							Join Our Team {@html Icons.ArrowRight}
						</a>
						<a href="#about" class="inline-flex items-center justify-center gap-2 text-gray-700 hover:text-gray-900 font-medium transition">
							Read Our Story
						</a>
					</div>
				</div>

				<div class="relative">
					<div class="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary-100 to-secondary-100 border border-gray-200">
						<!-- Placeholder for team/office image -->
						<div class="w-full h-full flex items-center justify-center">
							<div class="text-center p-8">
								<div class="w-20 h-20 mx-auto mb-4 rounded-full bg-primary-500 text-white flex items-center justify-center">
									<svg class="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M3.99911 8.92165L19.4518 0L19.0424 6.3497L5.8821 13.9478L3.99911 8.92165Z" fill="currentColor"/>
										<path opacity="0.5" d="M5.88184 13.9475L16.7497 7.67294L16.3403 14.0226L7.76482 18.9736L5.88184 13.9475Z" fill="currentColor"/>
										<path opacity="0.25" d="M7.76367 18.9738L14.0467 15.3463L13.6372 21.696L9.64665 24L7.76367 18.9738Z" fill="currentColor"/>
									</svg>
								</div>
								<div class="text-gray-600 font-medium">Building the future of manufacturing</div>
								<div class="text-sm text-gray-500 mt-2">San Francisco HQ + Remote Team</div>
							</div>
						</div>
					</div>
					
					<!-- Floating stats cards -->
					<div class="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg border border-gray-200 p-4">
						<div class="text-2xl font-bold text-primary-600">50+</div>
						<div class="text-sm text-gray-600">Team Members</div>
					</div>
					<div class="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg border border-gray-200 p-4">
						<div class="text-2xl font-bold text-secondary-600">100%</div>
						<div class="text-sm text-gray-600">Remote Friendly</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- FAQ Section -->
	<section class="py-20 bg-gray-50">
		<div class="container-custom">
			<div class="max-w-3xl mx-auto">
				<h2 class="text-4xl font-medium mb-4 text-gray-900 text-center">Frequently asked questions</h2>
				<p class="text-center text-gray-600 mb-12">Everything you need to know about Squint and how it transforms factory operations.</p>
				<div class="border-t border-gray-200">
					{#each faqs as faq}
						<details class="group border-b border-gray-200 bg-white">
							<summary class="flex items-center justify-between py-6 px-6 cursor-pointer list-none hover:bg-gray-50 transition">
								<span class="text-lg font-medium text-gray-900">{faq}</span>
								<span class="transform group-open:rotate-45 transition-transform duration-200 text-primary-600">
									{@html Icons.Plus}
								</span>
							</summary>
							<div class="pb-6 px-6 text-gray-600">
								<p>Squint provides comprehensive solutions tailored to your manufacturing needs. Contact our team to learn more about how we can help transform your operations.</p>
							</div>
						</details>
					{/each}
				</div>
				
				<div class="mt-12 text-center">
					<p class="text-gray-600 mb-4">Still have questions?</p>
					<a href="#contact" class="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700 transition">
						Contact our team {@html Icons.ArrowRight}
					</a>
				</div>
			</div>
		</div>
	</section>

	<!-- Bottom CTA -->
	<section class="py-24 bg-gradient-to-br from-primary-600 to-primary-700" id="demo">
		<div class="container-custom">
			<div class="max-w-4xl mx-auto text-center">
				<h2 class="text-4xl sm:text-5xl font-medium text-white mb-6">Ready to transform your factory floor?</h2>
				<p class="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
					See how Squint can help you train operators faster, preserve tribal knowledge, and scale expertise across your entire operation.
				</p>
				<div class="flex flex-col sm:flex-row items-center justify-center gap-4">
					<a href="#contact" class="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition shadow-lg">
						Request a Demo
					</a>
					<a href="#sales" class="bg-primary-800 border-2 border-primary-400 text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-900 transition">
						Talk to Sales
					</a>
				</div>
				<p class="text-primary-200 text-sm mt-6">
					Join Fortune 500 manufacturers already using Squint
				</p>
			</div>
		</div>
	</section>

	<!-- Footer -->
	<footer class="bg-gray-900 pt-20 pb-10 text-xs" id="careers">
		<div class="container-custom">
			<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-20">
                {#each Object.entries(footerLinks) as [category, links]}
                    <div>
                        <h4 class="font-bold text-gray-400 mb-6 tracking-wider text-xs">{category}</h4>
                        <ul class="space-y-3">
                            {#each links as link}
                                <li><a href="#" class="text-gray-400 hover:text-white transition text-sm">{link}</a></li>
                            {/each}
                        </ul>
                    </div>
                {/each}
			</div>

			<div class="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-800 gap-4">
				<div class="flex items-center gap-2 font-semibold text-lg tracking-tight text-gray-500">
                    <svg class="w-6 h-6 text-primary-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M3.99911 8.92165L19.4518 0L19.0424 6.3497L5.8821 13.9478L3.99911 8.92165Z" fill="currentColor"/>
						<path opacity="0.5" d="M5.88184 13.9475L16.7497 7.67294L16.3403 14.0226L7.76482 18.9736L5.88184 13.9475Z" fill="currentColor"/>
						<path opacity="0.25" d="M7.76367 18.9738L14.0467 15.3463L13.6372 21.696L9.64665 24L7.76367 18.9738Z" fill="currentColor"/>
					</svg>
					<span class="text-white">Squint</span>
                </div>
                
                <div class="flex flex-wrap justify-center gap-6 text-gray-400 text-sm">
                    <a href="#" class="hover:text-white transition">Privacy Policy</a>
                    <a href="#" class="hover:text-white transition">Terms of Service</a>
                    <a href="#" class="hover:text-white transition">Security</a>
                </div>

                 <div class="text-gray-500 text-sm">
                    © 2025 Squint. All rights reserved.
                </div>
			</div>

			<div class="mt-8 pt-8 border-t border-gray-800 text-center">
				<p class="text-gray-400 text-sm mb-4">
					Backed by <span class="text-white font-semibold">Sequoia</span> • 
					<span class="text-white font-semibold">Fast Company's</span> Most Innovative 2025 • 
					<span class="text-white font-semibold">Forbes</span> 30 Under 30
				</p>
				<p class="text-gray-500 text-xs">
					Making every operator an expert
				</p>
			</div>
		</div>
	</footer>
</div>

<style>
    /* Custom scrollbar for code block */
    pre::-webkit-scrollbar {
        height: 8px;
    }
    pre::-webkit-scrollbar-track {
        background: transparent;
    }
    pre::-webkit-scrollbar-thumb {
        background-color: #e5e7eb;
        border-radius: 4px;
    }
</style>

