$(document).ready(function() {
  $('#table').DataTable({
    "language": {
    "search":         "Buscar:",
     "lengthMenu": "Mostrar _MENU_ filas por página",
     "zeroRecords": "Sin resultados",
     "info": "Página _PAGE_ de _PAGES_",
     "infoEmpty": "No records available",
     "infoFiltered": "(filtered from _MAX_ total records)"
   },
    "paging":   false,
    "info":     false,
    "searching":true,
    "autoWidth":true
  });
} );
