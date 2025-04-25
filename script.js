// Generic function to handle all modals
function setupModal(triggerClass, modalId) {
    const trigger = document.querySelector(triggerClass);
    const modal = document.getElementById(modalId);
    const closeBtn = modal.querySelector('.close');
  
    trigger.parentElement.onclick = () => {
      modal.style.display = "block";
      document.body.style.overflow = "hidden";
    };
  
    closeBtn.onclick = () => {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    };
  }
  
  // Initialize all modals when DOM loads
  document.addEventListener('DOMContentLoaded', () => {
    setupModal('.img1', 'biriyaniModal');
    setupModal('.img2', 'friedRiceModal');
    setupModal('.img3', 'noodlesModal');
    setupModal('.img4', 'eggRollModal');
    setupModal('.img5', 'momosModal');
    // Add all 15 items here
    
    // Close when clicking outside modal
    window.onclick = (event) => {
      if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
        document.body.style.overflow = "auto";
      }
    };
  });