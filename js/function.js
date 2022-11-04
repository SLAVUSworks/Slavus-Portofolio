    //Web-Preload    
    $(document).ready(function() {
      
        setTimeout(function(){
          $('body').addClass('loaded');
          $('h1').css('color','#222222');
        }, 3000);
        
      });
    
    // bio-modal
    $(".modal-trigger").click(function(e) {
        e.preventDefault();
        dataModal = $(this).attr("data-modal");
        $("#" + dataModal).css({
            "display": "block"
        });
    });

    $(".close-modal, .modal-sandbox").click(function() {
        $(".modal").css({
            "display": "none"
        });
    });

    // hobby-modal
    $("#modal-trigger").click(function(e) {
        e.preventDefault();
        dataModal = $(this).attr("data-modal");
        $("#" + dataModal).css({
            "display": "block"
        });
    });

    $("#close-modal, #modal-sandbox").click(function() {
        $("#hobby").css({
            "display": "none"
        });
    });

    // Skills-modal
    $("#modal-trigger2").click(function(e) {
        e.preventDefault();
        dataModal = $(this).attr("data-modal");
        $("#" + dataModal).css({
            "display": "block"
        });
    });

    $("#close-modal2, #modal-sandbox2").click(function() {
        $("#Skills").css({
            "display": "none"
        });
    });

    // Repo-modal
    $("#modal-trigger3").click(function(e) {
        e.preventDefault();
        dataModal = $(this).attr("data-modal");
        $("#" + dataModal).css({
            "display": "block"
        });
    });

    $("#close-modal3, #modal-sandbox3").click(function() {
        $("#repo").css({
            "display": "none"
        });
    });