<script setup lang="ts">
import { useField, useForm } from 'vee-validate';
import { object, string, setLocale } from 'yup';

setLocale({
  mixed: {
    default: '不正な値です。',
    required: ({ label }) => `${label}は必須の項目です。`,
  },
  string: {
    email: 'メールアドレスの形式ではありません。'
  },
})
const schema = object({
  name: string()
    .required()
    .label('名前'),
  email: string()
    .required('')
    .email()
    .label('メールアドレス'),
  password: string()
    .required('')
    .label('パスワード')
});

const { errors, meta } = useForm({
  validationSchema: schema,
})
const { value: name } = useField('name');
const { value: email } = useField('email');
const { value: password } = useField('password')
</script>

<template>
  <div class="mt-16">
    <div class="text-center text-lg font-bold">
      <h1>新規登録</h1>
    </div>
    <form class="mx-auto w-1/2">
      <div class="form-control mt-4">
        <label class="label">
          <span class="label-text">氏名</span>
          <span class="label-text-alt text-red-400">*</span>
        </label>
        <input
          type="text"
          v-model="name"
          placeholder="your name"
          class="input input-bordered"
        >
        <p class="text-red-400">
          {{ errors.name }}
        </p>
      </div>
      <div class="form-control mt-4">
        <label class="label">
          <span class="label-text">メールアドレス</span>
          <span class="label-text-alt text-red-400">*</span>
        </label>
        <input 
          type="email"
          v-model="email"
          placeholder="user@example.com"
          class="input input-bordered"
        >
        <p class="text-red-400">
          {{ errors.email }}
        </p>
      </div>
      <div class="form-control mt-4">
        <label class="label">
          <span class="label-text">パスワード</span>
          <span class="label-text-alt text-red-400">*</span>
        </label>
        <input
          type="password"
          v-model="password"
          placeholder="⚫⚫︎⚫︎⚫︎⚫︎⚫︎⚫︎︎"
          class="input input-bordered"
        >
        <p class="text-red-400">{{ errors.password }}</p>
      </div>
      <button type="submit" :disabled="!meta.valid" class="btn btn-primary w-full mt-16">登録</button>
    </form>
  </div>
</template>