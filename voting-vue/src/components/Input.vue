<template>
  <div class="form-item">
    <label class="label">
      {{ label }}<span v-if="isRequired" style="color: red">*</span>
    </label>
    <div>
      <input
        type="text"
        :placeholder="placeholder"
        :value="modelValue"
        @change="$emit('update:modelValue', $event.target.value)"
        @blur="$emit('validate', name)"
      />
      <div class="error">{{ error }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'label',
    'name',
    'placeholder',
    'isRequired',
    'touched',
    'error',
    'modelValue'
  ]
}
</script>