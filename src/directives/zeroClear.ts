import type { Directive } from 'vue'

export const zeroClear: Directive<HTMLInputElement, void> = {
    mounted(el) {
        const onFocus = () => {
            if (el.value === '0') {
                el.value = ''
                el.dispatchEvent(new Event('input'))
            }
        }
        const onBlur = () => {
            if (el.value === '') {
                el.value = '0'
                el.dispatchEvent(new Event('input'))
            }
        }
        el.addEventListener('focus', onFocus)
        el.addEventListener('blur', onBlur)
            ; (el as any)._zc_onFocus = onFocus
            ; (el as any)._zc_onBlur = onBlur
    },
    unmounted(el) {
        el.removeEventListener('focus', (el as any)._zc_onFocus)
        el.removeEventListener('blur', (el as any)._zc_onBlur)
    }
}

export default zeroClear
