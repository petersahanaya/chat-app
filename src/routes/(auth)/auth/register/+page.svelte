<script lang='ts'>
    import FaGoogle from 'svelte-icons/fa/FaGoogle.svelte'
    import { enhance } from '$app/forms';

    export let data : any;

    $: console.log(data)
</script>


<main class='w-screen h-screen bg-slate-100 flex flex-col justify-center items-center'>
    <form method="POST" action="?/register" use:enhance class='flex flex-col justify-center items-center gap-4'>
        <nav class="mb-[3rem] w-[17rem]">
            <h4 class="text-4xl text-stone-800 mb-3">Register</h4>
            <p class='text-[.8rem] text-stone-600'>Create and account and interact with your friend's</p>
        </nav>
        <section class="flex justify-around items-center gap-1 bg-white transition-[200ms] border-[.4px] border-stone-600 rounded-lg w-[17rem] hover:bg-stone-200 p-3 ">
            <p class="text-stone-700">Login with</p>
            <button class="w-5 h-5 text-stone-700">
                <FaGoogle/>
            </button>
        </section>
        <section class='flex flex-col justify-center gap-1'>
            <label class="text-stone-600" for="username">Username</label>
            <input minlength="4" required name='username'  class="bg-white rounded-md p-3 w-[17rem] placeholder:text-[.8rem]" id="username" type="text" placeholder="e.g sarah wong">
        </section>
        <section class='flex flex-col justify-center gap-1'>
            <label class="text-stone-600" for="username">Email</label>
            <input minlength="8" required name='email' type='email' class="bg-white rounded-md p-3 w-[17rem] placeholder:text-[.8rem]" id="username"  placeholder="e.g sarah@example.com">
        </section>
        <section class='flex flex-col justify-center gap-1'>
            <label class="text-stone-600" for="password">Password</label>
            <input minlength="4" required name="password" type='password' class="bg-white rounded-md p-3 w-[17rem] placeholder:text-[.8rem]" placeholder="e.g secret">
        </section>
            <button type="submit" class="bg-sky-500 text-white p-3 w-[12rem] rounded-lg text-[.9rem] transition-[200ms] hover:bg-sky-700">Submit</button>

        <section class='mt-[1rem] flex justify-around items-center gap-3'>
            <p class='text-[.9rem] text-stone-700'>Already have an account?</p>
            <a class='text-sky-500 border-b-[1px] border-b-sky-600' href="/auth/login">Sign-in</a>
        </section>
    </form>
</main>