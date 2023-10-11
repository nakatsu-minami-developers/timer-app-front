<script setup lang="ts">
import { useField, useForm } from 'vee-validate';
import { object, string, setLocale } from 'yup';

setLocale({
  mixed: {
    default: '不正な値です。',
    required: ({ label }) => `${label}は必須の項目です。`
  },
  string: {
    email: 'メールアドレスの形式ではありません。'
  }
});
const schema = object({
  email: string().required('').email().label('メールアドレス'),
  password: string().required('').label('パスワード')
});

const { errors, meta } = useForm({
  validationSchema: schema
});
const { value: email } = useField('email');
const { value: password } = useField('password');
</script>

<template>
  <div class="mt-16">
    <div class="text-center text-lg font-bold">
      <h1>ログイン</h1>
    </div>
    <div class="mx-auto w-1/2">
      <div class="form-control mt-4">
        <label class="label">
          <span class="label-text">メールアドレス</span>
          <span class="label-text-alt text-red-400">*</span>
        </label>
        <input type="email" v-model="email" data-test="email" class="input input-bordered" />
        <span class="error text-red-400">{{ errors.email }}</span>
      </div>
      <div class="form-control mt-4">
        <label class="label">
          <span class="label-text">パスワード</span>
          <span class="label-text-alt text-red-400">*</span>
        </label>
        <input type="password" v-model="password" class="input input-bordered" />
        <p class="text-red-400">{{ errors.password }}</p>
      </div>
      <div class="mt-8">
        <button
          type="submit"
          :disabled="!meta.valid"
          data-test="button"
          class="btn btn-primary w-full"
        >
          ログイン
        </button>
      </div>
    </div>
  </div>
</template>
