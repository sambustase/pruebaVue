import { shallowMount } from '@vue/test-utils';
import router from '@/router';

// Importar las vistas
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Contact from '@/views/Contact.vue';

describe('Vue Router', () => {
  it('debe cargar el componente Home correctamente', async () => {
    const wrapper = shallowMount(Home, {
      global: {
        plugins: [router],
      },
    });

    expect(wrapper.exists()).toBe(true); // Verificar si el componente existe
    expect(wrapper.text()).toContain('Home'); // Verificar contenido del componente
  });

  it('debe cargar el componente About correctamente', async () => {
    const wrapper = shallowMount(About, {
      global: {
        plugins: [router],
      },
    });

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.text()).toContain('About');
  });

  it('debe cargar el componente Contact correctamente', async () => {
    const wrapper = shallowMount(Contact, {
      global: {
        plugins: [router],
      },
    });

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.text()).toContain('Contact');
  });
});
