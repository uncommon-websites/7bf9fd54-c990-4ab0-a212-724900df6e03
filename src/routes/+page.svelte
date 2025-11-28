<script>
  import { onMount } from 'svelte';

  let isMenuOpen = false;

  const toggleMenu = () => {
    isMenuOpen = !isMenuOpen;
  };

  // Mock data for logos
  const logos = [
    { name: 'Your Firm\'s Data', icon: 'server' },
    { name: 'LSEG', icon: 'globe' },
    { name: 'Dow Jones', icon: 'newspaper' },
    { name: 'FactSet', icon: 'database' },
    { name: 'Capital IQ', icon: 'chart-bar' },
    { name: 'PitchBook', icon: 'book-open' },
    { name: 'Preqin', icon: 'search' },
    { name: 'Real-time Web & News', icon: 'rss' },
    { name: 'SEC Filings', icon: 'file-text' },
    { name: 'Transcripts', icon: 'phone' },
    { name: 'Investor Presentations', icon: 'presentation' },
    { name: 'International Filings', icon: 'globe-alt' }
  ];

  const features = [
    {
      title: 'Benchmark Precedent Transactions',
      items: ['Running workflow...', 'Identifying companies', 'Searching sources', 'Retrieving company metrics', 'Creating table', 'Finalizing citations...'],
      active: true
    },
    {
      title: 'Tariff impact on top manufacturing firms',
      items: ['Found 12 sources', 'Currently, Caterpillar, Boeing, and Ford face tariff pressures among leading U.S. manufacturers.'],
      table: [
        { company: 'Company', revenue: '% Revenue from Int.' },
        { company: 'General Electric', revenue: '████████' },
        { company: 'Boeing', revenue: '████████' },
        { company: 'Caterpillar', revenue: '████████' }
      ]
    },
    {
      title: 'Generating Powerpoint...',
      content: 'Here is your requested deck. I customized your presentation template and included file with the backup data.',
      files: ['TMT Market Overview.pptx', 'Tech Multiples Backup.xlsx']
    }
  ];
</script>

<div class="font-sans text-[#111] bg-white">
  <!-- Navigation -->
  <nav class="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
    <div class="container mx-auto px-6 h-20 flex items-center justify-between">
      <a href="/" class="text-2xl font-bold tracking-tight">rogo</a>
      
      <div class="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600">
        <a href="#product" class="hover:text-black transition-colors">Product</a>
        <a href="#security" class="hover:text-black transition-colors">Security</a>
        <a href="#company" class="hover:text-black transition-colors">Company</a>
        <a href="#news" class="hover:text-black transition-colors">News</a>
        <a href="#careers" class="hover:text-black transition-colors">Careers</a>
      </div>

      <div class="hidden md:flex items-center space-x-6">
        <a href="/login" class="text-sm font-medium hover:text-black text-gray-600">Log In</a>
        <a href="/demo" class="bg-black text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">Request Demo</a>
      </div>

      <button class="md:hidden" on:click={toggleMenu}>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  </nav>

  <!-- Hero Section -->
  <section class="pt-32 pb-20 px-6">
    <div class="container mx-auto text-center max-w-4xl">
      <h1 class="text-5xl md:text-7xl font-serif mb-6 leading-tight">
        Stop Wasting Your Team's Time
      </h1>
      <p class="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
        Accelerate firm productivity, automate workflows, and unify financial data at scale with one secure platform
      </p>
      
      <div class="relative inline-block group">
        <div class="absolute -inset-1 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
        <a href="/demo" class="relative bg-black text-white px-8 py-4 rounded-full text-base font-medium hover:bg-gray-800 transition-all flex items-center gap-2">
          Request a Demo
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
        
        <!-- Decorative brackets -->
        <span class="absolute -top-2 -left-4 text-3xl font-light text-gray-300">┌</span>
        <span class="absolute -bottom-2 -right-4 text-3xl font-light text-gray-300">┘</span>
      </div>
    </div>

    <!-- Hero Image -->
    <div class="container mx-auto mt-20 relative">
      <div class="rounded-2xl overflow-hidden shadow-2xl relative aspect-[21/9]">
        <img src="/generated/image-low-angle-view-of-modern-glass-skyscrape.webp" alt="Modern skyscrapers" class="w-full h-full object-cover" />
        
        <!-- Floating UI Element -->
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-lg">
          <div class="bg-white/95 backdrop-blur rounded-xl shadow-lg p-2 flex items-center gap-3 border border-gray-100">
            <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span class="text-gray-400 text-sm flex-1">Analyze impact...</span>
            <button class="w-8 h-8 rounded-lg bg-[#15803d] flex items-center justify-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Value Proposition -->
  <section class="py-24 bg-white">
    <div class="container mx-auto px-6">
      <div class="max-w-4xl mb-24">
        <h2 class="text-3xl md:text-5xl font-serif leading-tight text-gray-900">
          Just as Bloomberg digitized financial data in the 1980s, <span class="font-semibold">Rogo is now transforming financial workflows.</span>
        </h2>
      </div>

      <div class="grid md:grid-cols-2 gap-16 items-center">
        <div class="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
           <img src="/generated/image-a-moody-nighttime-architectural-photogra.webp" alt="Office building at night" class="w-full h-full object-cover" />
           
           <!-- Floating UI Overlay -->
           <div class="absolute inset-0 flex items-center justify-center p-8">
             <div class="bg-white rounded-xl shadow-2xl p-6 w-full max-w-md">
               <div class="flex items-center gap-3 mb-4">
                 <div class="w-8 h-8 rounded bg-gray-100 flex items-center justify-center">
                   <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                   </svg>
                 </div>
                 <div class="flex-1 bg-gray-50 h-10 rounded flex items-center px-3 text-sm text-gray-500">
                   <span class="w-5 h-5 bg-[#15803d] rounded mr-2 flex items-center justify-center text-white text-xs">
                     <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                       <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd" />
                     </svg>
                   </span>
                   Models & Spreadsheets
                 </div>
               </div>
               <div class="h-2 bg-gray-100 rounded w-3/4 animate-pulse"></div>
               <div class="h-2 bg-gray-100 rounded w-1/2 mt-2 animate-pulse"></div>
             </div>
           </div>
        </div>

        <div>
          <h3 class="text-3xl font-serif mb-8">An Integrated, Secure Platform Built to Drive Your Firm Forward</h3>
          
          <div class="space-y-6">
            {#each ['All your content in one place', 'Transparent, auditable sources', 'Automate your workflows', 'Proprietary document interrogation'] as item, i}
              <div class="flex items-start gap-4 group cursor-pointer">
                <div class="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-sm font-medium text-gray-400 group-hover:border-black group-hover:text-black transition-colors">
                  {i + 1}
                </div>
                <p class="text-lg text-gray-600 group-hover:text-black transition-colors pt-0.5">{item}</p>
              </div>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Workflows Section -->
  <section class="py-24 bg-white">
    <div class="container mx-auto px-6">
      <div class="mb-16">
        <h2 class="text-4xl md:text-5xl font-serif mb-4">Streamline & Automate<br/>Your Workflows</h2>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <!-- Card 1 -->
        <div class="group">
          <div class="bg-[#0f172a] p-6 rounded-xl aspect-[4/5] relative overflow-hidden mb-6 flex flex-col">
            <div class="bg-white rounded-lg p-3 mb-4 shadow-sm flex items-center gap-2 text-sm font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Benchmark Precedent Transactions
            </div>
            <div class="bg-white flex-1 rounded-lg p-4 shadow-sm text-sm space-y-3 font-mono text-gray-600">
              <div class="flex items-center gap-2 text-[#15803d]">
                <span class="w-4 h-4 rounded bg-[#15803d] flex items-center justify-center text-white text-[10px]">✓</span>
                Running workflow...
              </div>
              {#each ['Identifying companies', 'Searching sources', 'Retrieving company metrics', 'Creating table'] as step}
                <div class="flex items-center gap-2 pl-6">
                  <span class="w-1 h-1 rounded-full bg-gray-300"></span>
                  {step}
                </div>
              {/each}
              <div class="flex items-center gap-2 pl-6 animate-pulse">
                <span class="w-3 h-3 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin"></span>
                Finalizing citations...
              </div>
            </div>
          </div>
          <h3 class="text-xl font-serif mb-2">Firm-Specific Workflows</h3>
          <p class="text-sm text-gray-600 leading-relaxed">Create and automate workflows tailored to your needs, reducing manual tasks and integrating seamlessly with your existing tools. Optimize processes for research, analysis, and reporting to improve efficiency and accuracy.</p>
        </div>

        <!-- Card 2 -->
        <div class="group">
          <div class="bg-[#0f172a] p-6 rounded-xl aspect-[4/5] relative overflow-hidden mb-6 flex flex-col">
            <div class="bg-white rounded-lg p-3 mb-4 shadow-sm text-sm font-medium">
              Tariff impact on top manufacturing firms
            </div>
            <div class="bg-white flex-1 rounded-lg p-4 shadow-sm text-xs space-y-3">
              <div class="flex items-center gap-2 text-[#15803d] font-medium">
                <span class="w-4 h-4 rounded bg-[#15803d] flex items-center justify-center text-white text-[10px]">S</span>
                Found 12 sources
              </div>
              <p class="text-gray-600">Currently, Caterpillar, Boeing, and Ford face tariff pressures among leading U.S. manufacturers.</p>
              <div class="border rounded overflow-hidden">
                <div class="bg-gray-50 p-2 border-b grid grid-cols-2 font-medium">
                  <span>Company</span>
                  <span>% Revenue</span>
                </div>
                {#each ['General Electric', 'Boeing', 'Caterpillar'] as company}
                  <div class="p-2 border-b last:border-0 grid grid-cols-2 items-center">
                    <span>{company}</span>
                    <span class="h-2 bg-gray-200 rounded w-16"></span>
                  </div>
                {/each}
              </div>
            </div>
          </div>
          <h3 class="text-xl font-serif mb-2">AI Table Interface</h3>
          <p class="text-sm text-gray-600 leading-relaxed">Organize and manage data effortlessly with an interactive table interface. Sort, filter, and update information in real-time, enabling structured analysis and seamless decision-making.</p>
        </div>

        <!-- Card 3 -->
        <div class="group">
          <div class="bg-[#0f172a] p-6 rounded-xl aspect-[4/5] relative overflow-hidden mb-6 flex flex-col">
            <div class="bg-white rounded-lg p-3 mb-4 shadow-sm flex items-center gap-2 text-sm font-medium">
              <span class="w-4 h-4 rounded bg-[#15803d] flex items-center justify-center text-white text-[10px]">P</span>
              Generating Powerpoint...
            </div>
            <div class="bg-white flex-1 rounded-lg p-4 shadow-sm text-xs space-y-4">
              <p class="text-gray-600">Here is your requested deck. I customized your presentation template and included file with the backup data.</p>
              <div class="space-y-2">
                <div class="flex items-center gap-2 p-2 border rounded bg-gray-50">
                  <span class="w-4 h-4 bg-orange-500 rounded text-white text-[8px] flex items-center justify-center">P</span>
                  <span class="flex-1 truncate">TMT Market Overview.pptx</span>
                  <svg class="w-3 h-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                </div>
                <div class="flex items-center gap-2 p-2 border rounded bg-gray-50">
                  <span class="w-4 h-4 bg-green-600 rounded text-white text-[8px] flex items-center justify-center">X</span>
                  <span class="flex-1 truncate">Tech Multiples Backup.xlsx</span>
                  <svg class="w-3 h-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                </div>
              </div>
            </div>
          </div>
          <h3 class="text-xl font-serif mb-2">Material Creation</h3>
          <p class="text-sm text-gray-600 leading-relaxed">Generate reports, summaries, and presentations with AI-powered automation. Transform raw data into polished, professional materials while ensuring clarity and consistency.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Trusted Data Section -->
  <section class="py-24 bg-white">
    <div class="container mx-auto px-6">
      <div class="max-w-2xl mb-16">
        <h2 class="text-4xl font-serif mb-6">Trusted Data</h2>
        <p class="text-gray-600 text-sm leading-relaxed">
          We partner with trusted data providers to bring the highest-quality financial information to our platform. Their expertise, combined with Rogo's technology, gives customers the clarity and confidence they need to move fast.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {#each logos as logo}
          <div class="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <div class="w-10 h-10 bg-white rounded shadow-sm flex items-center justify-center mr-4 text-gray-700">
              <!-- Placeholder icons -->
              {#if logo.icon === 'server'}
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>
              {:else if logo.icon === 'globe'}
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
              {:else}
                <div class="w-5 h-5 bg-gray-300 rounded-sm"></div>
              {/if}
            </div>
            <span class="font-serif text-sm font-medium">{logo.name}</span>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- AI Section -->
  <section class="py-24 bg-white">
    <div class="container mx-auto px-6">
      <div class="max-w-2xl mb-16">
        <h2 class="text-4xl md:text-5xl font-serif mb-4">AI That Learns How Your<br/>Firm Thinks and Works</h2>
      </div>

      <div class="grid md:grid-cols-3 gap-6">
        <!-- Grid Item 1 -->
        <div class="bg-gray-50 p-8 rounded-xl min-h-[400px] flex flex-col justify-between">
          <div>
            <h3 class="font-serif text-lg mb-8">Integrations</h3>
            <div class="grid grid-cols-2 gap-4 max-w-[200px] mx-auto opacity-80">
              <div class="bg-white p-3 rounded shadow-sm flex items-center justify-center"><div class="w-6 h-6 bg-gray-200 rounded"></div></div>
              <div class="bg-white p-3 rounded shadow-sm flex items-center justify-center"><div class="w-6 h-6 bg-blue-500 rounded"></div></div>
              <div class="bg-white p-3 rounded shadow-sm flex items-center justify-center"><div class="w-6 h-6 bg-green-500 rounded"></div></div>
              <div class="bg-white p-3 rounded shadow-sm flex items-center justify-center"><div class="w-6 h-6 bg-red-500 rounded"></div></div>
            </div>
          </div>
          <p class="text-xs text-gray-500 mt-8">Connect seamlessly with your existing providers and file systems. Enhance your workflow by interacting with internal/external data sources.</p>
        </div>

        <!-- Grid Item 2 -->
        <div class="bg-gray-50 p-8 rounded-xl min-h-[400px] flex flex-col justify-between">
          <div>
            <h3 class="font-serif text-lg mb-8">Prompt Library</h3>
            <div class="bg-white rounded-lg p-4 shadow-sm text-[10px] space-y-2 max-w-[240px] mx-auto">
              <div class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-gray-300"></span>Public Company Comp Profile</div>
              <div class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-gray-300"></span>Meeting Prep</div>
              <div class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-gray-300"></span>Private Company Profile</div>
              <div class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-gray-300"></span>Partners List</div>
              <div class="flex items-center gap-2 font-medium text-green-700"><span class="w-2 h-2 rounded-full bg-green-500"></span>Financial Sponsor Overview</div>
            </div>
          </div>
          <p class="text-xs text-gray-500 mt-8">Choose from our library of professionally written prompts aimed at automating your common workflows end-to-end.</p>
        </div>

        <!-- Grid Item 3 -->
        <div class="bg-gray-50 p-8 rounded-xl min-h-[400px] flex flex-col justify-between">
          <div>
            <h3 class="font-serif text-lg mb-8">Guided Implementation</h3>
            <div class="flex justify-center -space-x-2">
              <div class="w-10 h-10 rounded-full bg-blue-200 border-2 border-white"></div>
              <div class="w-10 h-10 rounded-full bg-purple-200 border-2 border-white"></div>
              <div class="w-10 h-10 rounded-full bg-indigo-200 border-2 border-white"></div>
            </div>
          </div>
          <p class="text-xs text-gray-500 mt-8">White-glove engagement and implementation with our team of ex-bankers and private equity investors.</p>
        </div>

        <!-- Grid Item 4 -->
        <div class="bg-gray-50 p-8 rounded-xl min-h-[400px] flex flex-col justify-between">
          <div>
            <h3 class="font-serif text-lg mb-8">Custom-Trained Models</h3>
            <div class="flex flex-col items-center gap-2">
              <div class="grid grid-cols-4 gap-1 opacity-40">
                {#each Array(8) as _}
                  <div class="w-6 h-6 bg-gray-300 rounded-sm"></div>
                {/each}
              </div>
              <div class="h-8 w-px bg-gray-300"></div>
              <div class="w-8 h-8 bg-[#0f172a] rounded flex items-center justify-center text-white text-xs">AI</div>
            </div>
          </div>
          <p class="text-xs text-gray-500 mt-8">Custom-trained LLMs on your firm's data, using professional stylistic preferences. These allow for a precision standard of investment banking.</p>
        </div>

        <!-- Grid Item 5 -->
        <div class="bg-gray-50 p-8 rounded-xl min-h-[400px] flex flex-col justify-between">
          <div>
            <h3 class="font-serif text-lg mb-8">Governance & Permissions</h3>
            <div class="bg-white p-4 rounded shadow-sm max-w-[200px] mx-auto">
              <div class="space-y-2">
                <div class="h-1 bg-gray-200 rounded w-full"></div>
                <div class="h-1 bg-gray-200 rounded w-3/4"></div>
                <div class="h-1 bg-gray-200 rounded w-1/2"></div>
              </div>
            </div>
          </div>
          <p class="text-xs text-gray-500 mt-8">Granular permission controls, role-based access management, comprehensive audit trails, and customizable governance policies to streamline compliance and safeguard your data.</p>
        </div>

        <!-- Grid Item 6 -->
        <div class="bg-gray-50 p-8 rounded-xl min-h-[400px] flex flex-col justify-between">
          <div>
            <h3 class="font-serif text-lg mb-8">Single Tenant Deployment</h3>
            <div class="flex flex-col items-center">
              <div class="w-10 h-10 bg-[#0f172a] rounded flex items-center justify-center text-white mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
              </div>
              <div class="grid grid-cols-3 gap-2 opacity-30">
                 {#each Array(9) as _}
                  <div class="w-4 h-4 border border-gray-400 rounded-sm"></div>
                {/each}
              </div>
            </div>
          </div>
          <p class="text-xs text-gray-500 mt-8">Flexible deployment options to meet your security and infrastructure needs.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-white py-12 border-t border-gray-100">
    <div class="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
      <div class="text-2xl font-bold tracking-tight">rogo</div>
      <div class="text-sm text-gray-500">© 2024 Rogo. All rights reserved.</div>
      <div class="flex gap-6 text-sm text-gray-500">
        <a href="#" class="hover:text-black">Privacy Policy</a>
        <a href="#" class="hover:text-black">Terms of Service</a>
      </div>
    </div>
  </footer>
</div>

<style>
  /* Custom utility for aspect ratios if Tailwind plugin not present */
  .aspect-\[21\/9\] {
    aspect-ratio: 21/9;
  }
  .aspect-\[4\/3\] {
    aspect-ratio: 4/3;
  }
  .aspect-\[4\/5\] {
    aspect-ratio: 4/5;
  }
</style>
