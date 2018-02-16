import '../../js/jquery.circliful.min'

$( document ).ready(function() {
    $(".my-prc-chart_1").circliful({
        animation: 1,
        animationStep: 1,
        foregroundColor: '#e75735',
        backgroundColor: 'none',
        foregroundBorderWidth: 5,
        fontColor: '#9d9d9d',
        percentageTextSize: 40,
        textAdditionalCss: 'font-family: Conv_Lato-Light',
        noPercentageSign: true
    });
})