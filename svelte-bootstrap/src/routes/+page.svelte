<script>
	import Banner from '$lib/components/Front/Index/Banner.svelte';
	import Contact from '$lib/components/Front/Index/Contact.svelte';
	import Faq from '$lib/components/Front/Index/Faq.svelte';
	import Features from '$lib/components/Front/Index/Features.svelte';
	import OurTeam from '$lib/components/Front/Index/OurTeam.svelte';
	import TailorArea from '$lib/components/Front/Index/TailorArea.svelte';
	import Testimonials from '$lib/components/Front/Index/Testimonials.svelte';
	import Unlock from '$lib/components/Front/Index/Unlock.svelte';
</script>

<svelte:head>
	<title>Home | Trezo - Svelte & Bootsrap 5 Admin Dashboard Template</title>
</svelte:head>

<Banner />
<Features />
<TailorArea />
<Testimonials />
<OurTeam className="pt-125" />
<Faq />
<Contact />
<Unlock />
