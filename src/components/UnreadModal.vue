<template>
  <transition name="modal" appear>
    <div class="modal-overlay">
      <div class="modal-window">
        <div class="modal-content">
          <slot />
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.modal-overlay {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  position: fixed;
  z-index: 30;
  top: 0;
  width: 100%;
  height: 100%;
  margin-top: 6.5em;
  background: rgba(0, 0, 0, 0.05);
}
.modal-window {
  background: rgba(201,63,71,0.5);
  border-radius: 20px;
  margin-top: 1em;
}
.modal-content {
  padding: 5px 10px;
  font-size: 0.9em;
  font-weight: bold;
}
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.4s;
}
.modal-enter-active .modal-window, 
.modal-leave-active .modal-window {
  transition: opacity 0.4s, transform 0.4s;
}
.modal-leave-active {
  transition: opacity 0.6s ease 0.4s;
}
.modal-enter,
.modal-leave-to {
  opacity: 0;
}
.modal-enter .modal-window, 
.modal-leave-to .modal-window  {
  opacity: 0;
  transform: translateY(-20px);
}

@media (min-width: 600px) {
.modal-window {
  background: rgba(201,63,71,0.5);
  border-radius: 20px;
  margin: 1em 15em 0 0;
}
}
@media (min-width: 1025px) {
.modal-window {
  background: rgba(201,63,71,0.5);
  border-radius: 20px;
  margin: 1em 15em 0 0;
}
}
</style>
