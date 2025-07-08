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
	<path d="M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Z" />
	<path d="M14 2H10a2 2 0 0 0-2 2v3h8V4a2 2 0 0 0-2-2Z" />
</svg>