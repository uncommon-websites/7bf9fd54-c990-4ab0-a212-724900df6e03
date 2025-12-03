<script lang="ts">
	import { onMount } from 'svelte';

	// Icons
	const Icons = {
		Play: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>`,
		ChevronDown: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>`,
		ChevronRight: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>`,
		ChevronLeft: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>`,
		Text: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 6.1H3"/><path d="M21 12.1H3"/><path d="M15.1 18H3"/></svg>`,
		Music: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>`,
		Wand: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 4V2"/><path d="M15 16v-2"/><path d="M8 9h2"/><path d="M20 9h2"/><path d="M17.8 11.8 19 13"/><path d="M15 9h0"/><path d="M17.8 6.2 19 5"/><path d="m3 21 9-9"/><path d="M12.2 6.2 11 5"/></svg>`,
		Captions: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="14" x="3" y="5" rx="2" ry="2"/><path d="M7 15h4M15 15h2M7 11h2M13 11h4"/></svg>`,
		Mic: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>`,
		FileText: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>`,
		Layers: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`,
		Video: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 8-6 4 6 4V8Z"/><rect width="14" height="12" x="2" y="6" rx="2" ry="2"/></svg>`,
		Plus: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>`,
		Check: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>`,
		Globe: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>`
	};

	const features = [
		{ title: 'Text to Speech', icon: Icons.Text },
		{ title: 'Eleven Music', icon: Icons.Music },
		{ title: 'AI Sound Effects', icon: Icons.Wand },
		{ title: 'Captions', icon: Icons.Captions },
		{ title: 'Voice Changer', icon: Icons.Mic },
		{ title: 'Transcription', icon: Icons.FileText },
		{ title: 'Voice Isolator', icon: Icons.Layers },
		{ title: 'Video support', icon: Icons.Video, color: 'text-blue-500' }
	];

	const voices = [
		{ name: 'Burt Reynolds', desc: "ElevenLabs' Iconic Voice", color: 'bg-blue-500' },
		{ name: 'Enrique Montragón', desc: "Middle aged male with a Mexican Spanish accent", color: 'bg-indigo-600' },
		{ name: 'Finn', desc: "A well-connected, young conversational male", color: 'bg-orange-500' },
		{ name: 'Hope', desc: "A warm, soothing, and captivating voice", color: 'bg-purple-500' },
		{ name: 'Magic Jack', desc: "Casual, friendly, heart-felt voice", color: 'bg-pink-500' },
		{ name: 'Jack Bass', desc: "A calm and gritty storyteller", color: 'bg-green-500' },
		{ name: 'Jamathan', desc: "A warm, smooth, and versatile voice", color: 'bg-blue-300' },
		{ name: 'Lean Stern', desc: "A rich, deep voice for fantasy", color: 'bg-red-300' },
	];

	const faqs = [
		"What is Studio designed for?",
		"Does Studio support multilingual audio and captions?",
		"Can I assign particular speakers to specific text fragments?",
		"Which file types can I upload?",
		"How does Studio integrate with other tools from your ecosystem?",
		"How do I edit video online with Studio?",
		"Can I add voiceover to video?",
		"How do I add music to video or audio?",
		"Can Studio transcribe audio to text or video to text?",
		"How do I remove background noise from audio or video?",
		"Can I merge videos or fix out-of-sync media?",
		"Does Studio include an online audio editor?"
	];

    const footerLinks = {
        RESEARCH: ['Text to Speech (TTS)', 'Speech to Text', 'Realtime Speech to Text', 'Voice Changer', 'Text to Sound Effects', 'Voice Cloning', 'Voice Isolator', 'AI Music Generator'],
        PRODUCTS: ['Studio', 'Agents Platform', 'Dubbing Studio', 'Voice Library', 'Image & Video', 'Audio Native', 'ElevenStudios', 'API', 'Voiceover Studio', 'ElevenReader', 'Mobile App'],
        SOLUTIONS: ['For Enterprise', 'For Teams', 'For Developers', 'For Startups', 'For Students', 'Retail and E-Commerce', 'Telecommunications', 'Financial Services', 'Technology', 'Customer Support', 'AI Voice Agents'],
        'EARN AS': ['Affiliate', 'Voice Actor', 'Data Partner', 'Commercial Partner'],
        RESOURCES: ['API Reference', 'Product Guides', 'Help Centre', 'Languages', 'Webinars', 'Discord'],
        COMPANY: ['About', 'Safety', 'Careers', 'Blog', 'Impact Program', 'Brand and Press Kit', 'Iconic Marketplace', 'Modern Slavery Policy', 'CCPA Notice']
    };
</script>

<div class="min-h-screen bg-white font-sans text-gray-900">
	<!-- Navbar -->
	<nav class="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
		<div class="container-custom flex h-16 items-center justify-between">
			<div class="flex items-center gap-8">
				<a href="/" class="flex items-center gap-2 font-semibold text-lg tracking-tight">
                    <span class="font-bold">II</span>ElevenLabs
                </a>
				<div class="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-600">
					<a href="#" class="hover:text-black flex items-center gap-1">Creative Platform <span class="opacity-50 text-[10px]">▼</span></a>
					<a href="#" class="hover:text-black flex items-center gap-1">Agents Platform <span class="opacity-50 text-[10px]">▼</span></a>
					<a href="#" class="hover:text-black flex items-center gap-1">Developers <span class="opacity-50 text-[10px]">▼</span></a>
					<a href="#" class="hover:text-black flex items-center gap-1">Resources <span class="opacity-50 text-[10px]">▼</span></a>
					<a href="#" class="hover:text-black">Enterprise</a>
					<a href="#" class="hover:text-black">Pricing</a>
				</div>
			</div>
			<div class="flex items-center gap-4 text-sm font-medium">
				<a href="#" class="text-gray-600 hover:text-black">Log in</a>
				<a href="#" class="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition">Sign up</a>
			</div>
		</div>
	</nav>

	<!-- Hero -->
	<section class="pt-20 pb-12">
		<div class="container-custom">
			<div class="flex flex-col lg:flex-row gap-12 mb-16">
				<div class="lg:w-1/2">
					<h1 class="text-5xl sm:text-6xl font-medium tracking-tight leading-[1.1] mb-8">
						The best AI audio models <br />
						in one powerful editor
					</h1>
					<a href="#" class="inline-block bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition">
						Try Studio for free
					</a>
				</div>
				<div class="lg:w-1/2 lg:pt-2">
					<p class="text-lg text-gray-600 leading-relaxed max-w-lg">
						Built for video creators, podcasters and audiobook authors — bring your stories to life with expressive AI voiceovers, music and sound effects, and real-world recordings.
					</p>
				</div>
			</div>

			<!-- Studio UI Mockup -->
			<div class="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-gray-50 aspect-[16/9] lg:aspect-[16/8]">
				<!-- Browser chrome/UI header -->
				<div class="absolute top-0 left-0 right-0 h-12 bg-white border-b border-gray-200 flex items-center justify-between px-4">
                    <div class="flex items-center gap-2">
                         <div class="w-3 h-3 rounded-full bg-red-400"></div>
                         <div class="w-3 h-3 rounded-full bg-yellow-400"></div>
                         <div class="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div class="text-xs font-medium text-gray-500">Studio 3.0</div>
                    <div class="w-16"></div>
                </div>
                
                <!-- Mockup Content -->
                <div class="absolute top-12 bottom-0 left-0 right-0 flex bg-white">
                    <!-- Sidebar -->
                    <div class="w-16 border-r border-gray-200 flex flex-col items-center py-4 gap-6">
                         <div class="w-8 h-8 rounded bg-gray-100"></div>
                         <div class="w-8 h-8 rounded bg-gray-100"></div>
                         <div class="w-8 h-8 rounded bg-gray-100"></div>
                         <div class="w-8 h-8 rounded bg-gray-100"></div>
                    </div>
                    <!-- Main Area -->
                    <div class="flex-1 flex flex-col">
                        <!-- Canvas/Preview -->
                        <div class="flex-1 bg-gray-50 p-8 flex items-center justify-center relative overflow-hidden">
                            <div class="absolute inset-0 flex">
                                <div class="w-1/2 p-8 flex flex-col justify-center">
                                    <h3 class="text-2xl font-semibold mb-4 text-gray-800">ElevenLabs proudly introduces Studio 3.0.</h3>
                                    <div class="space-y-2">
                                        <div class="h-2 bg-gray-200 rounded w-full"></div>
                                        <div class="h-2 bg-gray-200 rounded w-5/6"></div>
                                        <div class="h-2 bg-gray-200 rounded w-4/6"></div>
                                    </div>
                                </div>
                                <div class="w-1/2 relative">
                                    <img src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop" alt="Visual" class="w-full h-full object-cover rounded-lg shadow-lg" />
                                </div>
                            </div>
                        </div>
                        <!-- Timeline -->
                        <div class="h-32 border-t border-gray-200 bg-white p-2">
                            <div class="flex items-center justify-between mb-2 px-2">
                                <div class="flex gap-2">
                                    <div class="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-xs">▶</div>
                                    <div class="text-xs text-gray-500 mt-1">0:02 / 0:15</div>
                                </div>
                            </div>
                            <div class="relative h-16 bg-gray-50 rounded border border-gray-100 overflow-hidden">
                                <!-- Tracks -->
                                <div class="absolute top-1 left-0 right-0 h-6 bg-blue-100 mx-2 rounded border border-blue-200"></div>
                                <div class="absolute top-8 left-10 right-20 h-6 bg-orange-100 mx-2 rounded border border-orange-200"></div>
                                <!-- Playhead -->
                                <div class="absolute top-0 bottom-0 left-1/3 w-0.5 bg-black z-10 flex flex-col items-center">
                                    <div class="w-3 h-3 bg-black rotate-45 -mt-1.5"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
			</div>
            
            <div class="flex justify-center mt-6 gap-2">
                <button class="bg-white border border-gray-200 px-3 py-1 rounded-full text-xs font-medium shadow-sm flex items-center gap-1">
                    {@html Icons.Video} Video
                </button>
                <button class="text-gray-400 px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                    {@html Icons.Music} Audio
                </button>
            </div>
		</div>
	</section>

	<!-- Intro Section -->
	<section class="py-20 bg-white">
		<div class="container-custom text-center">
			<p class="text-sm text-gray-500 mb-4">Introducing Studio 3.0</p>
			<h2 class="text-4xl sm:text-5xl font-medium tracking-tight max-w-4xl mx-auto mb-12 leading-[1.1]">
				Create immersive experiences with Studio 3.0 — from podcasts and audiobooks to videos. Enhance your content with AI voices, music, and captions, all in one editor.
			</h2>

			<div class="flex flex-wrap justify-center gap-3 mb-12 max-w-4xl mx-auto">
				{#each features as feature}
					<div class="flex items-center gap-2 px-3 py-1.5 bg-gray-50 rounded-full border border-gray-100 text-sm font-medium text-gray-700">
						<span class="{feature.color || 'text-gray-900'}">{@html feature.icon}</span>
						{feature.title}
					</div>
				{/each}
			</div>

			<button class="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition flex items-center gap-2 mx-auto">
				<div class="w-5 h-5 fill-current">{@html Icons.Play}</div>
				Watch intro
			</button>
		</div>
	</section>

	<!-- Feature Scroll Section -->
	<section class="py-20 border-t border-gray-100">
		<div class="container-custom">
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
				<!-- Left Column: Text -->
				<div class="space-y-32 py-12">
					<div class="max-w-md">
						<h3 class="text-3xl font-medium mb-4">Add new voiceovers</h3>
						<p class="text-gray-600 leading-relaxed mb-6">
							Bring your script to life with natural-sounding voiceovers. Choose from over 10,000 voices - realistic accents, character voices, or professional narration - then edit recordings by simply editing the text.
						</p>
					</div>
                    
                    <div class="max-w-md">
						<h3 class="text-3xl font-medium mb-4">Generate bespoke background music with Eleven Music</h3>
						<p class="text-gray-600 leading-relaxed mb-6">
							Create music that feels custom-made for your content. Generate soundtracks in any genre or style, or let Studio auto-score your video with music created to match your scene.
						</p>
					</div>

                    <div class="max-w-md">
						<h3 class="text-3xl font-medium mb-4">Add custom sound effects</h3>
						<p class="text-gray-600 leading-relaxed mb-6">
							Enrich your content with any sound effect you can describe with a prompt. From subtle ambience to cinematic impact, add effects directly in Studio for a polished production.
						</p>
					</div>

                    <div class="max-w-md">
						<h3 class="text-3xl font-medium mb-4">Fix mistakes in seconds with Speech Correction</h3>
						<p class="text-gray-600 leading-relaxed mb-6">
							Edit spoken audio instantly using AI voice cloning. Just change the script, and Studio regenerates the same voice — no re-recording, no extra takes.
						</p>
					</div>

                    <div class="max-w-md">
						<h3 class="text-3xl font-medium mb-4">Clean up noisy audio with Voice Isolator</h3>
						<p class="text-gray-600 leading-relaxed mb-6">
							Remove background noise, reverb, and distractions with AI-powered noise reduction. Enhance audio quality so dialogue always sounds clear and professional.
						</p>
					</div>
				</div>

				<!-- Right Column: Sticky Visual -->
				<div class="relative hidden lg:block">
					<div class="sticky top-32 bg-gray-50 rounded-2xl border border-gray-100 p-6 h-[600px] overflow-hidden shadow-sm">
                        <div class="mb-4 text-xs font-medium text-gray-500 uppercase tracking-wider">Select a voice</div>
                        <div class="space-y-2">
                            {#each voices as voice}
                                <div class="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-100 hover:border-gray-200 transition cursor-pointer group">
                                    <div class="w-10 h-10 rounded-full {voice.color} flex-shrink-0"></div>
                                    <div class="flex-1 min-w-0">
                                        <div class="font-medium text-sm text-gray-900 group-hover:text-black">{voice.name}</div>
                                        <div class="text-xs text-gray-500 truncate">{voice.desc}</div>
                                    </div>
                                    <div class="w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center text-gray-300">
                                        {@html Icons.Play}
                                    </div>
                                </div>
                            {/each}
                        </div>
                        <!-- Fade out at bottom -->
                        <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none"></div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Bento Grid Section -->
	<section class="py-20 bg-white">
		<div class="container-custom">
			<div class="text-center max-w-3xl mx-auto mb-16">
				<h2 class="text-4xl font-medium mb-4">All your creative tools, in one seamless timeline</h2>
				<p class="text-gray-600">
					From captions and collaboration to video editing and multilingual audio, Studio 3.0 combines every tool you need to edit, produce, and share at scale.
				</p>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
				<!-- Timeline (Span 2) -->
				<div class="md:col-span-2 bg-gray-50 rounded-2xl p-8 min-h-[300px] relative overflow-hidden group border border-gray-100">
                    <div class="relative z-10">
					    <h3 class="text-xl font-medium mb-2">Timeline</h3>
					    <p class="text-sm text-gray-600 max-w-xs">Trim, merge, and edit audio and video with precision. Sync voiceovers, music, and sound effects on a single intuitive editing timeline.</p>
                    </div>
                    <div class="absolute bottom-0 right-0 w-3/4 h-3/4 bg-white rounded-tl-2xl shadow-xl border border-gray-200 transform translate-y-4 translate-x-4 group-hover:translate-x-2 group-hover:translate-y-2 transition duration-500">
                         <!-- Mock timeline UI -->
                         <div class="p-4 space-y-2">
                             <div class="h-8 bg-blue-100 rounded w-full"></div>
                             <div class="h-8 bg-orange-100 rounded w-2/3 ml-12"></div>
                             <div class="h-8 bg-purple-100 rounded w-1/2 ml-4"></div>
                         </div>
                    </div>
				</div>

				<!-- Video Support -->
				<div class="bg-gray-50 rounded-2xl p-8 min-h-[300px] relative overflow-hidden border border-gray-100">
                    <div class="relative z-10">
					    <h3 class="text-xl font-medium mb-2">Video support</h3>
					    <p class="text-sm text-gray-600">Upload MP4 or MOV files and enhance them with AI.</p>
                    </div>
                     <div class="absolute bottom-8 left-8 right-8 h-32 bg-blue-900 rounded-lg shadow-lg overflow-hidden mt-4">
                         <div class="w-full h-full opacity-50 bg-[url('https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
                         <div class="absolute inset-0 flex items-center justify-center">
                             <div class="w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white">▶</div>
                         </div>
                     </div>
				</div>

				<!-- Captions -->
				<div class="bg-gray-50 rounded-2xl p-8 min-h-[300px] relative overflow-hidden border border-gray-100">
                    <div class="relative z-10">
					    <h3 class="text-xl font-medium mb-2">Captions</h3>
					    <p class="text-sm text-gray-600">Generate captions in one click for accessibility and engagement.</p>
                    </div>
                    <div class="absolute bottom-8 left-8 flex gap-4">
                        <div class="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl shadow-lg flex items-center justify-center text-white text-xs font-bold p-2 text-center">Minimal Clean</div>
                        <div class="w-24 h-24 bg-white rounded-xl shadow-lg border border-gray-200 flex items-center justify-center text-gray-800 text-xs font-serif p-2 text-center">Vintage Cinema</div>
                    </div>
				</div>

				<!-- Public Project URLs -->
				<div class="bg-gray-50 rounded-2xl p-8 min-h-[300px] relative overflow-hidden border border-gray-100">
                    <div class="relative z-10">
					    <h3 class="text-xl font-medium mb-2">Public project URLs</h3>
					    <p class="text-sm text-gray-600">Share editable links for client or team feedback.</p>
                    </div>
                    <div class="absolute bottom-8 left-8 right-8 bg-white rounded-xl p-3 shadow-sm border border-gray-200 text-xs space-y-2">
                        <div class="flex items-center gap-2">
                            <div class="w-5 h-5 bg-blue-500 rounded-full"></div>
                            <span class="font-medium">Dulce Vetrovs</span>
                            <span class="text-gray-400">2h</span>
                        </div>
                        <div class="pl-7 text-gray-600">0:25 Should be 'Studio 3.0' here</div>
                         <div class="pl-7 flex items-center gap-2 mt-1">
                            <div class="w-4 h-4 bg-gray-800 rounded-full"></div>
                            <span class="font-medium text-[10px]">Kadin Carder</span>
                            <span class="text-gray-400 text-[10px]">30m</span>
                        </div>
                        <div class="pl-12 text-gray-600 text-[10px]">Good catch! Fixed</div>
                    </div>
				</div>

				<!-- Language Support -->
				<div class="bg-gray-50 rounded-2xl p-8 min-h-[300px] relative overflow-hidden border border-gray-100">
                    <div class="relative z-10">
					    <h3 class="text-xl font-medium mb-2">32+ Language support</h3>
					    <p class="text-sm text-gray-600">Produce audio and video in over 30 languages.</p>
                    </div>
                    <div class="absolute bottom-8 left-8 right-8 bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                        <div class="p-2 border-b border-gray-100 flex items-center gap-2">
                            <span class="text-lg">🇪🇸</span> <span class="text-sm font-medium">Spanish</span>
                        </div>
                        <div class="p-2 border-b border-gray-100 flex items-center gap-2">
                            <span class="text-lg">🇬🇧</span> <span class="text-sm font-medium">English</span>
                        </div>
                         <div class="p-2 border-b border-gray-100 flex items-center gap-2">
                            <span class="text-lg">🇩🇪</span> <span class="text-sm font-medium">German</span>
                        </div>
                         <div class="p-2 flex items-center gap-2">
                            <span class="text-lg">🇫🇷</span> <span class="text-sm font-medium">French</span>
                        </div>
                    </div>
				</div>
			</div>
		</div>
	</section>

	<!-- Carousel Section -->
	<section class="py-20">
		<div class="container-custom">
			<div class="text-center max-w-3xl mx-auto mb-16">
				<h2 class="text-4xl font-medium mb-4">Built for every creator</h2>
				<p class="text-gray-600">
					From video creators to podcasters and audiobook authors, Studio 3.0 adapts to every workflow — combining AI audio editing, video editing, and professional sound design.
				</p>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <!-- Card 1 -->
                <div class="group cursor-pointer">
                    <div class="aspect-square rounded-2xl overflow-hidden mb-4 relative">
                        <img src="https://images.unsplash.com/photo-1478737270239-2f02b77ac618?q=80&w=2070&auto=format&fit=crop" alt="Audiobook" class="w-full h-full object-cover transition duration-500 group-hover:scale-105" />
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>
                    <h3 class="text-lg font-medium mb-2">Audiobook authors</h3>
                    <p class="text-sm text-gray-600 leading-relaxed">Revise narration instantly with text-based editing, enrich audio with custom soundscapes, and generate cinematic audiobook trailers.</p>
                </div>

                 <!-- Card 2 -->
                <div class="group cursor-pointer">
                    <div class="aspect-square rounded-2xl overflow-hidden mb-4 relative">
                        <img src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=2070&auto=format&fit=crop" alt="Podcasters" class="w-full h-full object-cover transition duration-500 group-hover:scale-105" />
                         <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>
                    <h3 class="text-lg font-medium mb-2">Podcasters</h3>
                    <p class="text-sm text-gray-600 leading-relaxed">Clean up dialogue with noise removal, fix mistakes without re-recording, and design custom theme music or soundscapes for every episode.</p>
                </div>

                 <!-- Card 3 -->
                <div class="group cursor-pointer">
                    <div class="aspect-square rounded-2xl overflow-hidden mb-4 relative">
                        <img src="https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=2000&auto=format&fit=crop" alt="Filmmakers" class="w-full h-full object-cover transition duration-500 group-hover:scale-105" />
                         <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>
                    <h3 class="text-lg font-medium mb-2">AI filmmakers</h3>
                    <p class="text-sm text-gray-600 leading-relaxed">Combine video, audio, and AI-generated music to prototype scenes, add voiceovers, and experiment with sound design inside a single editor.</p>
                </div>
            </div>
		</div>
	</section>

	<!-- API Section -->
	<section class="py-20 bg-gray-50">
		<div class="container-custom">
			<div class="text-center max-w-3xl mx-auto mb-16">
				<h2 class="text-4xl font-medium mb-4">Everything in Studio, available through our API</h2>
				<p class="text-gray-600">
					Access the same voices, music, and audio tools behind Studio 3.0 — programmatically, at scale, in any workflow.
				</p>
			</div>

			<div class="max-w-3xl mx-auto bg-white rounded-xl shadow-sm border border-gray-200 p-6 overflow-x-auto">
				<pre class="text-sm font-mono leading-relaxed text-gray-800">
<span class="text-purple-600">import</span> &#123; ElevenLabsClient &#125; <span class="text-purple-600">from</span> <span class="text-green-600">"@elevenlabs/elevenlabs-js"</span>;
<span class="text-purple-600">const</span> client = <span class="text-purple-600">new</span> <span class="text-yellow-600">ElevenLabsClient</span>(&#123; apiKey: <span class="text-green-600">"YOUR_API_KEY"</span> &#125;)
<span class="text-purple-600">await</span> client.textToSpeech.<span class="text-blue-600">convert</span>(<span class="text-green-600">"JBFqnCBsd6RMkjVDRZzb"</span>, &#123;
  outputFormat: <span class="text-green-600">"mp3_44100_128"</span>,
  text: <span class="text-green-600">"The first move is what sets everything in motion."</span>,
  modelId: <span class="text-green-600">"eleven_multilingual_v2"</span>,
&#125;);</pre>
			</div>
		</div>
	</section>

	<!-- FAQ Section -->
	<section class="py-20">
		<div class="container-custom">
			<h2 class="text-4xl font-medium mb-12">Frequently asked questions</h2>
			<div class="border-t border-gray-200">
				{#each faqs as faq}
					<details class="group border-b border-gray-200">
						<summary class="flex items-center justify-between py-6 cursor-pointer list-none hover:text-gray-600 transition">
							<span class="text-lg font-medium">{faq}</span>
							<span class="transform group-open:rotate-45 transition-transform duration-200">
								{@html Icons.Plus}
							</span>
						</summary>
						<div class="pb-6 text-gray-600">
							<p>This is a placeholder answer for the FAQ question. The actual content would go here.</p>
						</div>
					</details>
				{/each}
			</div>
		</div>
	</section>

	<!-- Bottom CTA -->
	<section class="py-24 bg-gray-50">
		<div class="container-custom flex flex-col md:flex-row items-center justify-between gap-8">
			<h2 class="text-4xl font-medium">The most realistic voice AI platform</h2>
			<div class="flex items-center gap-4">
				<a href="#" class="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition">
					Create an AI agent
				</a>
				<a href="#" class="bg-white border border-gray-200 text-black px-6 py-3 rounded-full font-medium hover:bg-gray-50 transition">
					Talk to sales
				</a>
			</div>
		</div>
	</section>

	<!-- Footer -->
	<footer class="bg-white pt-20 pb-10 border-t border-gray-100 text-xs">
		<div class="container-custom">
			<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-20">
                {#each Object.entries(footerLinks) as [category, links]}
                    <div>
                        <h4 class="font-bold text-gray-400 mb-6 tracking-wider">{category}</h4>
                        <ul class="space-y-3">
                            {#each links as link}
                                <li><a href="#" class="text-gray-600 hover:text-black transition">{link}</a></li>
                            {/each}
                        </ul>
                    </div>
                {/each}
			</div>

			<div class="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-100 gap-4">
				<div class="flex items-center gap-2 font-semibold text-lg tracking-tight text-gray-400">
                    <span class="font-bold">II</span>ElevenLabs
                </div>
                
                <div class="flex flex-wrap justify-center gap-6 text-gray-500">
                    <a href="#" class="hover:text-black">Privacy</a>
                    <a href="#" class="hover:text-black">Terms</a>
                    <a href="#" class="hover:text-black">Safety</a>
                    <a href="#" class="hover:text-black">Modify cookies</a>
                </div>

                 <div class="flex items-center gap-2 text-gray-500">
                    <div class="w-2 h-2 rounded-full bg-green-500"></div>
                    <span>ENGLISH</span>
                </div>
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

