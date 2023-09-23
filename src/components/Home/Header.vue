<template>
  <div>
    <div class="navbar bg-base-100 shadow px-4">
      <div class="flex-1 font-bold">
        <router-link to="/">
          Timer App
        </router-link>
      </div>
      <div class="flex-none">
        <button class="btn btn-outline btn-primary mr-4">
          <router-link to="/signup">
            会員登録
          </router-link>
        </button>
        <button class="btn btn-ghost">
          <router-link to="/login">
            ログイン
          </router-link>
        </button>
      </div>
    </div>
  </div>
</template>
