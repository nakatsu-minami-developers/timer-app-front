import { mount } from '@vue/test-utils';
import Header from '@/components/Home/Header.vue';

describe('Header', () => {
  it('renders correctly', () => {
    const wrapper = mount(Header);
    expect(wrapper.text()).toBe('Timer App  会員登録  ログイン');
  });
});
