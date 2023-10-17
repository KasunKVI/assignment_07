$('#customer_section').css('display','none');
$('#item_section').css('display','none');
$('#order_section').css('display','none');

$('#navigation-bar>li').eq(0).on('click', () => {

    $('#home').css('display','block');
    $('#customer_section').css('display','none');
    $('#item_section').css('display','none');
    $('#order_section').css('display','none');
})

$('#navigation-bar>li').eq(1).on('click', () => {
    $('#home').css('display','none');
    $('#customer_section').css('display','none');
    $('#item_section').css('display','block');
    $('#order_section').css('display','none');
})


$('#navigation-bar>li').eq(2).on('click', () => {
    $('#home').css('display','none');
    $('#customer_section').css('display','block');
    $('#item_section').css('display','none');
    $('#order_section').css('display','none');
})


$('#navigation-bar>li').eq(3).on('click', () => {
    $('#home').css('display','none');
    $('#customer_section').css('display','none');
    $('#item_section').css('display','none');
    $('#order_section').css('display','block');
})


