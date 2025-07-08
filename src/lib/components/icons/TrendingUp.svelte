<script lang="ts">
	interface Props {
		class?: string;
		size?: number;
	}
	
	let { class: className = "", size = 24 }: Props = $props();
</script>

<svg
	width={size}
	height={size}
	viewBox="0 0 24 24"
	fill="none"
	stroke="currentColor"
	stroke-width="2"
	stroke-linecap="round"
	stroke-linejoin="round"
	class={className}
>
	<polyline points="22,7 13.5,15.5 8.5,10.5 2,17" />
	<polyline points="16,7 22,7 22,13" />
</svg>