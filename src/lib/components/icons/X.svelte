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
	<path d="M18 6 6 18" />
	<path d="m6 6 12 12" />
</svg>