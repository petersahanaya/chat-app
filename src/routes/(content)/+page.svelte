<script lang='ts'>
	import type { UserProps } from "$lib/stores/auth";


    export let data : any;

    const { user } : {user : UserProps} = data
</script>

<main>Hello {user?.username ?? ""}</main>