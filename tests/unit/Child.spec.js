import { shallowMount } from '@vue/test-utils';
import Child from '@/components/Child.vue';

describe('Child.vue', () => {
  it('debe emitir el texto ingresado al hacer clic en el botón', async () => {
    const wrapper = shallowMount(Child);
    const input = wrapper.find('input');
    const button = wrapper.find('button');

    // Simular ingreso de texto
    await input.setValue('Hola desde el hijo');
    
    // Simular clic en el botón
    await button.trigger('click');

    // Verificar que se emitió el evento con el texto
    expect(wrapper.emitted('text-sent')).toBeTruthy();
    expect(wrapper.emitted('text-sent')[0]).toEqual(['Hola desde el hijo']);
  });
});
