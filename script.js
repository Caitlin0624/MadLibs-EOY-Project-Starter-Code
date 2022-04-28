let storiesCreated; 
$(".submit").click(function() {
    let name = $(".name-input").val();
    let transport = $(".transport-input").val();
    let adj = $(".adjective-input").val();
    let time = $(".number-input").val();
    console.log(name, transport, adj, time);
    $(".story").text ("One day my friendn " + name + " and I decided to take a trip to the beach, so we packed our bags and took the " + transport + " over. It was a " + adj + " day at the beach! We ended up staying for "  + time + " hours!");
});
 

