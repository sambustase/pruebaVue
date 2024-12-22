import { shallowMount } from '@vue/test-utils';
import Parent from '@/components/Parent.vue';
import Child from '@/components/Child.vue';

describe('Parent.vue', () => {
  it('debe actualizar el texto recibido del hijo', async () => {
    const wrapper = shallowMount(Parent);
    const child = wrapper.findComponent(Child);

    // Simular emisión del evento desde el hijo
    child.vm.$emit('text-sent', 'Texto enviado desde el hijo');

    // Esperar que el componente padre reciba el texto
    await wrapper.vm.$nextTick();

    // Verificar que el texto se muestra correctamente en el DOM
    expect(wrapper.text()).toContain('Texto recibido: Texto enviado desde el hijo');
  });
});
