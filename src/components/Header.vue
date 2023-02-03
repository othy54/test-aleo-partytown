<template>
    <header class="section relative">
        <div class="flex justify-between mt-4">
            <div>Logo</div>
            <div class="cursor-pointer" @click="toggleMenu">Menu</div>
        </div>
        <div class="menu-wrapper fixed left-0 top-0 overflow-hidden w-full bg-slate-600" :class="isMenuActive ? 'h-screen' : 'h-0' ">
            <div class="w-full h-full section">
                <div class="absolute right-8 top-4 cursor-pointer" @click="toggleMenu">Close</div>
                <ul class="menu-list">
                    <li>
                        <div>Home</div>
                    </li>
                    <li>
                        <div>
                            About
                        </div>
                    </li>
                    <li>
                        <div>
                            Projects
                        </div>
                    </li>
                    <li>
                        <div>
                            Contact
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>
<script lang="ts" setup>

import { ref } from 'vue';

let isMenuActive = ref(false);

let toggleMenu = () => {
    isMenuActive.value = !isMenuActive.value;

    if(isMenuActive.value) {
        animReveal()
    }
}

let animReveal = () => {
    let getGsap = () => import('gsap');
    getGsap().then(({default: gsap}) => {
        gsap.fromTo('.menu-list > li > div', {
        y: '100%'
        }, {
            y: 0,
            stagger: 0.1
        })
    })
}


</script>
<style lang="postcss" scoped>

.menu-wrapper {
    transition: height 0.3s;
}

.menu-list {
    margin-top: 120px;

    & > li {
        color: white;
        font-size: 100px;
        overflow: hidden;
    }
}

</style>
