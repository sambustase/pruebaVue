import { mount } from '@vue/test-utils';
import Counter from '@/components/Counter.vue';
import store from '@/store';

describe('Counter.vue', () => {
  it('debe mostrar el valor inicial del contador', () => {
    const wrapper = mount(Counter, {
      global: {
        plugins: [store], // Incluir el store en la prueba
      },
    });

    expect(wrapper.text()).toContain('Valor actual: 0'); // Verificar valor inicial
  });

  it('debe incrementar el contador', async () => {
    const wrapper = mount(Counter, {
      global: {
        plugins: [store],
      },
    });

    const incrementButton = wrapper.find('button:first-child'); // Seleccionar el botón de incremento
    await incrementButton.trigger('click'); // Simular clic
    expect(wrapper.text()).toContain('Valor actual: 1'); // Verificar incremento
  });

  it('debe decrementar el contador', async () => {
    const wrapper = mount(Counter, {
      global: {
        plugins: [store],
      },
    });

    const decrementButton = wrapper.find('button:last-child'); // Seleccionar el botón de decremento
    await decrementButton.trigger('click'); // Simular clic
    expect(wrapper.text()).toContain('Valor actual: -1'); // Verificar decremento
  });
});
