<template>
    <div>
        <transition name="modal-animation">
            <div v-show="modalActive" class="modal">
                <transition name="modal-animation-inner">
                    <div v-show="modalActive" class="modal-inner">
                        <table>
                            <tr>
                                <td class="no-border left-align">{{ title }}</td>
                                <td class="no-border right-align"><font-awesome-icon @click="close" icon="xmark" /></td>
                            </tr>
                        </table>
                        <slot />
                        <div style="margin-left: 35%; margin-right:35%; width:30%; text-align: center;">
                            <table>
                                <tr>
                                    <td class="no-border left-align" colspan="1">
                                        <button @click="close" type="button">Batal</button>
                                    </td>
                                    <td class="no-border right-align" colspan="1">
                                        <button @click="submit" type="button">{{ submitLabel }}</button>
                                    </td>
                                </tr>
                            </table>

                        </div>
                    </div>
                </transition>
            </div>
        </transition>
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

// _variables
// _functions

// _variables
const emits = defineEmits([
    'close',
    'submit',
])
const props = defineProps({
    modalActive: {
        type: Boolean,
        default: false,
    },
    submitLabel: {
        type: String,
        default: "Submit"
    },
    title: {
        type: String
    }
})

// _functions
// - close
// - submit

// close
function close() {
    emits('close')
}

// submit
function submit() {
    emits('submit')
}

</script>

<style scoped>
.modal {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(192, 192, 192, 0.7);
}

.modal-inner {
    position: relative;
    max-width: 640px;
    width: 80%;
    background-color: #fff;
    padding: 64px 16px;

}
</style>