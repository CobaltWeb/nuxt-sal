<script setup lang="ts"></script>

<template>
  <main>
    <section data-sal="fade">
      <div>fade</div>
    </section>

    <section data-sal="slide-up">
      <div>slide-up</div>
    </section>

    <section data-sal="slide-down">
      <div>slide-down</div>
    </section>

    <section data-sal="slide-left">
      <div>slide-left</div>
    </section>

    <section data-sal="slide-right">
      <div>slide-right</div>
    </section>

    <section data-sal="zoom-in">
      <div>zoom-in</div>
    </section>

    <section data-sal="zoom-out">
      <div>zoom-out</div>
    </section>

    <section data-sal="flip-up">
      <div>flip-up</div>
    </section>

    <section data-sal="flip-down">
      <div>flip-up</div>
    </section>

    <section data-sal="flip-left">
      <div>flip-left</div>
    </section>

    <section data-sal="flip-right">
      <div>flip-right</div>
    </section>
  </main>
</template>

<style>
body {
  margin: 0;
  background-color: #0a0a0f;
  color: white;
}

main {
  display: flex;
  flex-direction: column;
  row-gap: 10vw;
  align-items: center;
}

section {
  height: 40vh;
  max-width: 80vw;
  width: 100%;
  background-color: #212134;
  display: grid;
  place-items: center;
}
</style>
