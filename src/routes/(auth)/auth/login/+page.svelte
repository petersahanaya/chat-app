<script lang='ts'>
	import { enhance } from "$app/forms";

</script>

<main class='w-screen h-screen bg-slate-100 flex flex-col justify-center items-center'>
    <form method="POST" action="?/login" use:enhance class='flex flex-col justify-center items-center gap-4'>
        <nav class="mb-[3rem] w-[17rem]">
            <h4 class="text-4xl text-stone-800 mb-3">Login</h4>
            <p class='text-[.8rem] text-stone-600'>Login and interact with your friend's</p>
        </nav>
        <section class='flex flex-col justify-center gap-1'>
            <label class="text-stone-600" for="username">Username</label>
            <input name="username" required class="bg-white rounded-md p-3 w-[17rem] placeholder:text-[.8rem]" id="username" type="text" placeholder="e.g sarah wong">
        </section>
        <section class='flex flex-col justify-center gap-1'>
            <label class="text-stone-600" for="password">Password</label>
            <input required class="bg-white rounded-md p-3 w-[17rem] placeholder:text-[.8rem]" name="password" type="password" placeholder="e.g secret">
        </section>
            <button type="submit" class="bg-sky-500 text-white p-3 w-36 rounded-lg text-[.9rem] transition-[200ms] hover:bg-sky-700">Submit</button>

        <section class='mt-[1rem] flex justify-around items-center gap-3'>
            <p class='text-[.9rem] text-stone-700'>Not register yet?</p>
            <a class='text-sky-500 border-b-[1px] border-b-sky-600' href="/auth/register">Create an Account</a>
        </section>
    </form>
</main>