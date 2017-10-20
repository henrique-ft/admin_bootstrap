// Exclusion cofirmation
$('.need-confirmation-delete').click(function(e){
  
  if (!confirm("Deseja realmente excluir?")) {
    
    e.preventDefault();
  }
});