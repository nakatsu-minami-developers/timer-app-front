import { mount } from '@vue/test-utils';
import Login from '@/views/Login.vue';
// import flushPromises from 'flush-promises';

describe('LoginForm', () => {
  it('renders correctly', () => {
    const wrapper = mount(Login);
    const button = wrapper.find('[data-test="button"]')
    expect(button.attributes().disabled).toBeUndefined();
  });
  
  // TODO: ここのテスト調査
  // it('email validation', async () => {
  //   const wrapper = mount(Login);
  //   await wrapper.get('[data-test="email"]').setValue('valid-email')
  //   // await flushPromises();
  //   const errorEl = wrapper.find('.error');
  //   expect(errorEl.text()).toBe('メールアドレスの形式ではありません。');
  // })
});
